'use client';

import { Loader2, AlertCircle, CheckCircle2, Download } from 'lucide-react';
import { cn } from '@root/lib/utils';

type ModelStatus = 'initializing' | 'loading' | 'ready' | 'error';

interface ModelSelectorProps {
    status: ModelStatus;
    modelName?: string;
    error?: string;
    progress?: { progress: number; file: string } | null;
    className?: string;
}

export function ModelSelector({
    status,
    modelName = 'Local model',
    error,
    progress,
    className
}: ModelSelectorProps) {
    // Determine if we're downloading vs just initializing
    const isDownloading = status === 'loading' && progress && progress.progress > 0;

    return (
        <div className={cn("flex items-center gap-2", className)}>
            {/* Downloading State - Active download with progress */}
            {isDownloading && (
                <div className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5">
                    <Download className="size-4 animate-pulse text-blue-600 dark:text-blue-400" />
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                            Downloading model... {progress.progress}%
                        </span>
                    </div>
                </div>
            )}

            {/* Initializing/Loading State - Before download starts */}
            {status === 'loading' && !isDownloading && (
                <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/30 px-3 py-1.5">
                    <Loader2 className="size-4 animate-spin text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                        Initializing...
                    </span>
                </div>
            )}

            {status === 'initializing' && (
                <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/30 px-3 py-1.5">
                    <Loader2 className="size-4 animate-spin text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                        Initializing...
                    </span>
                </div>
            )}

            {/* Ready State */}
            {status === 'ready' && (
                <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                        {modelName}
                    </span>
                </div>
            )}

            {/* Error State */}
            {status === 'error' && (
                <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-1.5">
                    <AlertCircle className="size-4 text-destructive" />
                    <span className="text-sm font-medium text-destructive">
                        {error || 'Failed to load'}
                    </span>
                </div>
            )}
        </div>
    );
}
