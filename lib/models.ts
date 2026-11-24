/**
 * Browser model catalogue and the auto-pick rule.
 * Sizes are text-only downloads at q4f16 from the Hugging Face file listings.
 * Every id here must also be listed in CREDITS.md (a unit test checks).
 */

export type Dtype = 'q4f16' | 'q4';

export interface BrowserModel {
    id: string;
    label: string;
    /** Approximate text-only download at q4f16, in GB. */
    downloadGB: number;
    /** One short line for the picker. */
    blurb: string;
}

export const BROWSER_MODELS = {
    small: {
        id: 'onnx-community/Qwen3.5-0.8B-ONNX-OPT',
        label: 'Qwen3.5 0.8B',
        downloadGB: 0.58,
        blurb: 'Fast and small. Best for phones.',
    },
    default: {
        id: 'onnx-community/Qwen3.5-2B-ONNX-OPT',
        label: 'Qwen3.5 2B',
        downloadGB: 1.38,
        blurb: 'Smarter answers. Best for laptops.',
    },
    large: {
        id: 'onnx-community/Qwen3.5-4B-ONNX-OPT',
        label: 'Qwen3.5 4B',
        downloadGB: 2.8,
        blurb: 'Best quality. Big download, needs a strong GPU.',
    },
} as const satisfies Record<string, BrowserModel>;

export type BrowserModelKey = keyof typeof BROWSER_MODELS;

export interface DeviceInfo {
    /** The browser gave us a WebGPU adapter. */
    hasWebGPU?: boolean;
    /** Phone or tablet, from userAgentData.mobile or the user agent string. */
    isMobile: boolean;
    /** GPU supports the shader-f16 feature. */
    hasShaderF16: boolean;
    /** navigator.deviceMemory in GB, if the browser reports it (Chrome only, capped at 8). */
    deviceMemoryGB?: number;
}

export interface Pick {
    key: BrowserModelKey;
    model: BrowserModel;
    dtype: Dtype;
    reason: string;
}

/**
 * Picks the browser model for a device.
 * Phones get 0.8B because iPhone Safari kills a tab at about 2 GB.
 * Low-memory laptops (4 GB or less reported) also get 0.8B.
 * Everything else gets 2B. 4B is never auto-picked, only offered.
 */
export function pickBrowserModel(device: DeviceInfo): Pick {
    const dtype: Dtype = device.hasShaderF16 ? 'q4f16' : 'q4';
    if (device.isMobile) {
        return { key: 'small', model: BROWSER_MODELS.small, dtype, reason: 'Phones have tight tab memory limits.' };
    }
    if (device.deviceMemoryGB !== undefined && device.deviceMemoryGB <= 4) {
        return { key: 'small', model: BROWSER_MODELS.small, dtype, reason: 'This device reports 4 GB of memory or less.' };
    }
    return { key: 'default', model: BROWSER_MODELS.default, dtype, reason: 'Good balance of quality and download size.' };
}

/** The pick for a model the user chose themselves. */
export function pickByKey(key: BrowserModelKey, hasShaderF16: boolean): Pick {
    return {
        key,
        model: BROWSER_MODELS[key],
        dtype: hasShaderF16 ? 'q4f16' : 'q4',
        reason: 'You picked this one.',
    };
}

export function isModelKey(value: unknown): value is BrowserModelKey {
    return typeof value === 'string' && value in BROWSER_MODELS;
}

/** Reads DeviceInfo from the browser. Only call on the client. */
export async function detectDevice(): Promise<DeviceInfo> {
    const nav = navigator as unknown as {
        userAgent: string;
        userAgentData?: { mobile?: boolean };
        deviceMemory?: number;
        gpu?: { requestAdapter(): Promise<{ features: { has(name: string): boolean } } | null> };
    };
    const isMobile = nav.userAgentData?.mobile ?? /Android|iPhone|iPad|iPod|Mobile/i.test(nav.userAgent);
    let hasShaderF16 = false;
    let hasWebGPU = false;
    try {
        const adapter = await nav.gpu?.requestAdapter();
        hasWebGPU = !!adapter;
        hasShaderF16 = !!adapter?.features.has('shader-f16');
    } catch {
        hasWebGPU = false;
    }
    return { hasWebGPU, isMobile, hasShaderF16, deviceMemoryGB: nav.deviceMemory };
}
