import { describe, expect, it } from 'vitest';
import { benchBrowserModel, benchOllamaModel, buildReport, BENCH_PROMPT } from '@root/lib/bench';
import type { WorkerEvent, WorkerLike } from '@root/lib/engine';

type Listener = (event: MessageEvent<WorkerEvent>) => void;

/** A clock the fake worker moves forward, so timings are exact. */
function fakeWorker({ failLoad = false } = {}) {
    let t = 0;
    const now = () => t;
    const listeners = new Set<Listener>();
    const emit = (data: WorkerEvent, after = 0) => {
        t += after;
        listeners.forEach((l) => l({ data } as MessageEvent<WorkerEvent>));
    };
    const worker: WorkerLike = {
        postMessage(message) {
            const m = message as { type: string; id: string };
            queueMicrotask(() => {
                if (m.type === 'load') emit(failLoad ? { status: 'error', data: 'Out of GPU memory.' } : { status: 'ready' }, 4000);
                if (m.type === 'generate') {
                    emit({ status: 'start', id: m.id });
                    emit({ status: 'update', id: m.id, output: 'Light', tps: 20 }, 250);
                    emit({ status: 'update', id: m.id, output: 'Light scatters.', tps: 31.25 }, 100);
                    emit({ status: 'complete', id: m.id, output: 'Light scatters.' });
                }
            });
        },
        addEventListener: (_t, l) => listeners.add(l),
        removeEventListener: (_t, l) => listeners.delete(l),
    };
    return { worker, now, listeners };
}

const model = { id: 'onnx-community/Qwen3.5-2B-ONNX-OPT', label: 'Qwen3.5 2B', dtype: 'q4f16' as const };

describe('benchBrowserModel', () => {
    it('times the load, the first word and the speed', async () => {
        const { worker, now, listeners } = fakeWorker();
        const r = await benchBrowserModel(worker, model, now);
        expect(r).toEqual({
            engine: 'browser', model: 'Qwen3.5 2B', dtype: 'q4f16',
            loadMs: 4000, firstTokenMs: 250, tokensPerSecond: 31.3, outputChars: 15,
        });
        expect(listeners.size).toBe(0);
    });

    it('reports a failed load instead of throwing', async () => {
        const { worker, now } = fakeWorker({ failLoad: true });
        const r = await benchBrowserModel(worker, model, now);
        expect(r.error).toBe('Out of GPU memory.');
        expect(r.loadMs).toBeNull();
    });
});

const ndjsonResponse = (lines: object[]) => new Response(lines.map((l) => JSON.stringify(l)).join('\n') + '\n');

describe('benchOllamaModel', () => {
    it("uses Ollama's own counters for load time and speed", async () => {
        let body: { model: string; messages: Array<{ content: string }>; think: boolean } | undefined;
        const fetchFn = (async (_url: string, init: RequestInit) => {
            body = JSON.parse(String(init.body));
            return ndjsonResponse([
                { message: { content: 'Light ' }, done: false },
                { message: { content: 'scatters.' }, done: false },
                // 120 tokens in 2.4 s is 50 tok/s. Load took 1.5 s.
                { message: { content: '' }, done: true, load_duration: 1.5e9, eval_count: 120, eval_duration: 2.4e9 },
            ]);
        }) as unknown as typeof fetch;
        const r = await benchOllamaModel('qwen3.5:9b', { fetchFn, now: () => 0 });
        expect(r).toEqual({ engine: 'ollama', model: 'qwen3.5:9b', loadMs: 1500, firstTokenMs: 0, tokensPerSecond: 50, outputChars: 15 });
        expect(body).toMatchObject({ model: 'qwen3.5:9b', think: false, messages: [{ content: BENCH_PROMPT }] });
    });

    it('reports Ollama errors', async () => {
        const fetchFn = (async () => ndjsonResponse([{ error: 'model not found' }])) as unknown as typeof fetch;
        const r = await benchOllamaModel('nope', { fetchFn });
        expect(r.error).toBe('model not found');
    });
});

describe('buildReport', () => {
    it('is stable JSON with the prompt and device', () => {
        const report = buildReport({ isMobile: false }, [], new Date('2026-11-24T00:00:00Z'));
        expect(JSON.parse(JSON.stringify(report))).toEqual({
            version: 1, ranAt: '2026-11-24T00:00:00.000Z', prompt: BENCH_PROMPT, device: { isMobile: false }, results: [],
        });
    });
});
