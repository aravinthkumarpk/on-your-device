import { ToolLoopAgent, jsonSchema, stepCountIs, tool, type LanguageModel } from 'ai';
import { calculate } from '@root/lib/calculator';
import type { ChatTurn } from '@root/lib/engine';

/**
 * A small local agent. Tools never leave the device: a calculator, the date
 * and time, and a search over this conversation. Every tool asks first.
 * Small models are weak at tool use, so this runs only on 4B and up.
 */

export const AGENT_MAX_STEPS = 5;

export function makeTools(getChats: () => ChatTurn[], { needsApproval = true }: { needsApproval?: boolean } = {}) {
    return {
        calculator: tool({
            description: 'Evaluate an arithmetic expression exactly. Supports + - * / % ^ and parentheses.',
            inputSchema: jsonSchema<{ expression: string }>({
                type: 'object',
                properties: { expression: { type: 'string', description: 'For example "(12.5 * 4) / 3"' } },
                required: ['expression'],
                additionalProperties: false,
            }),
            needsApproval,
            execute: async ({ expression }) => {
                try {
                    return { expression, result: calculate(expression) };
                } catch (e) {
                    return { expression, error: e instanceof Error ? e.message : String(e) };
                }
            },
        }),
        currentDateTime: tool({
            description: "Get the user's current local date, time and time zone.",
            inputSchema: jsonSchema<Record<string, never>>({ type: 'object', properties: {}, additionalProperties: false }),
            needsApproval,
            execute: async () => {
                const now = new Date();
                return {
                    iso: now.toISOString(),
                    local: now.toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' }),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                };
            },
        }),
        searchChat: tool({
            description: 'Search earlier messages in this conversation for a word or phrase.',
            inputSchema: jsonSchema<{ query: string }>({
                type: 'object',
                properties: { query: { type: 'string' } },
                required: ['query'],
                additionalProperties: false,
            }),
            needsApproval,
            execute: async ({ query }) => {
                const q = query.toLowerCase();
                const matches = getChats()
                    .filter((t) => t.content.toLowerCase().includes(q))
                    .slice(-5)
                    .map((t) => ({ role: t.role, text: t.content.slice(0, 300) }));
                return { query, matches };
            },
        }),
    };
}

export type LocalTools = ReturnType<typeof makeTools>;

export function createLocalAgent(model: LanguageModel, getChats: () => ChatTurn[], options?: { needsApproval?: boolean }) {
    return new ToolLoopAgent({
        model,
        instructions:
            'You are a helpful assistant running on the user\'s own device. Use a tool only when it clearly helps: ' +
            'the calculator for exact arithmetic, currentDateTime for today\'s date or time, searchChat to look back in this conversation. ' +
            'Otherwise answer directly. Keep answers short.',
        tools: makeTools(getChats, options),
        stopWhen: stepCountIs(AGENT_MAX_STEPS),
    });
}

/** Tool use is only offered on models that can handle it (4B and up). */
export function modelSupportsTools(engine: 'browser' | 'ollama', key?: string): boolean {
    if (engine === 'ollama') return true;
    // Browser models stream through our own worker, which does not parse tool calls yet.
    void key;
    return false;
}
