import { describe, expect, it } from 'vitest';
import { workerUrlFor } from '@root/lib/engine';

describe('workerUrlFor', () => {
    it('uses the real worker by default', () => {
        expect(workerUrlFor('')).toBe('/worker.js');
        expect(workerUrlFor('?engine=webgpu')).toBe('/worker.js');
    });

    it('uses the fake worker only for ?engine=fake', () => {
        expect(workerUrlFor('?engine=fake')).toBe('/fake-worker.js');
        expect(workerUrlFor('?x=1&engine=fake')).toBe('/fake-worker.js');
    });
});
