'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Cpu, WifiOff, X } from 'lucide-react';
import { BROWSER_MODELS } from '@root/lib/models';
import { EASE_OUT } from './motion';

const WIFI_TIP_KEY = 'oyd:wifi-tip-seen';

function readFlag(key: string) {
    try {
        return localStorage.getItem(key) === '1';
    } catch {
        return true;
    }
}

/**
 * Screen 3, under the first answer: where it ran and how fast, a one-time
 * Wi-Fi tip, and a nudge to the small model if replies are very slow.
 */
export function AfterAnswer({
    tps,
    isSmall,
    onUseSmall,
}: {
    tps: number | null;
    isSmall: boolean;
    onUseSmall: () => void;
}) {
    const reduce = useReducedMotion();
    const [showTip, setShowTip] = useState(false);

    useEffect(() => {
        if (!readFlag(WIFI_TIP_KEY)) setShowTip(true);
    }, []);

    const dismissTip = () => {
        setShowTip(false);
        try {
            localStorage.setItem(WIFI_TIP_KEY, '1');
        } catch {
            // ignore
        }
    };

    const slow = tps !== null && tps < 3 && !isSmall;

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-4"
        >
            {tps !== null && (
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground" data-testid="speed-badge">
                    <Cpu className="size-3.5" aria-hidden />
                    <span className="tabular-nums">Answered on your device&apos;s GPU, {tps.toFixed(0)} tokens/sec</span>
                </p>
            )}
            {slow && (
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm">
                    <span>Running slowly on this device.</span>
                    <button type="button" onClick={onUseSmall} className="font-medium underline underline-offset-4">
                        Switch to {BROWSER_MODELS.small.label}
                    </button>
                </div>
            )}
            {showTip && (
                <div className="flex items-start gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm">
                    <WifiOff className="mt-0.5 size-4 shrink-0" aria-hidden />
                    <span className="flex-1">Try turning off Wi-Fi and asking again. It still works, because nothing leaves your device.</span>
                    <button type="button" onClick={dismissTip} aria-label="Dismiss tip" className="rounded p-0.5 text-muted-foreground hover:text-foreground">
                        <X className="size-4" />
                    </button>
                </div>
            )}
        </motion.div>
    );
}
