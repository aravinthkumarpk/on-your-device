import type { UIMessage } from 'ai';
import type { Dtype } from '@root/lib/models';
import type { LogEntry, LogKind } from '@root/lib/download-log';

/**
 * Picks the worker script for the chat engine.
 * `?engine=fake` swaps in a no-network fake engine used by the tests.
 */
export function workerUrlFor(search: string): string {
    const engine = new URLSearchParams(search).get('engine');
    // The fake engine reads test switches (like ?fail=load) from its own URL.
    return engine === 'fake' ? `/fake-worker.js${search}` : '/worker.js';
}

/** Plain chat turn sent to the worker. */
export interface ChatTurn {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

/** Messages the worker sends back. Generation messages carry the request id. */
export type WorkerEvent =
    | { status: 'loading'; data?: string }
    | { status: 'initiate'; file: string; progress: number; loaded?: number; total?: number }
    | { status: 'progress'; file: string; progress: number; loaded?: number; total?: number }
    | { status: 'done'; file: string }
    | { status: 'ready' }
    | { status: 'start'; id: string }
    | { status: 'update'; id: string; output: string; thought?: string; tps?: number }
    | { status: 'complete'; id: string; output?: string }
    | { status: 'error'; id?: string; data: string; kind?: LogKind }
    | { status: 'log'; entry: LogEntry };

/** The parts of Worker that the engine needs. Lets tests pass a fake. */
export interface WorkerLike {
    postMessage(message: unknown): void;
    addEventListener(type: 'message', listener: (event: MessageEvent<WorkerEvent>) => void): void;
    removeEventListener(type: 'message', listener: (event: MessageEvent<WorkerEvent>) => void): void;
}

/** Turns UI messages into plain text turns, keeping the last `limit`. */
export function toChatTurns(messages: UIMessage[], limit = 10): ChatTurn[] {
    return messages
        .map((m) => ({
            role: m.role,
            content: m.parts
                .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
                .map((p) => p.text)
                .join(''),
        }))
        .filter((t) => t.content.trim() !== '')
        .slice(-limit);
}

/** Tells the worker to load a model. */
export function loadModel(worker: WorkerLike, model: { id: string; dtype: Dtype }) {
    worker.postMessage({ type: 'load', model });
}

/** A tool call shown in the chat, with its approval state. */
export interface ToolView {
    callId: string;
    name: string;
    input: unknown;
    state: string;
    approvalId?: string;
    output?: unknown;
    errorText?: string;
}

/** A chat turn for display, with an optional caption like "Chrome's built-in model". */
export interface DisplayTurn extends ChatTurn {
    badge?: string;
    tools?: ToolView[];
}

function toolViews(m: UIMessage): ToolView[] {
    const views: ToolView[] = [];
    for (const p of m.parts) {
        if (!p.type.startsWith('tool-') && p.type !== 'dynamic-tool') continue;
        const part = p as {
            type: string;
            toolName?: string;
            toolCallId: string;
            state: string;
            input?: unknown;
            output?: unknown;
            errorText?: string;
            approval?: { id: string };
        };
        views.push({
            callId: part.toolCallId,
            name: part.toolName ?? part.type.slice('tool-'.length),
            input: part.input,
            state: part.state,
            approvalId: part.approval?.id,
            output: part.output,
            errorText: part.errorText,
        });
    }
    return views;
}

/** Like toChatTurns, keeping every turn and marking replies from Chrome's model. */
export function toDisplayTurns(messages: UIMessage[]): DisplayTurn[] {
    const turns: DisplayTurn[] = [];
    for (const m of messages) {
        const tools = toolViews(m);
        const [turn] = toChatTurns([m], 1);
        if (!turn && tools.length === 0) continue;
        const engine = (m.metadata as { engine?: string } | undefined)?.engine;
        const badge = engine === 'chrome' ? "Answered by Chrome's built-in model" : engine === 'ollama' ? 'Answered by Ollama on this computer' : undefined;
        const base: DisplayTurn = turn ?? { role: m.role, content: '' };
        turns.push({ ...base, ...(badge ? { badge } : {}), ...(tools.length ? { tools } : {}) });
    }
    return turns;
}
