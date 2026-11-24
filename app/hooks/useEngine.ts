'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { loadModel, workerUrlFor, type WorkerEvent } from '@root/lib/engine';
import { detectDevice, pickBrowserModel, type Pick } from '@root/lib/models';
import { WorkerChatTransport } from '@root/lib/worker-transport';

export type EngineStatus = 'initializing' | 'loading' | 'ready' | 'error';

export interface EngineProgress {
    file: string;
    progress: number;
}

/**
 * Owns the model worker: picks a model for this device, loads it, and
 * exposes an AI SDK transport for useChat.
 */
export function useEngine() {
    const workerRef = useRef<Worker | null>(null);
    const [status, setStatus] = useState<EngineStatus>('initializing');
    const [progress, setProgress] = useState<EngineProgress | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [tps, setTps] = useState<number | null>(null);
    const [pick, setPick] = useState<Pick | null>(null);

    useEffect(() => {
        let cancelled = false;
        let worker: Worker;
        try {
            worker = new Worker(workerUrlFor(window.location.search), { type: 'module' });
        } catch {
            setStatus('error');
            setError('Could not start the model worker.');
            return;
        }
        workerRef.current = worker;

        worker.addEventListener('message', (event: MessageEvent<WorkerEvent>) => {
            const msg = event.data;
            switch (msg.status) {
                case 'loading':
                    setStatus('loading');
                    break;
                case 'initiate':
                case 'progress':
                    setProgress({ file: msg.file, progress: msg.progress });
                    break;
                case 'done':
                    setProgress(null);
                    break;
                case 'ready':
                    setStatus('ready');
                    setProgress(null);
                    break;
                case 'error':
                    // Errors during a reply are shown in the chat by useChat.
                    if (!('id' in msg) || !msg.id) {
                        setStatus('error');
                        setError(msg.data);
                    }
                    break;
            }
        });
        worker.addEventListener('error', () => {
            setStatus('error');
            setError('The model worker failed to start.');
        });

        detectDevice().then((device) => {
            if (cancelled) return;
            const chosen = pickBrowserModel(device);
            setPick(chosen);
            loadModel(worker, { id: chosen.model.id, dtype: chosen.dtype });
        });

        return () => {
            cancelled = true;
            worker.terminate();
            workerRef.current = null;
        };
    }, []);

    const transport = useMemo(() => new WorkerChatTransport(() => workerRef.current, setTps), []);

    return { status, progress, error, tps, pick, transport };
}
