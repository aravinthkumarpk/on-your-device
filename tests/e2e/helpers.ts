import { expect, type Page } from '@playwright/test';

export const input = (page: Page) => page.getByRole('textbox');

/** First visit: tap Start on the welcome screen and wait for the model. */
export async function startFresh(page: Page, query = '') {
    await page.goto(`/?engine=fake${query}`);
    await page.getByRole('button', { name: /^Start with/ }).click();
    await expect(input(page)).toBeEnabled();
    await expect(page.getByTestId('model-chip')).not.toContainText('loading');
}
