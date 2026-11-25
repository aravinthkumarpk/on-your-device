import { describe, expect, it } from 'vitest';
import { appendLog, diagnose, formatEntry, logReport, type LogEntry } from '@root/lib/download-log';

const t = Date.UTC(2026, 10, 25, 10, 31, 2);

describe('download log', () => {
    it('formats one readable line', () => {
        const line = formatEntry({ t, level: 'warn', event: 'dropped', file: 'model.onnx_data', host: 'huggingface.co', kind: 'network', loaded: 412e6, total: 1203.4e6, attempt: 2, message: 'network error' });
        expect(line).toBe('10:31:02 warn dropped model.onnx_data at 412.0 MB of 1203.4 MB (connection dropped, try 2, huggingface.co): network error');
    });

    it('keeps only the newest entries', () => {
        let log: LogEntry[] = [];
        for (let i = 0; i < 5; i++) log = appendLog(log, { t: i, level: 'info', event: `e${i}` }, 3);
        expect(log.map((e) => e.event)).toEqual(['e2', 'e3', 'e4']);
    });

    it('blames the network path when drops happen midway', () => {
        const log: LogEntry[] = [
            { t, level: 'warn', event: 'dropped', kind: 'network', loaded: 4e8, total: 1e9 },
            { t, level: 'info', event: 'resumed', loaded: 4e8, total: 1e9 },
        ];
        expect(diagnose(log)).toMatch(/dropped 1 time midway and resumed 1.*VPN/);
    });

    it('calls out a block when nothing ever arrives', () => {
        expect(diagnose([{ t, level: 'error', event: 'request-failed', kind: 'network' }])).toMatch(/blocking huggingface.co/);
    });

    it('says nothing when all went well', () => {
        expect(diagnose([{ t, level: 'info', event: 'done' }])).toBeNull();
    });

    it('builds the copied report with the guess on top', () => {
        const report = logReport([{ t, level: 'error', event: 'request-failed', kind: 'storage' }], { model: 'Qwen3.5 2B', empty: undefined });
        expect(report.split('\n').slice(0, 3)).toEqual(['OnYourDevice download log', 'model: Qwen3.5 2B', 'Likely cause: The browser ran out of disk space for the model.']);
    });
});
