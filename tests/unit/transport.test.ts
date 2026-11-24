import type { UIMessage, UIMessageChunk } from 'ai';
import { describe, expect, it } from 'vitest';
import { toChatTurns, type WorkerEvent, type WorkerLike } from '@root/lib/engine';
import { WorkerChatTransport } from '@root/lib/worker-transport';

type Listener = (event: MessageEvent<WorkerEvent>) => void;

/** A fake worker that replies to `generate` with a scripted list of events. */
function scriptedWorker(script: (id: string) => WorkerEvent[]) {
    const listeners = new Set<Listener>();
    const posted: Array<{ type: string; id?: string }> = [];
    const emit = (data: WorkerEvent) => listeners.forEach((l) => l({ data } as MessageEvent<WorkerEvent>));
    const worker: WorkerLike = {
        postMessage(message) {
            const m = message as { type: string; id: string };
            posted.push(m);
            if (m.type === 'generate') queueMicrotask(() => script(m.id).forEach(emit));
        },
        addEventListener: (_t, l) => listeners.add(l),
        removeEventListener: (_t, l) => listeners.delete(l),
    };
    return { worker, posted, emit, listeners };
}

const userMessage = (text: string): UIMessage => ({ id: text, role: 'user', parts: [{ type: 'text', text }] });

async function collect(stream: ReadableStream<UIMessageChunk>) {
    const chunks: UIMessageChunk[] = [];
    const reader = stream.getReader();
    for (;;) {
        const { done, value } = await reader.read();
        if (done) return chunks;
        chunks.push(value);
    }
}

const send = (t: WorkerChatTransport, messages: UIMessage[], abortSignal?: AbortSignal) =>
    t.sendMessages({ trigger: 'submit-message', chatId: 'c', messageId: undefined, messages, abortSignal });

describe('toChatTurns', () => {
    it('keeps text, drops empty turns, and keeps the last N', () => {
        const msgs = [userMessage('a'), userMessage(''), userMessage('b'), userMessage('c')];
        expect(toChatTurns(msgs, 2)).toEqual([
            { role: 'user', content: 'b' },
            { role: 'user', content: 'c' },
        ]);
    });
});

describe('WorkerChatTransport', () => {
    it('turns cumulative worker updates into text deltas', async () => {
        const { worker, listeners } = scriptedWorker((id) => [
            { status: 'start', id },
            { status: 'update', id, output: 'Hel', tps: 10 },
            { status: 'update', id, output: 'Hello', tps: 12 },
            { status: 'complete', id, output: 'Hello' },
        ]);
        const chunks = await collect(await send(new WorkerChatTransport(() => worker), [userMessage('hi')]));
        expect(chunks.map((c) => c.type)).toEqual(['start', 'text-start', 'text-delta', 'text-delta', 'text-end', 'finish']);
        const text = chunks.flatMap((c) => (c.type === 'text-delta' ? [c.delta] : [])).join('');
        expect(text).toBe('Hello');
        expect(listeners.size).toBe(0);
    });

    it('streams thinking as reasoning parts', async () => {
        const { worker } = scriptedWorker((id) => [
            { status: 'start', id },
            { status: 'update', id, output: '', thought: 'Let me' },
            { status: 'update', id, output: 'Yes', thought: 'Let me think' },
            { status: 'complete', id },
        ]);
        const chunks = await collect(await send(new WorkerChatTransport(() => worker), [userMessage('q')]));
        const reasoning = chunks.flatMap((c) => (c.type === 'reasoning-delta' ? [c.delta] : [])).join('');
        expect(reasoning).toBe('Let me think');
        expect(chunks.map((c) => c.type)).toContain('reasoning-end');
    });

    it('ignores events for other requests', async () => {
        const { worker } = scriptedWorker((id) => [
            { status: 'start', id },
            { status: 'update', id: 'someone-else', output: 'WRONG' },
            { status: 'update', id, output: 'right' },
            { status: 'complete', id },
        ]);
        const chunks = await collect(await send(new WorkerChatTransport(() => worker), [userMessage('q')]));
        const text = chunks.flatMap((c) => (c.type === 'text-delta' ? [c.delta] : [])).join('');
        expect(text).toBe('right');
    });

    it('reports worker errors in the stream', async () => {
        const { worker } = scriptedWorker((id) => [{ status: 'error', id, data: 'out of memory' }]);
        const chunks = await collect(await send(new WorkerChatTransport(() => worker), [userMessage('q')]));
        expect(chunks).toContainEqual({ type: 'error', errorText: 'out of memory' });
    });

    it('sends interrupt to the worker when aborted', async () => {
        const { worker, posted, emit } = scriptedWorker((id) => [{ status: 'start', id }]);
        const abort = new AbortController();
        const stream = await send(new WorkerChatTransport(() => worker), [userMessage('q')], abort.signal);
        await Promise.resolve();
        abort.abort();
        const gen = posted.find((p) => p.type === 'generate')!;
        expect(posted).toContainEqual({ type: 'interrupt', id: gen.id });
        emit({ status: 'complete', id: gen.id! });
        const chunks = await collect(stream);
        expect(chunks[chunks.length - 1]).toEqual({ type: 'finish', finishReason: 'other' });
    });

    it('throws when no worker is ready', async () => {
        await expect(send(new WorkerChatTransport(() => null), [userMessage('q')])).rejects.toThrow('not loaded');
    });
});
