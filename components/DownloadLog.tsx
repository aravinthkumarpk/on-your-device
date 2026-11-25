'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { diagnose, formatEntry, logReport, type LogEntry } from '@root/lib/download-log';

/**
 * "Details" under the download: the last few log lines, a plain guess at the
 * cause, and Copy logs. The log lives in this tab only.
 */
export function DownloadLog({ log, meta, open = false }: { log: LogEntry[]; meta?: Record<string, unknown>; open?: boolean }) {
    const [copied, setCopied] = useState(false);
    if (log.length === 0) return null;
    const guess = diagnose(log);
    const problems = log.filter((e) => e.level !== 'info').length;

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(logReport(log, meta));
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // Clipboard blocked: the lines below are selectable.
        }
    };

    return (
        <details open={open} className="mt-4 border-t border-border/50 pt-3 text-sm" data-testid="download-log">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                Details{problems > 0 ? ` (${problems} hiccup${problems === 1 ? '' : 's'}, handled automatically)` : ''}
            </summary>
            {guess && <p className="mt-2 text-pretty">{guess}</p>}
            <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap rounded-lg bg-secondary/50 p-3 text-xs">
                {log.slice(-12).map(formatEntry).join('\n')}
            </pre>
            <div className="mt-2 flex items-center justify-between gap-2">
                <p className="text-xs text-muted-foreground">This log stays on your device. Nothing is sent anywhere.</p>
                <button
                    type="button"
                    onClick={copy}
                    className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-muted-foreground hover:text-foreground"
                >
                    {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                    {copied ? 'Copied' : 'Copy logs'}
                </button>
            </div>
        </details>
    );
}
