import type { ChatTransport, UIMessage, UIMessageChunk } from 'ai';
import { toChatTurns, type WorkerEvent, type WorkerLike } from '@root/lib/engine';

let counter = 0;
const nextId = () => `gen-${Date.now().toString(36)}-${(counter++).toString(36)}`;

/**
 * AI SDK chat transport that runs generation in our Web Worker instead of
 * calling a server. useChat sends messages here and gets a UI message stream
 * back, so the page can use the standard AI SDK chat state.
 *
 * The worker sends the whole answer so far on each update. This turns that
 * into text and reasoning deltas.
 */
export class WorkerChatTransport implements ChatTransport<UIMessage> {
    constructor(
        private readonly getWorker: () => WorkerLike | null,
        private readonly onTps?: (tps: number | null) => void,
    ) {}

    async sendMessages({
        messages,
        abortSignal,
    }: Parameters<ChatTransport<UIMessage>['sendMessages']>[0]): Promise<ReadableStream<UIMessageChunk>> {
        const worker = this.getWorker();
        if (!worker) throw new Error('The model is not loaded yet.');

        const id = nextId();
        const onTps = this.onTps;

        return new ReadableStream<UIMessageChunk>({
            start(controller) {
                let text = '';
                let thought = '';
                let textOpen = false;
                let reasoningOpen = false;
                let closed = false;

                const close = (final: UIMessageChunk[]) => {
                    if (closed) return;
                    closed = true;
                    if (reasoningOpen) controller.enqueue({ type: 'reasoning-end', id: `${id}-r` });
                    if (textOpen) controller.enqueue({ type: 'text-end', id: `${id}-t` });
                    for (const chunk of final) controller.enqueue(chunk);
                    worker.removeEventListener('message', listener);
                    abortSignal?.removeEventListener('abort', onAbort);
                    onTps?.(null);
                    controller.close();
                };

                const listener = (event: MessageEvent<WorkerEvent>) => {
                    const msg = event.data;
                    if (!('id' in msg) || msg.id !== id) {
                        // A load error has no id but still ends this reply.
                        if (msg.status === 'error' && !('id' in msg && msg.id)) {
                            close([{ type: 'error', errorText: msg.data }]);
                        }
                        return;
                    }
                    switch (msg.status) {
                        case 'start':
                            controller.enqueue({ type: 'start' });
                            break;
                        case 'update': {
                            const nextThought = msg.thought ?? '';
                            if (nextThought.length > thought.length && nextThought.startsWith(thought)) {
                                if (!reasoningOpen) {
                                    reasoningOpen = true;
                                    controller.enqueue({ type: 'reasoning-start', id: `${id}-r` });
                                }
                                controller.enqueue({ type: 'reasoning-delta', id: `${id}-r`, delta: nextThought.slice(thought.length) });
                                thought = nextThought;
                            }
                            const next = msg.output;
                            if (next.length > text.length && next.startsWith(text)) {
                                if (!textOpen) {
                                    textOpen = true;
                                    controller.enqueue({ type: 'text-start', id: `${id}-t` });
                                }
                                controller.enqueue({ type: 'text-delta', id: `${id}-t`, delta: next.slice(text.length) });
                                text = next;
                            }
                            onTps?.(msg.tps ?? null);
                            break;
                        }
                        case 'complete':
                            close([{ type: 'finish', finishReason: abortSignal?.aborted ? 'other' : 'stop' }]);
                            break;
                        case 'error':
                            close([{ type: 'error', errorText: msg.data }]);
                            break;
                    }
                };

                const onAbort = () => worker.postMessage({ type: 'interrupt', id });

                worker.addEventListener('message', listener);
                abortSignal?.addEventListener('abort', onAbort);
                worker.postMessage({ type: 'generate', id, data: toChatTurns(messages) });
            },
        });
    }

    async reconnectToStream(): Promise<ReadableStream<UIMessageChunk> | null> {
        // Generation lives in this tab's worker, so there is nothing to resume.
        return null;
    }
}
