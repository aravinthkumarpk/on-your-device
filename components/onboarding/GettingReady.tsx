'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { formatBytes } from '@root/lib/download';
import type { DownloadState } from '@root/app/hooks/useEngine';
import { EASE_OUT } from './motion';

const TIPS = [
    { title: 'Where it runs', body: "Your browser downloads the model and runs it on your device's GPU. No server answers your questions." },
    { title: 'Why it is private', body: 'Nothing you type is sent anywhere. Once it is ready, try turning off Wi-Fi. It still works.' },
    { title: 'What to try first', body: 'Ask it to explain something, rewrite a paragraph, or brainstorm names. Short, clear questions work best.' },
];

/** Screen 2: one honest progress bar, a queued question, and tips while you wait. */
export function GettingReady({
    modelLabel,
    download,
    queued,
    isReturning,
}: {
    modelLabel: string;
    download: DownloadState;
    queued: string | null;
    isReturning: boolean;
}) {
    const reduce = useReducedMotion();
    const [tip, setTip] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTip((t) => (t + 1) % TIPS.length), 6000);
        return () => clearInterval(timer);
    }, []);

    const downloading = download.loadedBytes > 0 && download.percent < 100;

    return (
        <section aria-label="Getting the model ready" className="mx-auto w-full max-w-xl px-4 pt-8">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur-sm">
                <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-medium">{isReturning ? `Loading ${modelLabel}` : `Getting ${modelLabel} ready`}</h2>
                    <span className="text-sm tabular-nums text-muted-foreground" aria-hidden>{download.percent}%</span>
                </div>

                <div
                    role="progressbar"
                    aria-label="Model download"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={download.percent}
                    className="mt-3 h-2 overflow-hidden rounded-full bg-secondary"
                >
                    <div
                        className="h-full w-full origin-left rounded-full bg-primary transition-transform duration-300 ease-linear"
                        style={{ transform: `scaleX(${download.percent / 100})` }}
                    />
                </div>

                <p className="mt-2 text-sm tabular-nums text-muted-foreground" aria-live="polite">
                    {downloading
                        ? `${formatBytes(download.loadedBytes)} of ${formatBytes(download.totalBytes)}${download.eta ? `, ${download.eta}` : ''}`
                        : download.stage}
                </p>

                <div className="mt-5 min-h-[4.5rem] border-t border-border/50 pt-4">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={tip}
                            initial={reduce ? false : { opacity: 0, filter: 'blur(2px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={reduce ? undefined : { opacity: 0, filter: 'blur(2px)' }}
                            transition={{ duration: 0.25, ease: EASE_OUT }}
                        >
                            <p className="text-sm font-medium">{TIPS[tip].title}</p>
                            <p className="mt-1 text-sm text-muted-foreground text-pretty">{TIPS[tip].body}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <p className="mt-3 text-center text-sm text-muted-foreground" aria-live="polite">
                {queued
                    ? <>Got your question. It will answer the moment the model is ready.</>
                    : <>You can type your first question now.</>}
            </p>
        </section>
    );
}
