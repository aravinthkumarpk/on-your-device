import { loadModel, type WorkerEvent, type WorkerLike } from '@root/lib/engine';
import type { Dtype } from '@root/lib/models';
import { ndjson, OLLAMA_URL } from '@root/lib/ollama';

/**
 * The benchmark behind /bench. It times each model on this device and
 * returns plain numbers, so a run can be pasted into the model-per-device table.
 */

/** Same prompt for every model, long enough to get a steady speed. */
export const BENCH_PROMPT = 'Explain in about 150 words why the sky is blue.';

export interface BenchResult {
    engine: 'browser' | 'ollama';
    model: string;
    /** q4f16 or q4 for browser models. */
    dtype?: Dtype;
    /** Time to load, including any download. Ollama: time to load into memory. */
    loadMs: number | null;
    /** From sending the prompt to the first piece of the answer. */
    firstTokenMs: number | null;
    tokensPerSecond: number | null;
    outputChars: number;
    error?: string;
}

export interface BenchReport {
    version: 1;
    ranAt: string;
    prompt: string;
    device: Record<string, unknown>;
    results: BenchResult[];
}

const round = (n: number | null | undefined, digits = 0) =>
    n == null || !Number.isFinite(n) ? null : Math.round(n * 10 ** digits) / 10 ** digits;

/** Waits for worker events until `done` returns a value. Rejects on an error event. */
function until<T>(worker: WorkerLike, done: (e: WorkerEvent) => T | undefined): Promise<T> {
    return new Promise((resolve, reject) => {
        const listener = (event: MessageEvent<WorkerEvent>) => {
            const e = event.data;
            if (e.status === 'error') {
                worker.removeEventListener('message', listener);
                reject(new Error(e.data));
                return;
            }
            const value = done(e);
            if (value !== undefined) {
                worker.removeEventListener('message', listener);
                resolve(value);
            }
        };
        worker.addEventListener('message', listener);
    });
}

/** Loads one browser model in `worker`, then times one answer. */
export async function benchBrowserModel(
    worker: WorkerLike,
    model: { id: string; label: string; dtype: Dtype },
    now: () => number = () => performance.now(),
): Promise<BenchResult> {
    const result: BenchResult = { engine: 'browser', model: model.label, dtype: model.dtype, loadMs: null, firstTokenMs: null, tokensPerSecond: null, outputChars: 0 };
    try {
        const loadStart = now();
        const ready = until(worker, (e) => (e.status === 'ready' ? true : undefined));
        loadModel(worker, { id: model.id, dtype: model.dtype });
        await ready;
        result.loadMs = round(now() - loadStart);

        const id = `bench-${model.id}`;
        let firstAt: number | null = null;
        let tps: number | undefined;
        const sentAt = now();
        const output = until(worker, (e) => {
            if (e.status === 'update' && e.id === id) {
                if (firstAt === null && e.output) firstAt = now();
                if (e.tps) tps = e.tps;
            }
            return e.status === 'complete' && e.id === id ? e.output ?? '' : undefined;
        });
        worker.postMessage({ type: 'generate', id, data: [{ role: 'user', content: BENCH_PROMPT }] });
        const text = await output;
        result.firstTokenMs = firstAt === null ? null : round(firstAt - sentAt);
        result.tokensPerSecond = round(tps, 1);
        result.outputChars = text.length;
    } catch (error) {
        result.error = error instanceof Error ? error.message : String(error);
    }
    return result;
}

interface OllamaLine {
    message?: { content?: string };
    done?: boolean;
    error?: string;
    load_duration?: number;
    eval_count?: number;
    eval_duration?: number;
}

/** Times one answer from an Ollama model. Speed comes from Ollama's own counters. */
export async function benchOllamaModel(
    tag: string,
    { fetchFn = fetch, base = OLLAMA_URL, now = () => performance.now() }: { fetchFn?: typeof fetch; base?: string; now?: () => number } = {},
): Promise<BenchResult> {
    const result: BenchResult = { engine: 'ollama', model: tag, loadMs: null, firstTokenMs: null, tokensPerSecond: null, outputChars: 0 };
    try {
        const sentAt = now();
        const res = await fetchFn(`${base}/api/chat`, {
            targetAddressSpace: 'loopback',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: tag, messages: [{ role: 'user', content: BENCH_PROMPT }], stream: true, think: false }),
        } as RequestInit);
        if (!res.ok || !res.body) throw new Error(`Ollama did not answer (HTTP ${res.status}).`);
        for await (const line of ndjson<OllamaLine>(res.body)) {
            if (line.error) throw new Error(line.error);
            const piece = line.message?.content ?? '';
            if (piece && result.firstTokenMs === null) result.firstTokenMs = round(now() - sentAt);
            result.outputChars += piece.length;
            if (line.done) {
                // Ollama reports durations in nanoseconds.
                if (line.load_duration != null) result.loadMs = round(line.load_duration / 1e6);
                if (line.eval_count && line.eval_duration) result.tokensPerSecond = round(line.eval_count / (line.eval_duration / 1e9), 1);
                break;
            }
        }
    } catch (error) {
        result.error = error instanceof Error ? error.message : String(error);
    }
    return result;
}

export function buildReport(device: Record<string, unknown>, results: BenchResult[], ranAt = new Date()): BenchReport {
    return { version: 1, ranAt: ranAt.toISOString(), prompt: BENCH_PROMPT, device, results };
}
