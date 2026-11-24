import { describe, expect, it } from 'vitest';
import { BROWSER_MODELS, pickBrowserModel } from '@root/lib/models';

// V3: the auto-pick rule.
describe('pickBrowserModel', () => {
    it('gives phones the 0.8B model', () => {
        expect(pickBrowserModel({ isMobile: true, hasShaderF16: true }).key).toBe('small');
    });

    it('gives laptops the 2B model', () => {
        expect(pickBrowserModel({ isMobile: false, hasShaderF16: true, deviceMemoryGB: 8 }).key).toBe('default');
        expect(pickBrowserModel({ isMobile: false, hasShaderF16: true }).key).toBe('default');
    });

    it('drops to 0.8B when the device reports 4 GB or less', () => {
        expect(pickBrowserModel({ isMobile: false, hasShaderF16: true, deviceMemoryGB: 4 }).key).toBe('small');
    });

    it('never auto-picks the 4B model', () => {
        for (const isMobile of [true, false]) {
            for (const mem of [undefined, 2, 4, 8]) {
                expect(pickBrowserModel({ isMobile, hasShaderF16: true, deviceMemoryGB: mem }).key).not.toBe('large');
            }
        }
    });

    it('uses q4f16 only with shader-f16', () => {
        expect(pickBrowserModel({ isMobile: false, hasShaderF16: true }).dtype).toBe('q4f16');
        expect(pickBrowserModel({ isMobile: false, hasShaderF16: false }).dtype).toBe('q4');
    });

    it('pins the Qwen3.5 ONNX builds (V5)', () => {
        expect(Object.values(BROWSER_MODELS).map((m) => m.id)).toEqual([
            'onnx-community/Qwen3.5-0.8B-ONNX-OPT',
            'onnx-community/Qwen3.5-2B-ONNX-OPT',
            'onnx-community/Qwen3.5-4B-ONNX-OPT',
        ]);
    });
});

describe('worker pins', () => {
    it('loads the same transformers.js version from the CDN as package.json (V5)', async () => {
        const { readFileSync } = await import('node:fs');
        const { join } = await import('node:path');
        const root = join(__dirname, '..', '..');
        const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
        const worker = readFileSync(join(root, 'public', 'worker.js'), 'utf8');
        const cdn = worker.match(/@huggingface\/transformers@([\d.]+)/)?.[1];
        expect(cdn).toBeDefined();
        expect(pkg.dependencies['@huggingface/transformers'].replace(/^[\^~]/, '')).toBe(cdn);
        expect(cdn!.startsWith('4.')).toBe(true);
    });

    it('uses AI SDK v7', async () => {
        const { readFileSync } = await import('node:fs');
        const { join } = await import('node:path');
        const pkg = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8'));
        expect(pkg.dependencies.ai.replace(/^[\^~]/, '').split('.')[0]).toBe('7');
    });
});
