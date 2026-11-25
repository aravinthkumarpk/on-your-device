'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { loadModel, workerUrlFor, type ChatTurn, type WorkerEvent } from '@root/lib/engine';
import type { ChatTransport, UIMessage } from 'ai';
import {
    detectDevice,
    isModelKey,
    pickBrowserModel,
    pickByKey,
    type BrowserModelKey,
    type DeviceInfo,
    type Pick,
} from '@root/lib/models';
import { formatEta, summarize, type DownloadSummary, type FileProgress } from '@root/lib/download';
import { WorkerChatTransport } from '@root/lib/worker-transport';
import {
    RoutingTransport,
    TextStreamerTransport,
    chromeStreamer,
    fakeChromeStreamer,
    isChromeModelReady,
    type TextStreamer,
} from '@root/lib/chrome-bridge';
import { hasModel, listLocalModels, localModelFor, ollamaStreamer, probeOllama, type LocalModel } from '@root/lib/ollama';

/**
 * checking    detecting the device
 * unsupported no WebGPU, nothing can run
 * welcome     first visit, waiting for the Start tap
 * loading     downloading or warming up
 * ready       chat works
 * error       loading failed
 */
export type EnginePhase = 'checking' | 'unsupported' | 'welcome' | 'loading' | 'ready' | 'error';

export interface DownloadState extends DownloadSummary {
    eta: string | null;
    /** Text for the step after the download, like "Warming up...". */
    stage: string;
}

const STORAGE_KEY = 'oyd:model';
const LOCAL_KEY = 'oyd:local';

function readSaved(): BrowserModelKey | null {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        return isModelKey(value) ? value : null;
    } catch {
        return null;
    }
}

function save(key: BrowserModelKey) {
    try {
        localStorage.setItem(STORAGE_KEY, key);
    } catch {
        // Private mode or blocked storage: the app still works, it just asks again next time.
    }
}

/**
 * Owns the model worker: detects the device, suggests a model, loads it on
 * Start (or straight away on a return visit) and exposes an AI SDK transport.
 */
