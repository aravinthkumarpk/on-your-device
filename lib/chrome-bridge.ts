import type { ChatTransport, UIMessage, UIMessageChunk } from 'ai';
import { toChatTurns, type ChatTurn } from '@root/lib/engine';

/**
 * Chrome's built-in model (Gemini Nano, through the Prompt API) as an instant
 * bridge: it answers while our model downloads, but only if Chrome already
 * has it on the device. We never start its 4 GB download.
 *
 * We call the Prompt API directly instead of through a provider package so
 * the "never download" rule is enforced in one small, tested place.
 */

/** Streams reply text as deltas. */
export type TextStreamer = (turns: ChatTurn[], signal?: AbortSignal) => AsyncIterable<string>;

export const CHROME_LABEL = "Chrome's built-in model";

/**
 * Chrome warns when a request doesn't say which language it will use, and
 * checks output safety per language. We ask for English in and out.
 */
const LANGUAGES = {
    expectedInputs: [{ type: 'text', languages: ['en'] }],
    expectedOutputs: [{ type: 'text', languages: ['en'] }],
} as const;

type LanguageOptions = typeof LANGUAGES;

interface PromptApi {
    availability(options?: LanguageOptions): Promise<'unavailable' | 'downloadable' | 'downloading' | 'available'>;
    create(options: LanguageOptions & {
        initialPrompts?: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
        signal?: AbortSignal;
    }): Promise<{
        promptStreaming(input: string, options?: { signal?: AbortSignal }): ReadableStream<string> & AsyncIterable<string>;
        destroy(): void;
    }>;
}

function promptApi(): PromptApi | null {
    const api = (globalThis as { LanguageModel?: PromptApi }).LanguageModel;
    return api && typeof api.availability === 'function' ? api : null;
}

/** True only when Chrome's model is already downloaded and ready. */
export async function isChromeModelReady(): Promise<boolean> {
    const api = promptApi();
    if (!api) return false;
    try {
        return (await api.availability(LANGUAGES)) === 'available';
    } catch {
        return false;
    }
}

/** Streams a reply from Chrome's built-in model. Call only after isChromeModelReady(). */
export const chromeStreamer: TextStreamer = async function* (turns, signal) {
    const api = promptApi();
    if (!api) throw new Error("Chrome's built-in model is not available.");
    const history = turns.slice(0, -1);
    const last = turns[turns.length - 1];
    const session = await api.create({ ...LANGUAGES, initialPrompts: history, signal });
    try {
        const stream = session.promptStreaming(last?.content ?? '', { signal });
        const reader = stream.getReader();
        for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            yield value;
        }
    } finally {
        session.destroy();
    }
};

/** Test stand-in for Chrome's model, used with ?engine=fake&chrome=ready. */
export const fakeChromeStreamer: TextStreamer = async function* (_turns, signal) {
    for (const word of 'Quick answer from the Chrome bridge.'.split(' ')) {
        if (signal?.aborted) return;
        await new Promise((r) => setTimeout(r, 15));
        yield word + ' ';
    }
};

/** Chat transport over a TextStreamer. Marks replies with { engine } (default 'chrome'). */
export class TextStreamerTransport implements ChatTransport<UIMessage> {
    constructor(
        private readonly streamer: TextStreamer,
        private readonly engine: string = 'chrome',
    ) {}

    async sendMessages({ messages, abortSignal }: Parameters<ChatTransport<UIMessage>['sendMessages']>[0]) {
        const streamer = this.streamer;
        const engine = this.engine;
        const turns = toChatTurns(messages);
        return new ReadableStream<UIMessageChunk>({
            async start(controller) {
                const id = `${engine}-text`;
                controller.enqueue({ type: 'start', messageMetadata: { engine } });
                controller.enqueue({ type: 'text-start', id });
                try {
                    for await (const delta of streamer(turns, abortSignal)) {
                        controller.enqueue({ type: 'text-delta', id, delta });
                    }
                    controller.enqueue({ type: 'text-end', id });
                    controller.enqueue({ type: 'finish', finishReason: abortSignal?.aborted ? 'other' : 'stop' });
                } catch (error) {
                    controller.enqueue({ type: 'text-end', id });
                    if (abortSignal?.aborted) {
                        controller.enqueue({ type: 'finish', finishReason: 'other' });
                    } else {
                        controller.enqueue({ type: 'error', errorText: error instanceof Error ? error.message : String(error) });
                    }
                }
                controller.close();
            },
        });
    }

    async reconnectToStream() {
        return null;
    }
}

/** Sends each message to whichever transport `choose` returns at that moment. */
export class RoutingTransport implements ChatTransport<UIMessage> {
    constructor(private readonly choose: () => ChatTransport<UIMessage>) {}

    sendMessages(options: Parameters<ChatTransport<UIMessage>['sendMessages']>[0]) {
        return this.choose().sendMessages(options);
    }

    async reconnectToStream() {
        return null;
    }
}
