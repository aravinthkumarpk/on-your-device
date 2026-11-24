import type { UIMessage, UIMessageChunk } from 'ai';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
    RoutingTransport,
    TextStreamerTransport,
    chromeStreamer,
    isChromeModelReady,
    type TextStreamer,
} from '@root/lib/chrome-bridge';
import { toDisplayTurns } from '@root/lib/engine';

// V10: Chrome's built-in model is used only when it is already on the device.

const g = globalThis as { LanguageModel?: unknown };
afterEach(() => {
    delete g.LanguageModel;
});

function mockPromptApi(availability: string) {
    const create = vi.fn(async () => ({
        promptStreaming: () => new ReadableStream<string>({
            start(c) {
                c.enqueue('Hi ');
                c.enqueue('there');
                c.close();
            },
        }),
        destroy: vi.fn(),
    }));
    g.LanguageModel = { availability: vi.fn(async () => availability), create };
    return { create };
}

const user = (text: string): UIMessage => ({ id: text, role: 'user', parts: [{ type: 'text', text }] });

async function collect(stream: ReadableStream<UIMessageChunk>) {
    const out: UIMessageChunk[] = [];
    const reader = stream.getReader();
    for (;;) {
        const { done, value } = await reader.read();
        if (done) return out;
        out.push(value);
    }
}

const send = (t: { sendMessages: TextStreamerTransport['sendMessages'] }, abortSignal?: AbortSignal) =>
    t.sendMessages({ trigger: 'submit-message', chatId: 'c', messageId: undefined, messages: [user('q')], abortSignal });

describe('isChromeModelReady', () => {
    it('is false when the Prompt API is missing', async () => {
        expect(await isChromeModelReady()).toBe(false);
    });

    it('is true only when the model is already downloaded', async () => {
        for (const [state, expected] of [['available', true], ['downloadable', false], ['downloading', false], ['unavailable', false]] as const) {
            const { create } = mockPromptApi(state);
            expect(await isChromeModelReady()).toBe(expected);
            // Checking must never create a session, which could start a 4 GB download.
            expect(create).not.toHaveBeenCalled();
        }
    });

    it('is false when availability() throws', async () => {
        g.LanguageModel = { availability: async () => { throw new Error('nope'); } };
        expect(await isChromeModelReady()).toBe(false);
    });
});

describe('chromeStreamer', () => {
    it('streams deltas from promptStreaming and passes history as initial prompts', async () => {
        const { create } = mockPromptApi('available');
        let text = '';
        for await (const d of chromeStreamer([{ role: 'user', content: 'a' }, { role: 'assistant', content: 'b' }, { role: 'user', content: 'c' }])) text += d;
        expect(text).toBe('Hi there');
        expect(create).toHaveBeenCalledWith(expect.objectContaining({
            initialPrompts: [{ role: 'user', content: 'a' }, { role: 'assistant', content: 'b' }],
        }));
    });
});

describe('TextStreamerTransport', () => {
    const streamer: TextStreamer = async function* () {
        yield 'Quick ';
        yield 'answer';
    };

    it('marks replies as from Chrome and streams the text', async () => {
        const chunks = await collect(await send(new TextStreamerTransport(streamer)));
        expect(chunks[0]).toEqual({ type: 'start', messageMetadata: { engine: 'chrome' } });
        expect(chunks.flatMap((c) => (c.type === 'text-delta' ? [c.delta] : [])).join('')).toBe('Quick answer');
        expect(chunks[chunks.length - 1]).toEqual({ type: 'finish', finishReason: 'stop' });
    });

    it('turns a failure into an error chunk', async () => {
        const failing: TextStreamer = async function* () {
            yield 'x';
            throw new Error('session lost');
        };
        const chunks = await collect(await send(new TextStreamerTransport(failing)));
        expect(chunks).toContainEqual({ type: 'error', errorText: 'session lost' });
    });
});

describe('RoutingTransport', () => {
    it('asks for the transport at send time', async () => {
        let useA = true;
        const a = new TextStreamerTransport(async function* () { yield 'A'; });
        const b = new TextStreamerTransport(async function* () { yield 'B'; });
        const router = new RoutingTransport(() => (useA ? a : b));
        const text = async () => (await collect(await send(router))).flatMap((c) => (c.type === 'text-delta' ? [c.delta] : [])).join('');
        expect(await text()).toBe('A');
        useA = false;
        expect(await text()).toBe('B');
    });
});

describe('toDisplayTurns', () => {
    it('labels replies from Chrome', () => {
        const turns = toDisplayTurns([
            user('q'),
            { id: 'a', role: 'assistant', metadata: { engine: 'chrome' }, parts: [{ type: 'text', text: 'from chrome' }] },
            { id: 'b', role: 'assistant', parts: [{ type: 'text', text: 'from qwen' }] },
        ]);
        expect(turns.map((t) => t.badge)).toEqual([undefined, "Answered by Chrome's built-in model", undefined]);
    });
});
