'use client';

import { useState, useEffect } from 'react';

// WebGPU type declarations
interface GPUAdapterInfo {
    vendor: string;
    architecture: string;
}

interface GPUAdapter {
    readonly info: GPUAdapterInfo;
}

declare global {
    interface Navigator {
        gpu?: {
            requestAdapter(): Promise<GPUAdapter | null>;
        };
    }
}

interface WebGPUStatus {
    isSupported: boolean | null;
    isChecking: boolean;
    error: string | null;
}

/**
 * Hook to check WebGPU support in the browser
 * Returns the current support status, checking state, and any error message
 */
export function useWebGPU(): WebGPUStatus {
    const [status, setStatus] = useState<WebGPUStatus>({
        isSupported: null,
        isChecking: true,
        error: null,
    });

    useEffect(() => {
        const checkWebGPU = async () => {
            // Check if navigator.gpu exists
            if (!navigator.gpu) {
                setStatus({
                    isSupported: false,
                    isChecking: false,
                    error: 'WebGPU API not available in this browser',
                });
                return;
            }

            try {
                const adapter = await navigator.gpu.requestAdapter();
                setStatus({
                    isSupported: !!adapter,
                    isChecking: false,
                    error: adapter ? null : 'No WebGPU adapter found',
                });
            } catch (error) {
                setStatus({
                    isSupported: false,
                    isChecking: false,
                    error: error instanceof Error ? error.message : 'Failed to check WebGPU support',
                });
            }
        };

        checkWebGPU();
    }, []);

    return status;
}
