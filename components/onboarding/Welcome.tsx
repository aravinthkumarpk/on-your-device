'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { BROWSER_MODELS, type BrowserModelKey, type Pick } from '@root/lib/models';
import { estimateFastWifi, formatBytes } from '@root/lib/download';
import { cn } from '@root/lib/utils';
import { EASE_OUT, enter } from './motion';

const KEYS = Object.keys(BROWSER_MODELS) as BrowserModelKey[];

/** Screen 1: one sentence, one button that names the model and its size. */
export function Welcome({ suggested, onStart }: { suggested: Pick; onStart: (key: BrowserModelKey) => void }) {
    const reduce = useReducedMotion();
    const [choice, setChoice] = useState<BrowserModelKey>(suggested.key);
    const [showPicker, setShowPicker] = useState(false);
    const model = BROWSER_MODELS[choice];

    const item = (i: number) => ({
        ...(reduce ? {} : enter),
        transition: { duration: 0.45, ease: EASE_OUT, delay: reduce ? 0 : 0.06 * i },
    });

    return (
        <main className="flex flex-1 items-center justify-center px-4 py-10">
            <div className="w-full max-w-md text-center">
                <motion.div {...item(0)} className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck className="size-7" aria-hidden />
                </motion.div>
                <motion.h2 {...item(1)} className="text-3xl font-semibold tracking-[-0.02em] text-balance">
                    AI that runs on your device.
                </motion.h2>
                <motion.p {...item(2)} className="mx-auto mt-3 max-w-[38ch] text-muted-foreground text-pretty">
                    Nothing you type leaves it. No sign-up, no server, just an open model in your browser.
                </motion.p>

                <motion.div {...item(3)} className="mt-8">
                    <button
                        type="button"
                        onClick={() => onStart(choice)}
                        className="group w-full rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-sm transition-[transform,box-shadow] duration-150 ease-out hover:shadow-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <span className="block text-base font-medium">Start with {model.label}</span>
                        <span className="mt-0.5 block text-sm opacity-75 tabular-nums">
                            {formatBytes(model.downloadGB * 1e9)} download, {estimateFastWifi(model.downloadGB)}
                        </span>
                    </button>

                    <button
                        type="button"
                        aria-expanded={showPicker}
                        onClick={() => setShowPicker((v) => !v)}
                        className="mt-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Change model
                        <ChevronDown className={cn('size-4 transition-transform duration-200 ease-out', showPicker && 'rotate-180')} aria-hidden />
                    </button>
                </motion.div>

                {showPicker && (
                    <motion.ul
                        role="radiogroup"
                        aria-label="Choose a model"
                        initial={reduce ? false : { opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        className="mt-3 space-y-2 text-left"
                    >
                        {KEYS.map((key) => {
                            const m = BROWSER_MODELS[key];
                            const selected = key === choice;
                            return (
                                <li key={key}>
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked={selected}
                                        onClick={() => setChoice(key)}
                                        className={cn(
                                            'flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-[border-color,background-color,transform] duration-150 ease-out active:scale-[0.98]',
                                            selected ? 'border-primary bg-primary/5' : 'border-border hover:bg-secondary/50',
                                        )}
                                    >
                                        <span className="min-w-0">
                                            <span className="block font-medium">
                                                {m.label}
                                                {key === suggested.key && <span className="ml-2 text-xs font-normal text-muted-foreground">suggested</span>}
                                            </span>
                                            <span className="block text-sm text-muted-foreground">{m.blurb}</span>
                                        </span>
                                        <span className="shrink-0 whitespace-nowrap text-sm tabular-nums text-muted-foreground">{formatBytes(m.downloadGB * 1e9)}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}

                <motion.p {...item(4)} className="mt-8 text-xs text-muted-foreground">
                    The model downloads once and stays in your browser for next time.
                </motion.p>
            </div>
        </main>
    );
}
