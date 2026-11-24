import { expect, test } from '@playwright/test';
import { fakeOllama } from './fake-ollama';

// V15: the benchmark page reports load time and tok/s as JSON.

test('V15: benchmark reports load time and speed as JSON, browser and Ollama', async ({ page }) => {
    await fakeOllama(page, 'ready', ['qwen3.5:9b']);
    await page.goto('/bench?engine=fake');

    // Nothing runs until asked, because a real run downloads models.
    await expect(page.getByTestId('bench-json')).toHaveCount(0);
    await expect(page.getByRole('checkbox', { name: /Qwen3\.5 2B/ })).toBeChecked();
    await page.getByRole('checkbox', { name: /Qwen3\.5 0\.8B/ }).check();
    await page.getByRole('checkbox', { name: 'qwen3.5:9b' }).check();
    await page.getByRole('button', { name: 'Run benchmark' }).click();

    const json = page.getByTestId('bench-json');
    await expect(json).toBeVisible({ timeout: 15_000 });
    const report = JSON.parse((await json.textContent())!);

    expect(report.version).toBe(1);
    expect(report.device.userAgent).toBeTruthy();
    expect(report.results.map((r: { model: string }) => r.model)).toEqual(['Qwen3.5 0.8B', 'Qwen3.5 2B', 'qwen3.5:9b']);
    for (const r of report.results) {
        expect(r.error).toBeUndefined();
        expect(r.loadMs).toBeGreaterThan(0);
        expect(r.firstTokenMs).toBeGreaterThanOrEqual(0);
        expect(r.tokensPerSecond).toBeGreaterThan(0);
    }
    expect(report.results[2]).toMatchObject({ engine: 'ollama', loadMs: 1500, tokensPerSecond: 50 });
    await expect(page.getByRole('cell', { name: '42 tok/s' })).toHaveCount(2);
});

test('V15: without WebGPU the browser models are off, and the page says why', async ({ page }) => {
    await page.goto('/bench?engine=fake&gpu=none');
    await expect(page.getByText(/no WebGPU/)).toBeVisible();
    await expect(page.getByRole('checkbox', { name: /Qwen3\.5 2B/ })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Run benchmark' })).toBeDisabled();
});
