'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Download, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@root/components/ui/dialog';
import {
    RAM_CHOICES,
    allowSiteCommand,
    hasModel,
    isSafari,
    listLocalModels,
    fallbackFor,
    pickLocalModel,
    suggestedModels,
    probeOllama,
    pullModel,
    type LocalModel,
    type OllamaState,
} from '@root/lib/ollama';
import { formatBytes } from '@root/lib/download';
import { cn } from '@root/lib/utils';

type Step = 'checking' | 'missing' | 'blocked' | 'pick' | 'pulling' | 'failed';

/**
 * The 3-action upgrade: install Ollama, paste one line, click Allow.
 * The panel watches for Ollama, picks a model from the Mac's memory size,
 * downloads it through Ollama's API, and hands the chat over.
 */
export function LocalEnginePanel({
    open,
    onOpenChange,
    onConnect,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConnect: (model: LocalModel) => void;
}) {
    const [step, setStep] = useState<Step>('checking');
    const [ram, setRam] = useState<number | null>(null);
    const [installed, setInstalled] = useState<string[]>([]);
    const [progress, setProgress] = useState<{ completed: number; total: number; status: string } | null>(null);
    const [failure, setFailure] = useState<string | null>(null);
    const [chosen, setChosen] = useState<LocalModel | null>(null);
    const [copied, setCopied] = useState(false);
    const [origin, setOrigin] = useState('');
    const [safari, setSafari] = useState(false);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => {
        setOrigin(window.location.origin);
        setSafari(isSafari(navigator.userAgent));
    }, []);

    // Watch for Ollama every 2 seconds while the panel is open and not yet connected.
    useEffect(() => {
        if (!open || step === 'pick' || step === 'pulling') return;
        let stopped = false;
        const check = async () => {
            const state: OllamaState = await probeOllama();
            if (stopped) return;
            if (state === 'ready') {
                setInstalled(await listLocalModels().catch(() => []));
                setStep('pick');
            } else if (step !== 'failed') {
                setStep(state);
            }
        };
        check();
        const timer = setInterval(check, 2000);
        return () => {
            stopped = true;
            clearInterval(timer);
        };
    }, [open, step]);

    useEffect(() => () => abortRef.current?.abort(), []);

    const command = allowSiteCommand(origin);
    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // Clipboard blocked: the text is selectable.
        }
    }, [command]);

    const model = ram ? pickLocalModel(ram) : null;
    const fallback = model ? fallbackFor(model) : undefined;

    const download = async (m: LocalModel) => {
        if (hasModel(installed, m.tag)) {
            onConnect(m);
            return;
        }
        setChosen(m);
        setStep('pulling');
        setFailure(null);
        setProgress({ completed: 0, total: m.downloadGB * 1e9, status: 'Starting...' });
        abortRef.current = new AbortController();
        try {
            await pullModel(m.tag, (p) => setProgress({ ...p, total: p.total || m.downloadGB * 1e9 }), {
                signal: abortRef.current.signal,
            });
            onConnect(m);
        } catch (e) {
            if (abortRef.current?.signal.aborted) return;
            setFailure(e instanceof Error ? e.message : String(e));
            setStep('failed');
        }
    };

    const percent = progress && progress.total ? Math.floor((progress.completed / progress.total) * 100) : 0;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Use a bigger model with Ollama</DialogTitle>
                    <DialogDescription>
                        Ollama runs bigger models on your Mac. It stays on your computer, like everything else here.
                    </DialogDescription>
                </DialogHeader>

                {safari ? (
                    <p className="text-sm">Safari blocks web pages from talking to apps on your Mac. Open this page in Chrome to connect Ollama.</p>
                ) : (
                    <div className="space-y-4 text-sm" aria-live="polite">
                        {step === 'checking' && (
                            <p className="flex items-center gap-2 text-muted-foreground"><Loader2 className="size-4 animate-spin" aria-hidden /> Looking for Ollama...</p>
                        )}

                        {step === 'missing' && (
                            <ol className="space-y-3">
                                <li>
                                    <span className="font-medium">1. Install Ollama</span>
                                    <a
                                        href="https://ollama.com/download"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97]"
                                    >
                                        <Download className="size-4" aria-hidden /> Get Ollama
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-muted-foreground">
                                    <Loader2 className="size-4 animate-spin" aria-hidden /> Watching for it. This moves on by itself once Ollama is open.
                                </li>
                            </ol>
                        )}

                        {step === 'blocked' && (
                            <div className="space-y-3">
                                <p><span className="font-medium">2. Let this site talk to Ollama.</span> Paste this in Terminal. It also restarts Ollama.</p>
                                <div className="flex items-start gap-2 rounded-lg border border-border bg-secondary/40 p-2">
                                    <code className="min-w-0 flex-1 select-all whitespace-pre-wrap font-mono text-xs [overflow-wrap:anywhere]" data-testid="allow-command">{command}</code>
                                    <button type="button" onClick={copy} aria-label="Copy command" className="shrink-0 rounded p-1 hover:bg-secondary">
                                        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                                    </button>
                                </div>
                                <p className="text-muted-foreground">3. If Chrome asks to let this site access devices on your local network, click Allow.</p>
                                <p className="text-xs text-muted-foreground">You will need to paste it again after a restart.</p>
                            </div>
                        )}

                        {step === 'pick' && (
                            <div className="space-y-3">
                                <p className="font-medium">Connected. Which Mac do you have?</p>
                                <div className="grid grid-cols-5 gap-2" role="radiogroup" aria-label="Mac memory">
                                    {RAM_CHOICES.map((gb) => (
                                        <button
                                            key={gb}
                                            type="button"
                                            role="radio"
                                            aria-checked={ram === gb}
                                            onClick={() => setRam(gb)}
                                            className={cn(
                                                'rounded-lg border px-2 py-2 tabular-nums transition-[transform,border-color] duration-150 ease-out active:scale-[0.97]',
                                                ram === gb ? 'border-primary bg-primary/5' : 'border-border hover:bg-secondary/50',
                                            )}
                                        >
                                            {gb === 48 ? '48+' : gb} GB
                                        </button>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground">Apple menu, About This Mac, Memory.</p>
                                {model && (
                                    <button
                                        type="button"
                                        onClick={() => download(model)}
                                        className="w-full rounded-xl bg-primary px-4 py-3 text-left text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97]"
                                    >
                                        <span className="block font-medium">
                                            {hasModel(installed, model.tag) ? `Use ${model.label}` : `Download ${model.label}`}
                                        </span>
                                        <span className="block text-xs opacity-75">
                                            {hasModel(installed, model.tag) ? 'Already on this Mac.' : `${formatBytes(model.downloadGB * 1e9)}. ${model.note}`}
                                        </span>
                                    </button>
                                )}
                                {fallback && (
                                    <button
                                        type="button"
                                        onClick={() => download(fallback)}
                                        className="w-full rounded-lg px-1 text-left text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                                    >
                                        {hasModel(installed, fallback.tag)
                                            ? `Use ${fallback.label} instead`
                                            : `Or download ${fallback.label} (${formatBytes(fallback.downloadGB * 1e9)}). ${fallback.note}`}
                                    </button>
                                )}
                            </div>
                        )}

                        {step === 'pulling' && progress && (
                            <div className="space-y-2">
                                <p className="font-medium">Downloading {chosen?.label} through Ollama</p>
                                <div role="progressbar" aria-label="Ollama download" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} className="h-2 overflow-hidden rounded-full bg-secondary">
                                    <div className="h-full w-full origin-left rounded-full bg-primary transition-transform duration-300 ease-linear" style={{ transform: `scaleX(${percent / 100})` }} />
                                </div>
                                <p className="tabular-nums text-muted-foreground">
                                    {progress.completed > 0 ? `${formatBytes(progress.completed)} of ${formatBytes(progress.total)}` : progress.status}
                                </p>
                                <p className="text-xs text-muted-foreground">You can keep chatting with the browser model meanwhile.</p>
                            </div>
                        )}

                        {step === 'failed' && (
                            <div role="alert" className="space-y-2">
                                <p className="font-medium">The download stopped</p>
                                <p className="text-muted-foreground">{failure}</p>
                                <button type="button" onClick={() => chosen && download(chosen)} className="rounded-lg border border-border px-3 py-1.5">
                                    Resume
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <p className="text-xs text-muted-foreground">
                    Picks: {suggestedModels().map((m) => `${m.minRamGB === 48 ? '48+' : m.minRamGB} GB ${m.label}`).join(', ')}.
                </p>
            </DialogContent>
        </Dialog>
    );
}
