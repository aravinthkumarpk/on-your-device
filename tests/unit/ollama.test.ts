import { describe, expect, it, vi } from 'vitest';
import {
    allowSiteCommand,
    serveCommand,
    hasModel,
    isSafari,
    listLocalModels,
    ollamaStreamer,
    pickLocalModel,
    probeOllama,
    pullModel,
    type PullProgress,
} from '@root/lib/ollama';

// V11 to V13: detection, the copy line, the RAM pick, and /api/pull progress.

const streamOf = (lines: object[]) =>
    new Response(new ReadableStream<Uint8Array>({
        start(c) {
            const enc = new TextEncoder();
            // Split mid-line on purpose to test buffering.
            const text = lines.map((l) => JSON.stringify(l)).join('\n') + '\n';
            const mid = Math.floor(text.length / 2);
            c.enqueue(enc.encode(text.slice(0, mid)));
            c.enqueue(enc.encode(text.slice(mid)));
            c.close();
        },
    }));

describe('probeOllama', () => {
    it('is ready when the CORS request succeeds', async () => {
        const f = vi.fn(async () => new Response('{"version":"0.40.17"}'));
        expect(await probeOllama(f as unknown as typeof fetch)).toBe('ready');
    });

    it('is blocked when only the no-cors request gets through', async () => {
        const f = vi.fn(async (_u: string, init?: RequestInit) => {
            if (init?.mode === 'no-cors') return new Response(null);
            throw new TypeError('Failed to fetch');
        });
        expect(await probeOllama(f as unknown as typeof fetch)).toBe('blocked');
    });

    it('is missing when nothing answers', async () => {
        const f = vi.fn(async () => {
            throw new TypeError('Failed to fetch');
        });
        expect(await probeOllama(f as unknown as typeof fetch)).toBe('missing');
    });

    it('marks requests as loopback for Chrome local network access', async () => {
        const f = vi.fn(async () => new Response('{}'));
        await probeOllama(f as unknown as typeof fetch);
        expect((f.mock.calls[0] as unknown as [string, RequestInit])[1]).toMatchObject({ targetAddressSpace: 'loopback' });
    });
});

describe('pickLocalModel (by Mac memory)', () => {
    it('follows the agreed table', () => {
        expect(pickLocalModel(8).tag).toBe('qwen3.5:4b');
        expect(pickLocalModel(16).tag).toBe('qwen3.5:9b');
        expect(pickLocalModel(24).tag).toBe('gemma4:26b');
        expect(pickLocalModel(32).tag).toBe('inkling-2-mini');
        expect(pickLocalModel(48).tag).toBe('qwen3.8:27b');
        expect(pickLocalModel(128).tag).toBe('qwen3.8:27b');
        expect(pickLocalModel(4).tag).toBe('qwen3.5:4b');
    });
});

describe('allowSiteCommand', () => {
    it('allows exactly this origin and restarts Ollama in one line', () => {
        const cmd = allowSiteCommand('https://onyourdevice.ai');
        expect(cmd).toContain('launchctl setenv OLLAMA_ORIGINS "https://onyourdevice.ai"');
        expect(cmd).toContain(`osascript -e 'quit app "Ollama"'`);
        expect(cmd).toContain('open -a Ollama');
        expect(cmd).not.toContain('\n');
        expect(cmd).not.toContain('*');
    });
});

describe('serveCommand', () => {
    it('frees the port and serves with only this origin allowed', () => {
        const cmd = serveCommand('https://onyourdevice.ai');
        expect(cmd).toContain('brew services stop ollama');
        expect(cmd).toMatch(/OLLAMA_ORIGINS="https:\/\/onyourdevice\.ai" ollama serve$/);
        expect(cmd).not.toContain('*');
    });
});

describe('models already pulled', () => {
    it('matches tags with and without :latest', async () => {
        const f = vi.fn(async () => new Response(JSON.stringify({ models: [{ name: 'inkling-2-mini:latest' }, { name: 'qwen3.5:9b' }] })));
        const installed = await listLocalModels(f as unknown as typeof fetch);
        expect(hasModel(installed, 'inkling-2-mini')).toBe(true);
        expect(hasModel(installed, 'qwen3.5:9b')).toBe(true);
        expect(hasModel(installed, 'qwen3.5:4b')).toBe(false);
    });
});

describe('pullModel', () => {
    it('adds up bytes across layers and stops at success', async () => {
        const f = vi.fn(async () => streamOf([
            { status: 'pulling manifest' },
            { status: 'pulling a', digest: 'a', total: 100, completed: 50 },
            { status: 'pulling b', digest: 'b', total: 300, completed: 0 },
            { status: 'pulling a', digest: 'a', total: 100, completed: 100 },
            { status: 'pulling b', digest: 'b', total: 300, completed: 300 },
            { status: 'success' },
        ]));
        const seen: PullProgress[] = [];
        await pullModel('qwen3.5:9b', (p) => seen.push(p), { fetchFn: f as unknown as typeof fetch });
        expect(seen.at(-1)).toEqual({ status: 'success', completed: 400, total: 400 });
        expect(seen.find((p) => p.total === 400 && p.completed === 50)).toBeTruthy();
        expect(JSON.parse((f.mock.calls[0] as unknown as [string, RequestInit])[1].body as string)).toEqual({ model: 'qwen3.5:9b', stream: true });
    });

    it('throws Ollama errors', async () => {
        const f = vi.fn(async () => streamOf([{ error: 'pull model manifest: file does not exist' }]));
        await expect(pullModel('nope', () => undefined, { fetchFn: f as unknown as typeof fetch })).rejects.toThrow('file does not exist');
    });
});

describe('ollamaStreamer', () => {
    it('streams content with thinking off', async () => {
        const f = vi.fn(async () => streamOf([
            { message: { content: 'Hel' }, done: false },
            { message: { content: 'lo' }, done: false },
            { message: { content: '' }, done: true },
        ]));
        let text = '';
        for await (const d of ollamaStreamer('qwen3.5:9b', { fetchFn: f as unknown as typeof fetch })([{ role: 'user', content: 'hi' }])) text += d;
        expect(text).toBe('Hello');
        const body = JSON.parse((f.mock.calls[0] as unknown as [string, RequestInit])[1].body as string);
        expect(body).toMatchObject({ model: 'qwen3.5:9b', stream: true, think: false });
    });
});

describe('isSafari', () => {
    it('tells Safari from Chrome', () => {
        expect(isSafari('Mozilla/5.0 (Macintosh) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15')).toBe(true);
        expect(isSafari('Mozilla/5.0 (Macintosh) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36')).toBe(false);
    });
});
