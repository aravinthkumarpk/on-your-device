/**
 * Picks the worker script for the chat engine.
 * `?engine=fake` swaps in a no-network fake engine used by the tests.
 */
export function workerUrlFor(search: string): string {
    const engine = new URLSearchParams(search).get('engine');
    return engine === 'fake' ? '/fake-worker.js' : '/worker.js';
}
