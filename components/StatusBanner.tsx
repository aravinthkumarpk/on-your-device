'use client';

import { WorkerProgress, WorkerStatus } from '../app/hooks/useWorker';
import { Card, CardContent } from '@root/components/ui/card';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

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
            <div className="mx-auto max-w-3xl px-4 pt-4">
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
            <div className="mx-auto max-w-3xl px-4 pt-4">
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

    // Loading state with progress
    if (status === 'loading') {
        return (
            <div className="mx-auto max-w-3xl px-4 pt-4">
                <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Loader2 className="size-5 animate-spin text-primary" />
                            <div className="flex-1">
                                <p className="font-semibold text-foreground">Loading model...</p>
                                {progress && (
                                    <div className="mt-2 space-y-1">
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
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Ready state - minimal, inline indicator
    if (status === 'ready') {
        return (
            <div className="mx-auto max-w-3xl px-4 pt-4">
                <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                    <CheckCircle2 className="size-4 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-500">Model ready</span>
                </div>
            </div>
        );
    }

    // Initializing (no display needed)
    return null;
}
