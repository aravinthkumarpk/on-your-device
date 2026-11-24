'use client';

import { AlertTriangle, MonitorX } from 'lucide-react';
import { BROWSER_MODELS, type BrowserModelKey } from '@root/lib/models';
import { formatBytes } from '@root/lib/download';

/** No WebGPU: nothing can run, so say why and where it will work. */
export function Unsupported() {
    return (
        <main className="flex flex-1 items-center justify-center px-4 py-10">
            <div className="max-w-md text-center">
                <MonitorX className="mx-auto size-10 text-muted-foreground" aria-hidden />
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">This browser can&apos;t run local AI yet</h2>
                <p className="mt-3 text-muted-foreground text-pretty">
                    It needs WebGPU, which lets a web page use your graphics chip. Open this page in a recent Chrome or Edge on a computer,
                    or Safari 26 on a Mac or iPhone.
                </p>
                <a
                    href="https://www.google.com/chrome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97]"
                >
                    Get Chrome
                </a>
            </div>
        </main>
    );
}

/** Loading failed. Offer the smaller model when there is one, else a retry. */
export function LoadError({
    message,
    current,
    onRetry,
}: {
    message: string;
    current: BrowserModelKey | undefined;
    onRetry: (key: BrowserModelKey) => void;
}) {
    const canShrink = current !== undefined && current !== 'small';
    const small = BROWSER_MODELS.small;
    return (
        <section role="alert" className="mx-auto w-full max-w-xl px-4 pt-8">
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
                <div className="flex gap-3">
                    <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden />
                    <div>
                        <h2 className="font-medium">{canShrink ? 'That model was too much for this device' : 'The model could not load'}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">{message}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {canShrink && (
                                <button
                                    type="button"
                                    onClick={() => onRetry('small')}
                                    className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97]"
                                >
                                    Use {small.label} instead ({formatBytes(small.downloadGB * 1e9)})
                                </button>
                            )}
                            {current && (
                                <button
                                    type="button"
                                    onClick={() => onRetry(current)}
                                    className="rounded-lg border border-border px-4 py-2 text-sm transition-transform duration-150 ease-out active:scale-[0.97]"
                                >
                                    Try again
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
