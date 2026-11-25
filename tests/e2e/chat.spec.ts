import { expect, test } from '@playwright/test';
import { input, startFresh } from './helpers';

// V4: the chat flow end to end on the fake engine, through useChat.

test('streams a reply and keeps it in the history', async ({ page }) => {
    await startFresh(page);
    await input(page).fill('Hi there');
    await input(page).press('Enter');

    await expect(page.getByText('Hi there')).toBeVisible();
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();
    await expect(page.getByTestId('speed-badge')).toContainText('42 tokens/sec');
});

test('Stop ends a reply early', async ({ page }) => {
    await startFresh(page);
    await input(page).fill('Tell me a story [slow]');
    await input(page).press('Enter');

    const stop = page.getByTitle('Stop generating');
    await expect(stop).toBeVisible();
    await stop.click();

    await expect(stop).toBeHidden();
    await expect(input(page)).toBeEnabled();
    await expect(page.getByText('one word at a time.')).toHaveCount(0);
});

test('Clear empties the conversation', async ({ page }) => {
    await startFresh(page);
    await input(page).fill('First message');
    await input(page).press('Enter');
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();

    await page.getByTitle('Clear conversation').click();
    await expect(page.getByText('First message')).toHaveCount(0);
});

test('a very slow reply offers the smaller model', async ({ page }) => {
    await startFresh(page);
    await input(page).fill('Go [slow]');
    await input(page).press('Enter');
    await expect(page.getByText('one word at a time.')).toBeVisible({ timeout: 15_000 });
    await expect(page.getByRole('button', { name: 'Switch to Qwen3.5 0.8B' })).toBeVisible();
});

test('replies render markdown without a box and never show raw asterisks', async ({ page }) => {
    await startFresh(page);
    await input(page).fill('Help me reply [md]');
    await input(page).press('Enter');
    const bold = page.getByText('Option 1: Warm and direct', { exact: true });
    await expect(bold).toBeVisible();
    expect(Number(await bold.evaluate((el) => getComputedStyle(el).fontWeight))).toBeGreaterThanOrEqual(600);
    await expect(page.getByText('**Option')).toHaveCount(0);
    const reply = page.locator('.is-assistant').last();
    const shadow = await reply.locator(':scope > div').first().evaluate((el) => getComputedStyle(el).boxShadow);
    expect(shadow).toBe('none');
});
