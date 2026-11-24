import { expect, test } from '@playwright/test';
import { input, startFresh } from './helpers';

// V6 to V9 from the build plan.

test('V6: welcome names the model and size, and nothing downloads before Start', async ({ page }) => {
    const modelRequests: string[] = [];
    page.on('request', (r) => {
        if (/huggingface|\.onnx/.test(r.url())) modelRequests.push(r.url());
    });
    await page.goto('/?engine=fake');
    const start = page.getByRole('button', { name: /^Start with Qwen3\.5 2B/ });
    await expect(start).toBeVisible();
    await expect(start).toContainText('1.4 GB download');
    await expect(page.getByRole('progressbar')).toHaveCount(0);
    expect(modelRequests).toEqual([]);
});

test('V6: Change model lets you pick a different one', async ({ page }) => {
    await page.goto('/?engine=fake');
    await page.getByRole('button', { name: 'Change model' }).click();
    await page.getByRole('radio', { name: /Qwen3\.5 0\.8B/ }).click();
    await page.getByRole('button', { name: /^Start with Qwen3\.5 0\.8B/ }).click();
    await expect(page.getByTestId('model-chip')).toHaveText('Qwen3.5 0.8B');
});

test('V7: a question typed during the download is answered when the model is ready', async ({ page }) => {
    await page.goto('/?engine=fake&slowload=1');
    await page.getByRole('button', { name: /^Start with/ }).click();
    await expect(page.getByRole('progressbar')).toBeVisible();
    await expect(page.getByText(/of \d/)).toBeVisible();

    await input(page).fill('Queued question');
    await input(page).press('Enter');
    await expect(page.getByText('Got your question.')).toBeVisible();

    await expect(page.getByText('Queued question')).toBeVisible({ timeout: 10_000 });
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();
});

test('V8: a return visit skips the welcome screen', async ({ page }) => {
    await startFresh(page);
    await page.reload();
    await expect(page.getByRole('button', { name: /^Start with/ })).toHaveCount(0);
    await expect(input(page)).toBeEnabled();
    await expect(page.getByTestId('model-chip')).toHaveText('Qwen3.5 2B');
});

test('V9: no WebGPU shows a friendly screen', async ({ page }) => {
    await page.goto('/?engine=fake&gpu=none');
    await expect(page.getByRole('heading', { name: "This browser can't run local AI yet" })).toBeVisible();
    await expect(page.getByRole('textbox')).toHaveCount(0);
});

test('V9: a load failure offers the smaller model, which then works', async ({ page }) => {
    await page.goto('/?engine=fake&fail=load');
    await page.getByRole('button', { name: /^Start with/ }).click();
    await expect(page.getByRole('heading', { name: 'That model was too much for this device' })).toBeVisible();

    await page.getByRole('button', { name: /Use Qwen3\.5 0\.8B instead/ }).click();
    await expect(page.getByTestId('model-chip')).toHaveText('Qwen3.5 0.8B');
    await expect(input(page)).toBeEnabled();
});

test('the Wi-Fi tip shows once', async ({ page }) => {
    await startFresh(page);
    await input(page).fill('Hello');
    await input(page).press('Enter');
    const tip = page.getByText('Try turning off Wi-Fi');
    await expect(tip).toBeVisible();
    await page.getByRole('button', { name: 'Dismiss tip' }).click();
    await expect(tip).toHaveCount(0);

    await page.reload();
    await input(page).fill('Again');
    await input(page).press('Enter');
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();
    await expect(page.getByText('Try turning off Wi-Fi')).toHaveCount(0);
});

test('no sideways scrolling on a 320px phone, even with a long unbroken URL', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    const noOverflow = async () =>
        expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0);
    await page.goto('/?engine=fake');
    await page.getByRole('button', { name: 'Change model' }).click();
    await noOverflow();
    await page.getByRole('button', { name: /^Start with/ }).click();
    await expect(input(page)).toBeEnabled();
    await input(page).fill('See https://example.com/a/very/long/path/without/any/breaks/whatsoever/that/keeps/going/and/going.html');
    await input(page).press('Enter');
    await expect(page.getByText('one word at a time.')).toBeVisible();
    await noOverflow();
});
