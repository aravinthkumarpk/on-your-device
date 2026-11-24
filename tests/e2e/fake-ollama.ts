import type { Page, Route } from '@playwright/test';

/** A stand-in Ollama on localhost:11434, driven through page.route. */
type OllamaState = 'missing' | 'blocked' | 'ready';

export async function fakeOllama(page: Page, initial: OllamaState, pulled: string[] = []) {
    const state = { value: initial, pulled: [...pulled], chats: [] as unknown[] };
    const cors = (origin: string) => ({
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    });
    await page.route('http://localhost:11434/**', async (route: Route) => {
        const req = route.request();
        const origin = req.headers()['origin'] ?? 'http://localhost:4173';
        if (state.value === 'missing') return route.abort('connectionrefused');
        // A blocked Ollama answers, but without CORS headers, so the browser rejects
        // every CORS request (those carry an Origin header). The page sees a failed fetch.
        // A no-cors GET carries no Origin and still gets through.
        if (state.value === 'blocked' && req.headers()['origin']) return route.abort('failed');
        const headers = state.value === 'ready' ? cors(origin) : {};
        const path = new URL(req.url()).pathname;
        if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers });
        if (path === '/api/version') return route.fulfill({ status: 200, headers, json: { version: '0.40.17' } });
        if (path === '/api/tags') return route.fulfill({ status: 200, headers, json: { models: state.pulled.map((name) => ({ name })) } });
        if (path === '/api/pull') {
            const { model } = req.postDataJSON();
            state.pulled.push(model.includes(':') ? model : `${model}:latest`);
            const lines = [
                { status: 'pulling manifest' },
                { status: 'pulling', digest: 'sha256:a', total: 16_000_000_000, completed: 8_000_000_000 },
                { status: 'pulling', digest: 'sha256:a', total: 16_000_000_000, completed: 16_000_000_000 },
                { status: 'success' },
            ];
            return route.fulfill({ status: 200, headers, body: lines.map((l) => JSON.stringify(l)).join('\n') + '\n' });
        }
        if (path === '/v1/chat/completions') {
            const body = req.postDataJSON();
            state.chats.push(body);
            const hasToolResult = body.messages.some((m: { role: string }) => m.role === 'tool');
            const chunk = (delta: object, finish: string | null = null) =>
                `data: ${JSON.stringify({ id: 'x', object: 'chat.completion.chunk', created: 1, model: body.model, choices: [{ index: 0, delta, finish_reason: finish }] })}\n\n`;
            const sse = hasToolResult
                ? chunk({ role: 'assistant', content: '12 times 7 is 84.' }) + chunk({}, 'stop')
                : chunk({ role: 'assistant', tool_calls: [{ index: 0, id: 'call_1', type: 'function', function: { name: 'calculator', arguments: '{"expression":"12*7"}' } }] }) + chunk({}, 'tool_calls');
            return route.fulfill({ status: 200, headers: { ...headers, 'Content-Type': 'text/event-stream' }, body: sse + 'data: [DONE]\n\n' });
        }
        if (path === '/api/chat') {
            state.chats.push(req.postDataJSON());
            const lines = [
                { message: { content: 'Hello from ' }, done: false },
                { message: { content: 'Ollama.' }, done: false },
                { message: { content: '' }, done: true, load_duration: 1.5e9, eval_count: 120, eval_duration: 2.4e9 },
            ];
            return route.fulfill({ status: 200, headers, body: lines.map((l) => JSON.stringify(l)).join('\n') + '\n' });
        }
        return route.fulfill({ status: 404, headers });
    });
    return state;
}