export function useEngine(getChats: () => ChatTurn[] = () => []) {
    const workerRef = useRef<Worker | null>(null);
    const filesRef = useRef<Record<string, FileProgress>>({});
    const startedAtRef = useRef<number | null>(null);
    const pickRef = useRef<Pick | null>(null);

    const [phase, setPhase] = useState<EnginePhase>('checking');
    const [device, setDevice] = useState<DeviceInfo | null>(null);
    const [suggested, setSuggested] = useState<Pick | null>(null);
    const [pick, setPick] = useState<Pick | null>(null);
    const [download, setDownload] = useState<DownloadState | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [tps, setTps] = useState<number | null>(null);
    const [lastTps, setLastTps] = useState<number | null>(null);
    const [isReturning, setIsReturning] = useState(false);
    const [bridge, setBridge] = useState<TextStreamer | null>(null);
    const [local, setLocal] = useState<LocalModel | null>(null);
    /** Ollama was used last time but now blocks us (its setting resets on reboot). */
    const [localNeedsReconnect, setLocalNeedsReconnect] = useState(false);
    const phaseRef = useRef<EnginePhase>('checking');
    phaseRef.current = phase;

    const handleTps = useCallback((value: number | null) => {
        setTps(value);
        if (value !== null) setLastTps(value);
    }, []);

    const start = useCallback((key?: BrowserModelKey) => {
        const worker = workerRef.current;
        if (!worker || !device) return;
        const chosen = key ? pickByKey(key, device.hasShaderF16) : suggested;
        if (!chosen) return;
        pickRef.current = chosen;
        setPick(chosen);
        setError(null);
        filesRef.current = {};
        startedAtRef.current = null;
        setDownload({ loadedBytes: 0, totalBytes: chosen.model.downloadGB * 1e9, percent: 0, eta: null, stage: 'Starting download...' });
        setPhase('loading');
        // Ask the browser not to evict the model files under storage pressure.
        navigator.storage?.persist?.().catch(() => undefined);
        loadModel(worker, { id: chosen.model.id, dtype: chosen.dtype });
    }, [device, suggested]);

    useEffect(() => {
        let cancelled = false;
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const fake = params.get('engine') === 'fake';

        let worker: Worker;
        try {
            worker = new Worker(workerUrlFor(search), { type: 'module' });
        } catch {
            setPhase('error');
            setError('Could not start the model worker. Try reloading the page.');
            return;
        }
        workerRef.current = worker;

        worker.addEventListener('message', (event: MessageEvent<WorkerEvent>) => {
            const msg = event.data;
            switch (msg.status) {
                case 'loading':
                    setDownload((d) => (d ? { ...d, stage: msg.data ?? d.stage } : d));
                    break;
                case 'initiate':
                case 'progress': {
                    if (msg.total) {
                        filesRef.current[msg.file] = { loaded: msg.loaded ?? 0, total: msg.total };
                        startedAtRef.current ??= performance.now();
                    }
                    const expected = (pickRef.current?.model.downloadGB ?? 0) * 1e9;
                    const summary = summarize(filesRef.current, expected);
                    const seconds = startedAtRef.current ? (performance.now() - startedAtRef.current) / 1000 : 0;
                    const rate = seconds > 1 ? summary.loadedBytes / seconds : 0;
                    setDownload((d) => ({
                        ...summary,
                        eta: formatEta(summary.totalBytes - summary.loadedBytes, rate),
                        stage: d?.stage ?? 'Downloading the model...',
                    }));
                    break;
                }
                case 'ready':
                    setPhase('ready');
                    setDownload(null);
                    if (pickRef.current) save(pickRef.current.key);
                    break;
                case 'error':
                    // Errors during a reply are shown in the chat by useChat.
                    if (!('id' in msg) || !msg.id) {
                        setPhase('error');
                        setError(msg.data);
                        setDownload(null);
                    }
                    break;
            }
        });
        worker.addEventListener('error', () => {
            setPhase('error');
            setError('The model worker failed to start. Try reloading the page.');
        });

        // Reconnect to Ollama if it was used last time.
        let savedLocal: string | null = null;
        try {
            savedLocal = localStorage.getItem(LOCAL_KEY);
        } catch {
            savedLocal = null;
        }
        const savedModel = savedLocal ? localModelFor(savedLocal) : null;
        if (savedModel) {
            probeOllama().then(async (state) => {
                if (cancelled) return;
                if (state === 'ready' && hasModel(await listLocalModels().catch(() => []), savedModel.tag)) setLocal(savedModel);
                else if (state === 'blocked') setLocalNeedsReconnect(true);
            });
        }

        // Chrome's built-in model, only if it is already on this device.
        if (fake) {
            if (params.get('chrome') === 'ready') setBridge(() => fakeChromeStreamer);
        } else {
            isChromeModelReady().then((ready) => {
                if (ready && !cancelled) setBridge(() => chromeStreamer);
            });
        }

        detectDevice().then((info) => {
            if (cancelled) return;
            // The fake engine needs no GPU. ?gpu=none simulates a browser without WebGPU.
            const hasWebGPU = fake ? params.get('gpu') !== 'none' : !!info.hasWebGPU;
            const detected = { ...info, hasWebGPU };
            setDevice(detected);
            if (!hasWebGPU) {
                setPhase('unsupported');
                return;
            }
            const auto = pickBrowserModel(detected);
            setSuggested(auto);
            const saved = readSaved();
            if (saved) {
                setIsReturning(true);
                const chosen = pickByKey(saved, detected.hasShaderF16);
                pickRef.current = chosen;
                setPick(chosen);
                setDownload({ loadedBytes: 0, totalBytes: chosen.model.downloadGB * 1e9, percent: 0, eta: null, stage: 'Loading from this device...' });
                setPhase('loading');
                loadModel(worker, { id: chosen.model.id, dtype: chosen.dtype });
            } else {
                setPhase('welcome');
            }
        });

        return () => {
            cancelled = true;
            worker.terminate();
            workerRef.current = null;
        };
    }, []);

    const workerTransport = useMemo(() => new WorkerChatTransport(() => workerRef.current, handleTps), [handleTps]);
    const bridgeTransport = useMemo(() => (bridge ? new TextStreamerTransport(bridge) : null), [bridge]);
    const bridgeRef = useRef(bridgeTransport);
    bridgeRef.current = bridgeTransport;
    const getChatsRef = useRef(getChats);
    getChatsRef.current = getChats;
    const [localTransport, setLocalTransport] = useState<ChatTransport<UIMessage> | null>(null);
    useEffect(() => {
        if (!local) {
            setLocalTransport(null);
            return;
        }
        // Plain chat right away; the agent (with tools) loads on demand to keep the first page small.
        setLocalTransport(new TextStreamerTransport(ollamaStreamer(local.tag, { sampling: local.sampling }), 'ollama'));
        // Tools only for our own picks, which we know support them.
        if (local.custom) return;
        let cancelled = false;
        import('@root/lib/ollama-agent').then(({ ollamaAgentTransport }) => {
            if (!cancelled) setLocalTransport(ollamaAgentTransport(local.tag, () => getChatsRef.current(), undefined, local.sampling));
        });
        return () => {
            cancelled = true;
        };
    }, [local]);
    const localRef = useRef(localTransport);
    localRef.current = localTransport;

    // Ollama wins when connected. Until our model is ready, Chrome's model (if present) answers.
    const transport = useMemo(
        () => new RoutingTransport(
            () => localRef.current || (phaseRef.current !== 'ready' && bridgeRef.current) || workerTransport,
        ),
        [workerTransport],
    );

    const connectLocal = useCallback((model: LocalModel | null) => {
        setLocal(model);
        setLocalNeedsReconnect(false);
        try {
            if (model) localStorage.setItem(LOCAL_KEY, model.tag);
            else localStorage.removeItem(LOCAL_KEY);
        } catch {
            // ignore
        }
    }, []);

    /** Chrome's model can answer right now, while ours is still loading. */
    const bridgeActive = !!bridgeTransport && phase === 'loading';

    return {
        phase, device, suggested, pick, download, error, tps, lastTps, isReturning, start, transport, bridgeActive,
        local, connectLocal, localNeedsReconnect,
    };
}
