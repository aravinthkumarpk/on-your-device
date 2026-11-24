import { describe, expect, it } from 'vitest';
import { MockLanguageModelV4 } from 'ai/test';
import { AGENT_MAX_STEPS, createLocalAgent, makeTools, modelSupportsTools } from '@root/lib/agent';
import { calculate } from '@root/lib/calculator';

// V14: tools are local, gated, ask first, and the loop is capped at 5 steps.

const usage = {
    inputTokens: { total: 1, noCache: 1, cacheRead: 0, cacheWrite: 0 },
    outputTokens: { total: 1, text: 1, reasoning: 0 },
};

describe('calculate', () => {
    it('does arithmetic without eval', () => {
        expect(calculate('12*7')).toBe(84);
        expect(calculate('(12.5 * 4) / 3')).toBeCloseTo(16.6667, 3);
        expect(calculate('2^3^2')).toBe(512);
        expect(calculate('-3 + 10 % 4')).toBe(-1);
        expect(calculate('6 × 7 ÷ 2')).toBe(21);
    });

    it('rejects anything that is not arithmetic', () => {
        expect(() => calculate('alert(1)')).toThrow();
        expect(() => calculate('process.exit()')).toThrow();
        expect(() => calculate('1/0')).toThrow('Division by zero');
        expect(() => calculate('(1+2')).toThrow('Missing )');
        expect(() => calculate('')).toThrow();
    });
});

describe('tools', () => {
    const chats = () => [
        { role: 'user' as const, content: 'My cat is called Biscuit' },
        { role: 'assistant' as const, content: 'Nice name.' },
    ];

    it('all ask for approval by default', () => {
        for (const t of Object.values(makeTools(chats))) expect(t.needsApproval).toBe(true);
    });

    it('search this chat finds earlier messages', async () => {
        const tools = makeTools(chats, { needsApproval: false });
        const out = await tools.searchChat.execute!({ query: 'biscuit' }, { toolCallId: '1', messages: [] } as never);
        expect(out).toMatchObject({ matches: [{ role: 'user', text: 'My cat is called Biscuit' }] });
    });

    it('calculator returns an error instead of throwing', async () => {
        const tools = makeTools(chats, { needsApproval: false });
        expect(await tools.calculator.execute!({ expression: '1/0' }, { toolCallId: '1', messages: [] } as never)).toMatchObject({ error: 'Division by zero' });
    });

    it('only Ollama models get tools for now', () => {
        expect(modelSupportsTools('ollama')).toBe(true);
        expect(modelSupportsTools('browser', 'small')).toBe(false);
    });
});

describe('createLocalAgent', () => {
    it(`stops after ${AGENT_MAX_STEPS} steps even if the model keeps calling tools`, async () => {
        let calls = 0;
        const model = new MockLanguageModelV4({
            doGenerate: async () => {
                calls++;
                return {
                    content: [{ type: 'tool-call', toolCallId: `c${calls}`, toolName: 'calculator', input: '{"expression":"1+1"}' }],
                    finishReason: { unified: 'tool-calls', raw: 'tool_calls' },
                    usage,
                    warnings: [],
                };
            },
        });
        const agent = createLocalAgent(model, () => [], { needsApproval: false });
        const result = await agent.generate({ prompt: 'loop forever' });
        expect(calls).toBe(AGENT_MAX_STEPS);
        expect(result.steps).toHaveLength(AGENT_MAX_STEPS);
    });

    it('pauses for approval before running a tool', async () => {
        const model = new MockLanguageModelV4({
            doGenerate: async () => ({
                content: [{ type: 'tool-call', toolCallId: 'c1', toolName: 'calculator', input: '{"expression":"12*7"}' }],
                finishReason: { unified: 'tool-calls', raw: 'tool_calls' },
                usage,
                warnings: [],
            }),
        });
        const agent = createLocalAgent(model, () => []);
        const result = await agent.generate({ prompt: 'what is 12*7' });
        expect(result.steps).toHaveLength(1);
        expect(result.content.some((c) => c.type === 'tool-approval-request')).toBe(true);
        expect(result.content.some((c) => c.type === 'tool-result')).toBe(false);
    });
});
