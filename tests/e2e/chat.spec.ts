import { expect, test } from '@playwright/test';

// The chat flow end to end on the fake engine: load, send, stream, stop, clear.

const input = (page: import('@playwright/test').Page) => page.getByRole('textbox');

test('loads, streams a reply, and keeps it in the history', async ({ page }) => {
    await page.goto('/?engine=fake');
    await expect(input(page)).toBeEnabled();

    await input(page).fill('Hi there');
    await input(page).press('Enter');

    await expect(page.getByText('Hi there')).toBeVisible();
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();
    await expect(input(page)).toBeEnabled();
});

test('Stop ends a reply early', async ({ page }) => {
    await page.goto('/?engine=fake');
    await expect(input(page)).toBeEnabled();

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
    await page.goto('/?engine=fake');
    await expect(input(page)).toBeEnabled();
    await input(page).fill('First message');
    await input(page).press('Enter');
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();

    await page.getByTitle('Clear conversation').click();
    await expect(page.getByText('First message')).toHaveCount(0);
});
