import { expect, test, type Page, type Route } from '@playwright/test';
import { input, startFresh } from './helpers';

// V11 to V13: the 3-action Ollama upgrade against a stand-in Ollama.

type OllamaState = 'missing' | 'blocked' | 'ready';

async function fakeOllama(page: Page, initial: OllamaState, pulled: string[] = []) {
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
                { message: { content: '' }, done: true },
            ];
            return route.fulfill({ status: 200, headers, body: lines.map((l) => JSON.stringify(l)).join('\n') + '\n' });
        }
        return route.fulfill({ status: 404, headers });
    });
    return state;
}

test('install, paste, pick a Mac, download, chat', async ({ page }) => {
    const ollama = await fakeOllama(page, 'missing');
    await startFresh(page);

    await page.getByRole('button', { name: 'Bigger model' }).click();
    await expect(page.getByRole('link', { name: 'Get Ollama' })).toBeVisible();

    // V11: once Ollama is installed but blocks us, the page moves on by itself and shows the one line.
    ollama.value = 'blocked';
    const command = page.getByTestId('allow-command');
    await expect(command).toBeVisible({ timeout: 5_000 });
    await expect(command).toContainText('launchctl setenv OLLAMA_ORIGINS "http://localhost:4173"');

    // After the paste, it moves on by itself again.
    ollama.value = 'ready';
    await expect(page.getByText('Connected. Which Mac do you have?')).toBeVisible({ timeout: 5_000 });

    // V12: memory size picks the model.
    await page.getByRole('radio', { name: '32 GB' }).click();
    await page.getByRole('button', { name: /Download Inkling 2 Mini/ }).click();

    // V13: pulled through /api/pull, then the chat switches over.
    await expect(page.getByTestId('model-chip')).toContainText('Inkling 2 Mini (Ollama)', { timeout: 5_000 });
    expect(ollama.pulled).toContain('inkling-2-mini:latest');


    // Return visit reconnects by itself.
    await page.reload();
    await expect(page.getByTestId('model-chip')).toContainText('Inkling 2 Mini (Ollama)');

    // Stop using it: back to the browser model.
    await page.getByRole('button', { name: 'Stop using Ollama' }).click();
    await expect(page.getByTestId('model-chip')).toHaveText('Qwen3.5 2B');
});

test('skips the download when the model is already pulled', async ({ page }) => {
    await fakeOllama(page, 'ready', ['qwen3.5:9b']);
    await startFresh(page);
    await page.getByRole('button', { name: 'Bigger model' }).click();
    await page.getByRole('radio', { name: '16 GB' }).click();
    await page.getByRole('button', { name: /Use Qwen3\.5 9B/ }).click();
    await expect(page.getByTestId('model-chip')).toContainText('Qwen3.5 9B (Ollama)');
});

test('after a reboot, offers one paste to reconnect', async ({ page }) => {
    await fakeOllama(page, 'blocked');
    await startFresh(page);
    await page.evaluate(() => localStorage.setItem('oyd:local', 'qwen3.5:9b'));
    await page.reload();
    await expect(page.getByTestId('reconnect-banner')).toBeVisible();
    await page.getByRole('button', { name: 'Reconnect' }).click();
    await expect(page.getByTestId('allow-command')).toBeVisible();
});

test('nudges to a bigger model only after a few answers', async ({ page }) => {
    await fakeOllama(page, 'missing');
    await startFresh(page);
    for (const q of ['one', 'two', 'three']) {
        await expect(page.getByTestId('upgrade-nudge')).toHaveCount(0);
        await input(page).fill(q);
        await input(page).press('Enter');
        await expect(input(page)).toBeEnabled();
        await expect(page.getByTitle('Stop generating')).toHaveCount(0);
    }
    await expect(page.getByTestId('upgrade-nudge')).toBeVisible();
    await page.getByRole('button', { name: 'Dismiss suggestion' }).click();
    await expect(page.getByTestId('upgrade-nudge')).toHaveCount(0);
});

test('V14: the agent asks before using a tool, then finishes the answer', async ({ page }) => {
    const ollama = await fakeOllama(page, 'ready', ['qwen3.5:9b']);
    await startFresh(page);
    await page.getByRole('button', { name: 'Bigger model' }).click();
    await page.getByRole('radio', { name: '16 GB' }).click();
    await page.getByRole('button', { name: /Use Qwen3\.5 9B/ }).click();
    await expect(page.getByTestId('model-chip')).toContainText('Qwen3.5 9B (Ollama)');

    await input(page).fill('What is 12 times 7?');
    await input(page).press('Enter');

    const card = page.getByTestId('tool-card');
    await expect(card).toContainText('Calculator');
    await expect(card).toContainText('12*7');
    // Nothing runs until the user says yes.
    await expect(page.getByTestId('tool-result')).toHaveCount(0);
    await card.getByRole('button', { name: 'Allow' }).click();

    await expect(page.getByTestId('tool-result')).toHaveText('= 84');
    await expect(page.getByText('12 times 7 is 84.')).toBeVisible();
    expect(ollama.chats.length).toBe(2);
    expect(JSON.stringify(ollama.chats[1])).toContain('84');
});

test('V14: denying a tool means it never runs', async ({ page }) => {
    await fakeOllama(page, 'ready', ['qwen3.5:9b']);
    await startFresh(page);
    await page.getByRole('button', { name: 'Bigger model' }).click();
    await page.getByRole('radio', { name: '16 GB' }).click();
    await page.getByRole('button', { name: /Use Qwen3\.5 9B/ }).click();
    await input(page).fill('What is 12 times 7?');
    await input(page).press('Enter');
    await page.getByTestId('tool-card').getByRole('button', { name: 'Deny' }).click();
    await expect(page.getByTestId('tool-result')).toHaveCount(0);
    await expect(page.getByText('You said no.')).toBeVisible();
});
