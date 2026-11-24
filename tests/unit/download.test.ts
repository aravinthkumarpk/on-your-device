import { describe, expect, it } from 'vitest';
import { estimateFastWifi, formatBytes, formatEta, summarize } from '@root/lib/download';

describe('summarize', () => {
    it('adds up all files into one bar', () => {
        const s = summarize({ a: { loaded: 50, total: 100 }, b: { loaded: 0, total: 100 } });
        expect(s).toEqual({ loadedBytes: 50, totalBytes: 200, percent: 25 });
    });

    it('uses the expected size until the real total is bigger', () => {
        expect(summarize({ a: { loaded: 10, total: 10 } }, 100).percent).toBe(10);
        expect(summarize({ a: { loaded: 150, total: 200 } }, 100).totalBytes).toBe(200);
    });

    it('never shows 100% early and handles empty input', () => {
        expect(summarize({ a: { loaded: 999, total: 1000 } }).percent).toBe(99);
        expect(summarize({}).percent).toBe(0);
    });
});

describe('formatting', () => {
    it('formats sizes the way people say them', () => {
        expect(formatBytes(640e6)).toBe('640 MB');
        expect(formatBytes(1.38e9)).toBe('1.4 GB');
    });

    it('gives a friendly time left', () => {
        expect(formatEta(0, 1)).toBeNull();
        expect(formatEta(100, 0)).toBeNull();
        expect(formatEta(5e6, 1e6)).toBe('a few seconds left');
        expect(formatEta(30e6, 1e6)).toBe('under a minute left');
        expect(formatEta(60e6, 1e6)).toBe('about 1 minute left');
        expect(formatEta(240e6, 1e6)).toBe('about 4 minutes left');
    });

    it('estimates the first download on fast Wi-Fi', () => {
        expect(estimateFastWifi(1.38)).toBe('about 2 minutes on fast Wi-Fi');
        expect(estimateFastWifi(0.58)).toBe('about 1 minute on fast Wi-Fi');
    });
});
