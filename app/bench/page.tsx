'use client';

import { useEffect, useState } from 'react';
import { Check, Copy, Gauge, Loader2 } from 'lucide-react';
import { BROWSER_MODELS, detectDevice, pickBrowserModel, type BrowserModelKey, type DeviceInfo } from '@root/lib/models';
import { benchBrowserModel, benchOllamaModel, buildReport, BENCH_PROMPT, type BenchReport, type BenchResult } from '@root/lib/bench';
import { workerUrlFor } from '@root/lib/engine';
import { listLocalModels, probeOllama } from '@root/lib/ollama';

const KEYS = Object.keys(BROWSER_MODELS) as BrowserModelKey[];

interface GpuInfo { vendor?: string; architecture?: string; description?: string }

async function gpuInfo(): Promise<GpuInfo | null> {
    try {
        const nav = navigator as unknown as { gpu?: { requestAdapter(): Promise<{ info?: GpuInfo } | null> } };
        const info = (await nav.gpu?.requestAdapter())?.info;
        return info ? { vendor: info.vendor, architecture: info.architecture, description: info.description } : null;
    } catch {
        return null;
    }
}

/**
 * /bench: times each model on this device and prints the numbers as JSON.
 * Nothing runs until you press Run, because the first run downloads models.
 */
export default function BenchPage() {
    const [device, setDevice] = useState<DeviceInfo | null>(null);
    const [gpu, setGpu] = useState<GpuInfo | null>(null);
    const [browserPicks, setBrowserPicks] = useState<Set<BrowserModelKey>>(new Set());
    const [ollamaModels, setOllamaModels] = useState<string[]>([]);
    const [ollamaPicks, setOllamaPicks] = useState<Set<string>>(new Set());
    const [running, setRunning] = useState<string | null>(null);
    const [report, setReport] = useState<BenchReport | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const fake = params.get('engine') === 'fake';
        detectDevice().then((info) => {
            // Same rule as the chat page: the fake test engine needs no GPU.
            const d = { ...info, hasWebGPU: fake ? params.get('gpu') !== 'none' : !!info.hasWebGPU };
            setDevice(d);
            if (d.hasWebGPU) setBrowserPicks(new Set([pickBrowserModel(d).key]));
        });
        gpuInfo().then(setGpu);
        probeOllama().then(async (state) => {
            if (state !== 'ready') return;
            const tags = await listLocalModels();
            setOllamaModels(tags);
        }).catch(() => {});
    }, []);

    const toggle = <T,>(set: Set<T>, value: T) => {
        const next = new Set(set);
        if (next.has(value)) next.delete(value);
        else next.add(value);
        return next;
    };

    async function run() {
        if (!device) return;
        setReport(null);
        const results: BenchResult[] = [];
        for (const key of KEYS.filter((k) => browserPicks.has(k))) {
            const model = BROWSER_MODELS[key];
            setRunning(model.label);
            // A fresh worker per model, so each load is timed on its own.
            const worker = new Worker(workerUrlFor(window.location.search), { type: 'module' });
            results.push(await benchBrowserModel(worker, { id: model.id, label: model.label, dtype: device.hasShaderF16 ? 'q4f16' : 'q4' }));
            worker.terminate();
        }
        for (const tag of ollamaModels.filter((t) => ollamaPicks.has(t))) {
            setRunning(tag);
            results.push(await benchOllamaModel(tag));
        }
        setRunning(null);
        setReport(buildReport({ userAgent: navigator.userAgent, ...device, gpu }, results));
    }

    const json = report ? JSON.stringify(report, null, 2) : '';
    const nothingPicked = browserPicks.size === 0 && ollamaPicks.size === 0;

    return (
        <main className="mx-auto w-full max-w-2xl px-4 py-10">
            <div className="flex items-center gap-2">
                <Gauge className="size-5 text-primary" aria-hidden />
                <h1 className="text-2xl font-semibold tracking-[-0.02em]">Benchmark</h1>
            </div>
            <p className="mt-2 text-muted-foreground text-pretty">
                Times each model on this device: how long it takes to load and how fast it writes.
                The first run includes the download. Run it again for a cached load time.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Prompt: &ldquo;{BENCH_PROMPT}&rdquo;</p>

            <fieldset className="mt-6" disabled={!!running}>
                <legend className="text-sm font-medium">In the browser</legend>
                {device && !device.hasWebGPU && <p className="mt-2 text-sm text-muted-foreground">This browser has no WebGPU, so browser models can&apos;t run here.</p>}
                <div className="mt-2 flex flex-col gap-2">
                    {KEYS.map((key) => (
                        <label key={key} className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={browserPicks.has(key)} disabled={!device?.hasWebGPU} onChange={() => setBrowserPicks((s) => toggle(s, key))} />
                            {BROWSER_MODELS[key].label}
                            <span className="text-muted-foreground tabular-nums">({BROWSER_MODELS[key].downloadGB} GB)</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <fieldset className="mt-6" disabled={!!running}>
                <legend className="text-sm font-medium">With Ollama on this computer</legend>
                {ollamaModels.length === 0 ? (
                    <p className="mt-2 text-sm text-muted-foreground">No Ollama models found. Connect Ollama from the chat page first.</p>
                ) : (
                    <div className="mt-2 flex flex-col gap-2">
                        {ollamaModels.map((tag) => (
                            <label key={tag} className="flex items-center gap-2 text-sm">
                                <input type="checkbox" checked={ollamaPicks.has(tag)} onChange={() => setOllamaPicks((s) => toggle(s, tag))} />
                                {tag}
                            </label>
                        ))}
                    </div>
                )}
            </fieldset>

            <button
                type="button"
                onClick={run}
                disabled={!device || !!running || nothingPicked}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97] disabled:opacity-50"
            >
                {running ? <><Loader2 className="size-4 animate-spin" aria-hidden /> Testing {running}...</> : 'Run benchmark'}
            </button>

            {report && (
                <section className="mt-8" aria-label="Results">
                    <table className="w-full text-left text-sm tabular-nums">
                        <thead className="text-muted-foreground">
                            <tr><th className="py-1 font-normal">Model</th><th className="font-normal">Load</th><th className="font-normal">First word</th><th className="font-normal">Speed</th></tr>
                        </thead>
                        <tbody>
                            {report.results.map((r) => (
                                <tr key={`${r.engine}:${r.model}`} className="border-t border-border/60">
                                    <td className="py-2">{r.model}</td>
                                    {r.error ? (
                                        <td colSpan={3} className="text-destructive">{r.error}</td>
                                    ) : (
                                        <>
                                            <td>{r.loadMs == null ? 'n/a' : `${(r.loadMs / 1000).toFixed(1)} s`}</td>
                                            <td>{r.firstTokenMs == null ? 'n/a' : `${(r.firstTokenMs / 1000).toFixed(2)} s`}</td>
                                            <td>{r.tokensPerSecond == null ? 'n/a' : `${r.tokensPerSecond} tok/s`}</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-6 flex items-center justify-between">
                        <h2 className="text-sm font-medium">JSON</h2>
                        <button
                            type="button"
                            onClick={() => navigator.clipboard?.writeText(json).then(() => setCopied(true), () => {})}
                            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                        >
                            {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                    <pre data-testid="bench-json" className="mt-2 max-h-96 overflow-auto rounded-xl bg-secondary/50 p-4 text-xs">{json}</pre>
                </section>
            )}
        </main>
    );
}
