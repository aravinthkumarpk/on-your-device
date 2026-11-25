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
    /** Tag of a safer model offered next to this one, for when it does not run well. */
    fallbackTag?: string;
    /** A model the user picked themselves. We don't know if it handles tools, so it gets plain chat. */
    custom?: boolean;
}

/** One pick per Mac memory size, from the agreed model-per-device table. */
export const LOCAL_MODELS: LocalModel[] = [
    { tag: 'qwen3.5:4b', label: 'Qwen3.5 4B', downloadGB: 3.4, minRamGB: 8, note: 'Best that fits 8 GB.' },
    { tag: 'qwen3.5:9b', label: 'Qwen3.5 9B', downloadGB: 6.6, minRamGB: 16, note: 'Well tested and steady.' },
    // Qwen3.8 27B squeezed to about 2 bits. The Q2_0 file runs on stock llama.cpp b11556+;
    // older builds load it but print gibberish, so the 9B stays one click away.
    {
        tag: 'hf.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF:Q2_0',
        label: 'Bonsai 2.5 27B',
        downloadGB: 7.6,
        minRamGB: 16,
        note: 'A 27B model shrunk to fit 16 GB. Smartest pick for this size.',
        fallbackTag: 'qwen3.5:9b',
    },
    { tag: 'gemma4:26b', label: 'Gemma 4 26B-A4B', downloadGB: 18, minRamGB: 24, note: 'Strong all-rounder, fast because only 4B is active.' },
    { tag: 'inkling-2-mini', label: 'Inkling 2 Mini', downloadGB: 16.5, minRamGB: 32, note: 'Best at code. Fast, 3.4B active.' },
    { tag: 'qwen3.6:35b-a3b', label: 'Qwen3.6 35B-A3B', downloadGB: 23, minRamGB: 48, note: 'Much faster, only 3B active. Top of an independent small-model test.' },
    { tag: 'qwen3.8:27b', label: 'Qwen3.8 27B', downloadGB: 17.1, minRamGB: 48, note: 'Most factual. Slower without a drafter.', fallbackTag: 'qwen3.6:35b-a3b' },
];

export const RAM_CHOICES = [8, 16, 24, 32, 48] as const;

/** The suggested local model for a Mac with this much memory. The last match in the list wins. */
export function pickLocalModel(ramGB: number): LocalModel {
    let best = LOCAL_MODELS[0];
    for (const m of LOCAL_MODELS) if (ramGB >= m.minRamGB) best = m;
    return best;
}

/** True for a plausible Ollama tag, like "qwen3.6:35b-a3b" or "hf.co/org/repo:Q4_K_M". */
export function isOllamaTag(tag: string): boolean {
    return tag.length <= 200 && /^[a-z0-9][a-z0-9._-]*(\/[a-z0-9._-]+)*(:[a-z0-9._-]+)?$/i.test(tag);
}

/** Our entry for a tag, or a plain "your choice" entry for any other model. */
export function localModelFor(tag: string): LocalModel {
    const known = LOCAL_MODELS.find((m) => hasModel([m.tag], tag) || m.tag.toLowerCase() === tag.toLowerCase());
    return known ?? { tag, label: tag, downloadGB: 0, minRamGB: 0, note: 'Your choice.', custom: true };
}

/** The safer model offered next to `model`, if it has one. */
export function fallbackFor(model: LocalModel): LocalModel | undefined {
    return model.fallbackTag ? LOCAL_MODELS.find((m) => m.tag === model.fallbackTag) : undefined;
}

/** One model per memory size, as the panel suggests them. */
export function suggestedModels(): LocalModel[] {
    return LOCAL_MODELS.filter((m) => pickLocalModel(m.minRamGB) === m);
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
    // Ollama may change the case of hf.co tags, so compare without it.
    const full = (tag.includes(':') ? tag : `${tag}:latest`).toLowerCase();
    const names = installed.map((n) => n.toLowerCase());
    return names.includes(full) || names.includes(tag.toLowerCase());
}

/** Reads newline-delimited JSON from a streaming response. */
export async function* ndjson<T>(body: ReadableStream<Uint8Array>): AsyncIterable<T> {
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
