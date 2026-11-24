import { expect, test } from '@playwright/test';
import { input } from './helpers';

// V10: with Chrome's model already on the device, the first question is
// answered during our download, labelled, and later ones go to our model.

test('Chrome answers during the download, then our model takes over', async ({ page }) => {
    await page.goto('/?engine=fake&chrome=ready&slowload=1');
    await page.getByRole('button', { name: /^Start with/ }).click();
    await expect(page.getByTestId('bridge-note')).toBeVisible();

    await input(page).fill('First question');
    await input(page).press('Enter');
    await expect(page.getByText('Quick answer from the Chrome bridge.')).toBeVisible();
    await expect(page.getByTestId('answer-badge')).toHaveText("Answered by Chrome's built-in model");

    await expect(page.getByTestId('model-chip')).not.toContainText('loading', { timeout: 10_000 });
    await expect(page.getByTestId('bridge-note')).toHaveCount(0);

    await input(page).fill('Second question');
    await input(page).press('Enter');
    await expect(page.getByText('This reply streams one word at a time.')).toBeVisible();
    await expect(page.getByTestId('answer-badge')).toHaveCount(1);
});

test('without Chrome model, questions wait for our model', async ({ page }) => {
    await page.goto('/?engine=fake&slowload=1');
    await page.getByRole('button', { name: /^Start with/ }).click();
    await expect(page.getByTestId('bridge-note')).toHaveCount(0);
});
