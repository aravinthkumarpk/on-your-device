import type { ChatTurn } from '@root/lib/engine';
import type { TextStreamer } from '@root/lib/chrome-bridge';

/**
 * Optional local engine: Ollama on this computer. The page does the work.
 * The user only installs Ollama, pastes one line, and clicks Allow.
 */

export const OLLAMA_URL = 'http://localhost:11434';

export interface LocalModel {
    /** Ollama model tag. Check against ollama.com/library before release. */
    tag: string;
    label: string;
    /** Approximate download in GB. */
    downloadGB: number;
    /** Smallest Mac memory it is suggested for. */
    minRamGB: number;
    note: string;
}

/** One pick per Mac memory size, from the agreed model-per-device table. */
export const LOCAL_MODELS: LocalModel[] = [
    { tag: 'qwen3.5:4b', label: 'Qwen3.5 4B', downloadGB: 3.4, minRamGB: 8, note: 'Best that fits 8 GB.' },
    { tag: 'qwen3.5:9b', label: 'Qwen3.5 9B', downloadGB: 6.6, minRamGB: 16, note: 'Top of the small class.' },
    { tag: 'gemma4:26b', label: 'Gemma 4 26B-A4B', downloadGB: 18, minRamGB: 24, note: 'Strong all-rounder, fast because only 4B is active.' },
    { tag: 'inkling-2-mini', label: 'Inkling 2 Mini', downloadGB: 16.5, minRamGB: 32, note: 'Best at code. Fast, 3.4B active.' },
    { tag: 'qwen3.8:27b', label: 'Qwen3.8 27B', downloadGB: 17.1, minRamGB: 48, note: 'Most factual. Slower without a drafter.' },
];

export const RAM_CHOICES = [8, 16, 24, 32, 48] as const;

/** The suggested local model for a Mac with this much memory. */
export function pickLocalModel(ramGB: number): LocalModel {
    let best = LOCAL_MODELS[0];
    for (const m of LOCAL_MODELS) if (ramGB >= m.minRamGB) best = m;
    return best;
}

/** The one line that lets this site talk to Ollama and restarts it. Resets on reboot. */
export function allowSiteCommand(origin: string): string {
    return `launchctl setenv OLLAMA_ORIGINS "${origin}" && osascript -e 'quit app "Ollama"' && sleep 2 && open -a Ollama`;
}

type Fetch = typeof fetch;

/** Chrome 142+ asks the user before a site talks to localhost; this flags the request as such. */
const loopback = { targetAddressSpace: 'loopback' } as RequestInit;

/**
 * missing  nothing answers on the port
 * blocked  Ollama runs but its CORS rules reject this site
 * ready    Ollama runs and lets this site in
 */
export type OllamaState = 'missing' | 'blocked' | 'ready';

export async function probeOllama(fetchFn: Fetch = fetch, base = OLLAMA_URL): Promise<OllamaState> {
    try {
        const res = await fetchFn(`${base}/api/version`, { ...loopback, cache: 'no-store' });
        if (res.ok) return 'ready';
    } catch {
        // Either not running, or running and blocking us. A no-cors request tells them apart:
        // it succeeds (with an opaque response) whenever something answers.
    }
    try {
        await fetchFn(`${base}/api/version`, { ...loopback, mode: 'no-cors', cache: 'no-store' });
        return 'blocked';
    } catch {
        return 'missing';
    }
}

export async function listLocalModels(fetchFn: Fetch = fetch, base = OLLAMA_URL): Promise<string[]> {
    const res = await fetchFn(`${base}/api/tags`, loopback);
    if (!res.ok) return [];
    const data = (await res.json()) as { models?: Array<{ name: string }> };
    return (data.models ?? []).map((m) => m.name);
}

/** True if `tag` (like "qwen3.5:9b" or "inkling-2-mini") is already pulled. */
export function hasModel(installed: string[], tag: string): boolean {
    const full = tag.includes(':') ? tag : `${tag}:latest`;
    return installed.includes(full) || installed.includes(tag);
}

/** Reads newline-delimited JSON from a streaming response. */
async function* ndjson<T>(body: ReadableStream<Uint8Array>): AsyncIterable<T> {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    for (;;) {
        const { done, value } = await reader.read();
        if (value) buffer += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buffer.indexOf('\n')) >= 0) {
            const line = buffer.slice(0, nl).trim();
            buffer = buffer.slice(nl + 1);
            if (line) yield JSON.parse(line) as T;
        }
        if (done) break;
    }
    if (buffer.trim()) yield JSON.parse(buffer) as T;
}

export interface PullProgress {
    status: string;
    completed: number;
    total: number;
}

/** Downloads a model through Ollama, reporting bytes across all layers. Resumes if interrupted. */
export async function pullModel(
    tag: string,
    onProgress: (p: PullProgress) => void,
    { fetchFn = fetch, base = OLLAMA_URL, signal }: { fetchFn?: Fetch; base?: string; signal?: AbortSignal } = {},
): Promise<void> {
    const res = await fetchFn(`${base}/api/pull`, {
        ...loopback,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: tag, stream: true }),
        signal,
    });
    if (!res.ok || !res.body) throw new Error(`Ollama could not download ${tag} (HTTP ${res.status}).`);
    const layers: Record<string, { completed: number; total: number }> = {};
    for await (const line of ndjson<{ status?: string; digest?: string; total?: number; completed?: number; error?: string }>(res.body)) {
        if (line.error) throw new Error(line.error);
        if (line.digest && line.total) layers[line.digest] = { completed: line.completed ?? 0, total: line.total };
        const all = Object.values(layers);
        onProgress({
            status: line.status ?? '',
            completed: all.reduce((s, l) => s + l.completed, 0),
            total: all.reduce((s, l) => s + l.total, 0),
        });
        if (line.status === 'success') return;
    }
}

/** Streams a chat reply from Ollama. Thinking is off, matching the browser models. */
export function ollamaStreamer(tag: string, { fetchFn = fetch, base = OLLAMA_URL }: { fetchFn?: Fetch; base?: string } = {}): TextStreamer {
    return async function* (turns: ChatTurn[], signal?: AbortSignal) {
        const res = await fetchFn(`${base}/api/chat`, {
            ...loopback,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: tag, messages: turns, stream: true, think: false }),
            signal,
        });
        if (!res.ok || !res.body) throw new Error(`Ollama did not answer (HTTP ${res.status}). Is it still running?`);
        for await (const line of ndjson<{ message?: { content?: string }; done?: boolean; error?: string }>(res.body)) {
            if (line.error) throw new Error(line.error);
            if (line.message?.content) yield line.message.content;
            if (line.done) return;
        }
    };
}

/** Safari likely blocks a secure page from calling localhost, so the upgrade is Chrome and Firefox only. */
export function isSafari(userAgent: string): boolean {
    return /Safari\//.test(userAgent) && !/Chrome\/|Chromium\/|CriOS\/|Edg\/|Firefox\//.test(userAgent);
}
