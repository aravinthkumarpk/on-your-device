/**
 * The download log: what the model worker did while fetching files, kept in
 * memory on this device only. People can copy it to share when a download
 * fails. Nothing is sent anywhere.
 */

export type LogKind = 'network' | 'stall' | 'http' | 'storage' | 'memory' | 'gpu' | 'other';

export interface LogEntry {
    /** Milliseconds since 1970, from Date.now(). */
    t: number;
    level: 'info' | 'warn' | 'error';
    event: string;
    file?: string;
    host?: string;
    kind?: LogKind;
    status?: number;
    loaded?: number;
    total?: number;
    attempt?: number;
    message?: string;
    note?: string;
    [key: string]: unknown;
}

/** Keeps the last `max` entries. */
export function appendLog(log: LogEntry[], entry: LogEntry, max = 300): LogEntry[] {
    const next = log.length >= max ? log.slice(log.length - max + 1) : log.slice();
    next.push(entry);
    return next;
}

const KIND_HINT: Record<LogKind, string> = {
    network: 'connection dropped',
    stall: 'connection went quiet',
    http: 'server error',
    storage: 'out of disk space',
    memory: 'out of GPU memory',
    gpu: 'WebGPU problem',
    other: 'error',
};

const mb = (n: number) => `${(n / 1e6).toFixed(1)} MB`;

/** One readable line, like "10:31:02 warn dropped model.onnx_data at 412.0 MB of 1203.4 MB (connection dropped, try 2): network error". */
export function formatEntry(e: LogEntry): string {
    const time = new Date(e.t).toISOString().slice(11, 19);
    const parts = [time, e.level, e.event];
    if (e.file) parts.push(e.file);
    if (e.loaded != null && e.total) parts.push(`at ${mb(e.loaded)} of ${mb(e.total)}`);
    else if (e.total) parts.push(mb(e.total));
    const extra: string[] = [];
    if (e.kind) extra.push(KIND_HINT[e.kind] ?? e.kind);
    if (e.status) extra.push(`HTTP ${e.status}`);
    if (e.attempt) extra.push(`try ${e.attempt}`);
    if (e.host) extra.push(e.host);
    let line = parts.join(' ');
    if (extra.length) line += ` (${extra.join(', ')})`;
    if (e.message) line += `: ${e.message}`;
    if (e.note) line += ` [${e.note}]`;
    const rest = Object.entries(e).filter(([k]) => !['t', 'level', 'event', 'file', 'host', 'kind', 'status', 'loaded', 'total', 'attempt', 'message', 'note'].includes(k));
    if (rest.length) line += ' ' + rest.map(([k, v]) => `${k}=${v}`).join(' ');
    return line;
}

/**
 * A plain-language guess at the cause, from the pattern of failures.
 * Many drops at different points on one host, with retries that work, looks like
 * a flaky connection or VPN. A refusal before any bytes looks like a block.
 */
export function diagnose(log: LogEntry[]): string | null {
    const drops = log.filter((e) => e.event === 'dropped' || e.event === 'request-failed');
    if (drops.length === 0) return null;
    const kinds = new Set(drops.map((e) => e.kind));
    if (kinds.has('storage')) return 'The browser ran out of disk space for the model.';
    const midway = drops.filter((e) => (e.loaded ?? 0) > 0).length;
    const resumed = log.filter((e) => e.event === 'resumed').length;
    const stalls = drops.filter((e) => e.kind === 'stall').length;
    const http = drops.filter((e) => e.kind === 'http');
    if (http.length && http.length === drops.length) return `The model server returned errors (HTTP ${[...new Set(http.map((e) => e.status))].join(', ')}). Usually temporary.`;
    if (midway > 0 || stalls > 0) {
        return `The connection dropped ${drops.length} time${drops.length === 1 ? '' : 's'} midway${resumed ? ` and resumed ${resumed}` : ''}. That pattern points to the network path, like a VPN, proxy or patchy Wi-Fi, not to this device.`;
    }
    const probe = log.find((e) => e.event === 'probe');
    if (probe?.reachable === true) {
        return 'huggingface.co answers, but every file request fails. That usually means a VPN, proxy or company firewall is answering in its place. Try with the VPN off.';
    }
    if (probe?.reachable === false) {
        return 'huggingface.co cannot be reached from this browser at all. A VPN, firewall or content blocker is stopping it. Try with the VPN off, or another network.';
    }
    return 'Requests to the model server failed before any data arrived. A VPN, firewall or content blocker may be blocking huggingface.co.';
}

/** The text that "Copy logs" puts on the clipboard. */
export function logReport(log: LogEntry[], meta: Record<string, unknown> = {}): string {
    const head = Object.entries(meta)
        .filter(([, v]) => v != null && v !== '')
        .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`);
    const guess = diagnose(log);
    return [
        'OnYourDevice download log',
        ...head,
        ...(guess ? [`Likely cause: ${guess}`] : []),
        '',
        ...log.map(formatEntry),
    ].join('\n');
}
