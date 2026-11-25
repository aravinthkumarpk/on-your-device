import { describe, expect, it } from 'vitest';
// Plain JS module served from /public for the worker.
import * as rf from '@root/public/resumable-fetch.js';

type FakeFetch = (url: string, init: RequestInit) => Promise<Response>;
type Log = (entry: Record<string, unknown>) => void;
const createResumableFetch = rf.createResumableFetch as unknown as (
    fetchFn: FakeFetch, log?: Log, options?: Record<string, unknown>,
) => (url: string, init: RequestInit) => Promise<Response>;
const classify = rf.classify as (error: unknown) => string;

const BYTES = new Uint8Array(100).map((_, i) => i);
const URL_ = 'https://huggingface.co/org/model/resolve/main/onnx/model.onnx_data';

/** A body that sends `bytes` in chunks of 10, then fails if `failAt` is reached. */
function body(bytes: Uint8Array, failAt?: number, error: Error = new TypeError('network error')) {
    let i = 0;
    return new ReadableStream<Uint8Array>({
        pull(c) {
            if (failAt !== undefined && i >= failAt) return c.error(error);
            if (i >= bytes.length) return c.close();
            c.enqueue(bytes.slice(i, i + 10));
            i += 10;
        },
    });
}

async function readAll(res: Response) {
    return new Uint8Array(await res.arrayBuffer());
}

type Call = { range: string | null };
const noSleep = { sleep: async () => {} };

describe('createResumableFetch', () => {
    it('resumes a download that dies midway with a Range request', async () => {
        const calls: Call[] = [];
        const log: Array<Record<string, unknown>> = [];
        const fetchFn = async (_url: string, init: RequestInit) => {
            const range = new Headers(init.headers).get('Range');
            calls.push({ range });
            if (!range) return new Response(body(BYTES, 40), { headers: { 'content-length': '100' } });
            const start = Number(range.replace(/\D+(\d+)-/, '$1'));
            return new Response(body(BYTES.slice(start)), {
                status: 206,
                headers: { 'content-length': String(100 - start), 'content-range': `bytes ${start}-99/100` },
            });
        };
        const f = createResumableFetch(fetchFn, (e: Record<string, unknown>) => log.push(e), noSleep);
        const res = await f(URL_, {});
        expect(await readAll(res)).toEqual(BYTES);
        expect(calls.map((c) => c.range)).toEqual([null, 'bytes=40-']);
        expect(log.map((e) => e.event)).toEqual(['start', 'dropped', 'resumed', 'done']);
        expect(log[1]).toMatchObject({ file: 'model.onnx_data', host: 'huggingface.co', kind: 'network', loaded: 40, total: 100 });
    });

    it('skips bytes it already has when the server ignores Range', async () => {
        let n = 0;
        const fetchFn = async () => new Response(body(BYTES, n++ === 0 ? 30 : undefined), { headers: { 'content-length': '100' } });
        const f = createResumableFetch(fetchFn, () => {}, noSleep);
        expect(await readAll(await f(URL_, {}))).toEqual(BYTES);
    });

    it('retries a request that fails to start, then gives up with the error', async () => {
        let n = 0;
        const log: Array<Record<string, unknown>> = [];
        const fetchFn = async () => {
            n++;
            throw new TypeError('Failed to fetch');
        };
        const f = createResumableFetch(fetchFn, (e: Record<string, unknown>) => log.push(e), { ...noSleep, maxRetries: 3 });
        await expect(f(URL_, {})).rejects.toThrow('Failed to fetch');
        expect(n).toBe(3);
        expect(log.map((e) => e.level)).toEqual(['warn', 'warn', 'error']);
    });

    it('retries a 503, and hands a 404 back so optional files stay optional', async () => {
        let n = 0;
        const flaky = async () => (n++ === 0 ? new Response('busy', { status: 503 }) : new Response(body(BYTES), { headers: { 'content-length': '100' } }));
        expect(await readAll(await createResumableFetch(flaky, () => {}, noSleep)(URL_, {}))).toEqual(BYTES);

        let m = 0;
        const missing = async () => {
            m++;
            return new Response('nope', { status: 404 });
        };
        expect((await createResumableFetch(missing, () => {}, noSleep)(URL_, {})).status).toBe(404);
        expect(m).toBe(1);
    });

    it('treats a silent connection as a stall and resumes', async () => {
        let n = 0;
        const log: Array<Record<string, unknown>> = [];
        const fetchFn = async (_url: string, init: RequestInit) => {
            if (n++ === 0) {
                // Sends 20 bytes, then nothing until aborted.
                let sent = false;
                const stream = new ReadableStream<Uint8Array>({
                    pull(c) {
                        if (!sent) {
                            sent = true;
                            c.enqueue(BYTES.slice(0, 20));
                            return;
                        }
                        return new Promise((_, reject) => init.signal?.addEventListener('abort', () => reject(init.signal?.reason)));
                    },
                });
                return new Response(stream, { headers: { 'content-length': '100' } });
            }
            return new Response(body(BYTES.slice(20)), { status: 206, headers: { 'content-length': '80', 'content-range': 'bytes 20-99/100' } });
        };
        const f = createResumableFetch(fetchFn, (e: Record<string, unknown>) => log.push(e), { ...noSleep, stallMs: 20 });
        expect(await readAll(await f(URL_, {}))).toEqual(BYTES);
        expect(log.find((e) => e.event === 'dropped')).toMatchObject({ kind: 'stall', loaded: 20 });
    });

    it('passes Range requests through untouched', async () => {
        let seen: string | null = null;
        const fetchFn = async (_u: string, init: RequestInit) => {
            seen = new Headers(init.headers).get('Range');
            return new Response('x', { status: 206 });
        };
        const res = await createResumableFetch(fetchFn)(URL_, { headers: { Range: 'bytes=0-0' } });
        expect(res.status).toBe(206);
        expect(seen).toBe('bytes=0-0');
    });
});

describe('classify', () => {
    it('sorts errors people can act on', () => {
        expect(classify(new TypeError('Failed to fetch'))).toBe('network');
        expect(classify(Object.assign(new Error('x'), { name: 'QuotaExceededError' }))).toBe('storage');
        expect(classify(new TypeError("Cannot read properties of undefined (reading 'gpu')"))).toBe('other');
    });
});
