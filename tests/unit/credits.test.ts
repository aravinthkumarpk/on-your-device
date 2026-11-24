import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

// V16: every model the app can load must have a row in CREDITS.md.

const ROOT = join(__dirname, '..', '..');
const SOURCE_DIRS = ['app', 'lib', 'components', 'common', 'public'];
const SOURCE_EXT = /\.(ts|tsx|js|mjs|json)$/;
// Hugging Face repo ids that the app loads, e.g. "onnx-community/Qwen3-0.6B-ONNX".
const MODEL_ID = /["'`]((?:onnx-community|webml-community|Qwen|google|HuggingFaceTB|microsoft)\/[\w.-]+)["'`]/g;

function walk(dir: string): string[] {
    let files: string[] = [];
    let entries: string[] = [];
    try {
        entries = readdirSync(dir);
    } catch {
        return files;
    }
    for (const name of entries) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) files = files.concat(walk(path));
        else if (SOURCE_EXT.test(name)) files.push(path);
    }
    return files;
}

function modelIdsInSource(): string[] {
    const ids = new Set<string>();
    for (const dir of SOURCE_DIRS) {
        for (const file of walk(join(ROOT, dir))) {
            for (const match of readFileSync(file, 'utf8').matchAll(MODEL_ID)) ids.add(match[1]);
        }
    }
    return [...ids];
}

describe('credits', () => {
    const credits = readFileSync(join(ROOT, 'CREDITS.md'), 'utf8');

    it('finds at least one model in the source', () => {
        expect(modelIdsInSource().length).toBeGreaterThan(0);
    });

    it('lists every model id the app uses', () => {
        const missing = modelIdsInSource().filter((id) => !credits.includes('`' + id + '`'));
        expect(missing).toEqual([]);
    });

    it('keeps the original qwen-web copyright line', () => {
        const license = readFileSync(join(ROOT, 'LICENSE.md'), 'utf8');
        expect(license).toContain('Copyright (c) 2025 Qwen Web');
        expect(credits).toContain('sdan/qwen-web');
    });
});
