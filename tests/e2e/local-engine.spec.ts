import { expect, test } from '@playwright/test';
import { fakeOllama } from './fake-ollama';
import { input, startFresh } from './helpers';

// V11 to V13: the 3-action Ollama upgrade against a stand-in Ollama.

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
    await expect(page.getByText('Ollama is running on this Mac.')).toBeVisible();
    await page.getByText('Pasted it and still stuck here?').click();
    await expect(page.getByTestId('serve-command')).toContainText('ollama serve');
});

test('nudges to a bigger model only after a few answers, one tip at a time', async ({ page }) => {
    await fakeOllama(page, 'missing');
    await startFresh(page);
    for (const q of ['one', 'two', 'three']) {
        await expect(page.getByTestId('upgrade-nudge')).toHaveCount(0);
        await input(page).fill(q);
        await input(page).press('Enter');
        await expect(input(page)).toBeEnabled();
        await expect(page.getByTitle('Stop generating')).toHaveCount(0);
    }
    // The Wi-Fi tip goes first. The nudge waits until it is dismissed.
    await expect(page.getByText('Try turning off Wi-Fi')).toBeVisible();
    await expect(page.getByTestId('upgrade-nudge')).toHaveCount(0);
    await page.getByRole('button', { name: 'Dismiss tip' }).click();
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
