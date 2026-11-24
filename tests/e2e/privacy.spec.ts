import { expect, test, type Request } from '@playwright/test';
import { startFresh } from './helpers';

// V1: the page makes no tracking or third-party requests.
// With the fake engine there is no model download, so every request
// must go to the page's own origin.

const TRACKERS = /_vercel\/insights|vitals\.vercel|google-analytics|googletagmanager|plausible|posthog|segment\.io|mixpanel|sentry/i;

test('only talks to its own origin', async ({ page, baseURL }) => {
    const requests: string[] = [];
    page.on('request', (req: Request) => requests.push(req.url()));

    await startFresh(page);
    await page.waitForLoadState('networkidle');

    const origin = new URL(baseURL!).origin;
    const offsite = requests.filter((url) => !url.startsWith(origin) && !url.startsWith('data:') && !url.startsWith('blob:'));
    expect(offsite).toEqual([]);
    expect(requests.filter((url) => TRACKERS.test(url))).toEqual([]);
});
