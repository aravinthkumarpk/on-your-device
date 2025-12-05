'use client';

import { useRef, useEffect, useCallback, useState } from 'react';

export type WorkerStatus = 'initializing' | 'loading' | 'ready' | 'error';

export interface WorkerProgress {
    file: string;
    progress: number;
}

export interface GenerationState {
    isGenerating: boolean;
    currentResponse: string;
    thought: string;
    tps: number | null;
}

export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface WorkerMessage {
    status: string;
    data?: string;
    file?: string;
    progress?: number;
    output?: string | string[];
    thought?: string;
    tps?: number;
}

export interface UseWorkerReturn {
    status: WorkerStatus;
    progress: WorkerProgress | null;
    generation: GenerationState;
    error: string | null;
    sendMessage: (messages: Message[]) => void;
    interrupt: () => void;
    reset: () => void;
    onComplete: (callback: (response: string) => void) => void;
}

/**
 * Hook to manage Web Worker communication for model inference
 * Handles model loading, message generation, and streaming responses
 */
export function useWorker(): UseWorkerReturn {
    const workerRef = useRef<Worker | null>(null);
    const onCompleteRef = useRef<((response: string) => void) | null>(null);

    const [status, setStatus] = useState<WorkerStatus>('initializing');
    const [progress, setProgress] = useState<WorkerProgress | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [generation, setGeneration] = useState<GenerationState>({
        isGenerating: false,
        currentResponse: '',
        thought: '',
        tps: null,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        try {
            workerRef.current = new Worker('/worker.js', { type: 'module' });

            workerRef.current.onmessage = (event: MessageEvent<WorkerMessage>) => {
                const { status: workerStatus, data, file, progress: workerProgress, output, thought, tps } = event.data;

                switch (workerStatus) {
                    case 'loading':
                        setStatus('loading');
                        break;
                    case 'initiate':
                        if (file) {
                            setProgress({ file, progress: 0 });
                        }
                        break;
                    case 'progress':
                        if (file && workerProgress !== undefined) {
                            setProgress({ file, progress: workerProgress });
                        }
                        break;
                    case 'done':
                        setProgress(null);
                        break;
                    case 'ready':
                        setStatus('ready');
                        setProgress(null);
                        break;
                    case 'start':
                        setGeneration(prev => ({
                            ...prev,
                            isGenerating: true,
                            currentResponse: '',
                            thought: '',
                        }));
                        break;
                    case 'update':
                        setGeneration(prev => ({
                            ...prev,
                            currentResponse: (output as string) || '',
                            thought: thought || '',
                            tps: tps ?? null,
                        }));
                        break;
                    case 'complete':
                        setGeneration(prev => ({
                            ...prev,
                            isGenerating: false,
                            currentResponse: '',
                            thought: '',
                            tps: null,
                        }));
                        // Call completion callback with the full response
                        if (output && Array.isArray(output) && output[0]) {
                            const assistantMessage = output[0].split('\n').slice(1).join('\n').trim();
                            if (onCompleteRef.current) {
                                onCompleteRef.current(assistantMessage);
                            }
                        }
                        break;
                    case 'error':
                        setStatus('error');
                        setError(data || 'Unknown error occurred');
                        setGeneration(prev => ({ ...prev, isGenerating: false }));
                        break;
                }
            };

            workerRef.current.onerror = (err) => {
                console.error('Worker error:', err);
                setStatus('error');
                setError('Worker initialization failed');
            };

            // Start loading the model
            workerRef.current.postMessage({ type: 'load' });
        } catch (err) {
            console.error('Failed to initialize worker:', err);
            setStatus('error');
            setError('Failed to initialize worker');
        }

        return () => {
            workerRef.current?.terminate();
        };
    }, []);

    const sendMessage = useCallback((messages: Message[]) => {
        if (workerRef.current && status === 'ready') {
            // Send last 10 messages for context
            workerRef.current.postMessage({
                type: 'generate',
                data: messages.slice(-10),
            });
        }
    }, [status]);

    const interrupt = useCallback(() => {
        if (workerRef.current) {
            workerRef.current.postMessage({ type: 'interrupt' });
            setGeneration(prev => ({ ...prev, isGenerating: false }));
        }
    }, []);

    const reset = useCallback(() => {
        if (workerRef.current) {
            workerRef.current.postMessage({ type: 'reset' });
        }
    }, []);

    const onComplete = useCallback((callback: (response: string) => void) => {
        onCompleteRef.current = callback;
    }, []);

    return {
        status,
        progress,
        generation,
        error,
        sendMessage,
        interrupt,
        reset,
        onComplete,
    };
}
