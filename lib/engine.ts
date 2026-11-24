import type { UIMessage } from 'ai';
import type { Dtype } from '@root/lib/models';

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
    | { status: 'error'; id?: string; data: string };

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

/** A chat turn for display, with an optional caption like "Chrome's built-in model". */
export interface DisplayTurn extends ChatTurn {
    badge?: string;
}

/** Like toChatTurns, keeping every turn and marking replies from Chrome's model. */
export function toDisplayTurns(messages: UIMessage[]): DisplayTurn[] {
    const turns: DisplayTurn[] = [];
    for (const m of messages) {
        const [turn] = toChatTurns([m], 1);
        if (!turn) continue;
        const engine = (m.metadata as { engine?: string } | undefined)?.engine;
        const badge = engine === 'chrome' ? "Answered by Chrome's built-in model" : engine === 'ollama' ? 'Answered by Ollama on this computer' : undefined;
        turns.push(badge ? { ...turn, badge } : turn);
    }
    return turns;
}
