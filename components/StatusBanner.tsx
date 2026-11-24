'use client';

import type { EngineProgress as WorkerProgress, EngineStatus as WorkerStatus } from '@root/app/hooks/useEngine';
import { Card, CardContent } from '@root/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface StatusBannerProps {
    status: WorkerStatus;
    progress: WorkerProgress | null;
    webGPUSupported: boolean | null;
    error?: string | null;
}

/**
 * Displays loading status, progress bars, and error messages
 * Now styled with shadcn/ui components
 */
export function StatusBanner({ status, progress, webGPUSupported, error }: StatusBannerProps) {
    // WebGPU not supported error
    if (webGPUSupported === false) {
        return (
            <div className="mx-auto max-w-4xl px-4 pt-4">
                <Card className="border-destructive/50 bg-destructive/10">
                    <CardContent className="flex items-center gap-3 p-4">
                        <AlertCircle className="size-5 text-destructive" />
                        <div>
                            <p className="font-semibold text-destructive">WebGPU not supported</p>
                            <p className="text-sm text-muted-foreground">
                                Your browser doesn&apos;t support WebGPU. Please use Chrome or Edge 113+ with WebGPU enabled.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Generic error state
    if (status === 'error') {
        return (
            <div className="mx-auto max-w-4xl px-4 pt-4">
                <Card className="border-destructive/50 bg-destructive/10">
                    <CardContent className="flex items-center gap-3 p-4">
                        <AlertCircle className="size-5 text-destructive" />
                        <div>
                            <p className="font-semibold text-destructive">Error</p>
                            <p className="text-sm text-muted-foreground">
                                {error || 'An unexpected error occurred. Please refresh and try again.'}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Loading state - only show progress bar if downloading, header shows loading status
    if (status === 'loading' && progress) {
        return (
            <div className="mx-auto max-w-4xl px-4 pt-4">
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="truncate">{progress.file}</span>
                            <span className="ml-2 font-mono">{progress.progress}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-secondary">
                            <div
                                className="h-full rounded-full bg-primary transition-all duration-300"
                                style={{ width: `${progress.progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Ready state - now shown in header via ModelSelector, no banner needed
    // Initializing (no display needed)
    return null;
}
