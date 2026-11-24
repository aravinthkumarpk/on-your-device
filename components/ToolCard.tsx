'use client';

import { Calculator, CalendarClock, Search, Wrench } from 'lucide-react';
import type { ToolView } from '@root/lib/engine';
import { TOOL_LABELS } from '@root/lib/tool-labels';

const ICONS: Record<string, typeof Wrench> = {
    calculator: Calculator,
    currentDateTime: CalendarClock,
    searchChat: Search,
};

function describeInput(name: string, input: unknown): string {
    const i = (input ?? {}) as Record<string, unknown>;
    if (name === 'calculator' && typeof i.expression === 'string') return i.expression;
    if (name === 'searchChat' && typeof i.query === 'string') return `"${i.query}"`;
    if (name === 'currentDateTime') return 'Read your local date and time';
    return JSON.stringify(input ?? {});
}

function describeOutput(name: string, output: unknown): string {
    const o = (output ?? {}) as Record<string, unknown>;
    if (o.error) return String(o.error);
    if (name === 'calculator') return String(o.result);
    if (name === 'currentDateTime') return String(o.local);
    if (name === 'searchChat') {
        const n = Array.isArray(o.matches) ? o.matches.length : 0;
        return `${n} ${n === 1 ? 'match' : 'matches'}`;
    }
    return JSON.stringify(output);
}

/** One tool call: asks before it runs, then shows what it returned. */
export function ToolCard({ tool, onApprove }: { tool: ToolView; onApprove: (approvalId: string, approved: boolean) => void }) {
    const Icon = ICONS[tool.name] ?? Wrench;
    const label = TOOL_LABELS[tool.name] ?? tool.name;
    const waiting = tool.state === 'approval-requested' && tool.approvalId;

    return (
        <div className="my-2 rounded-xl border border-border bg-secondary/30 px-3 py-2 text-sm" data-testid="tool-card">
            <div className="flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                <span className="font-medium">{label}</span>
                <span className="min-w-0 truncate font-mono text-xs text-muted-foreground" title={describeInput(tool.name, tool.input)}>
                    {describeInput(tool.name, tool.input)}
                </span>
            </div>
            {waiting && (
                <div className="mt-2 flex items-center gap-2">
                    <span className="flex-1 text-muted-foreground">Allow this? It runs on your device.</span>
                    <button
                        type="button"
                        onClick={() => onApprove(tool.approvalId!, false)}
                        className="rounded-lg border border-border px-3 py-1 transition-transform duration-150 ease-out active:scale-[0.97]"
                    >
                        Deny
                    </button>
                    <button
                        type="button"
                        onClick={() => onApprove(tool.approvalId!, true)}
                        className="rounded-lg bg-primary px-3 py-1 text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97]"
                    >
                        Allow
                    </button>
                </div>
            )}
            {tool.state === 'output-available' && (
                <p className="mt-1 tabular-nums" data-testid="tool-result">= {describeOutput(tool.name, tool.output)}</p>
            )}
            {tool.state === 'output-denied' && <p className="mt-1 text-muted-foreground">You said no.</p>}
            {tool.state === 'output-error' && <p className="mt-1 text-destructive">{tool.errorText}</p>}
        </div>
    );
}
