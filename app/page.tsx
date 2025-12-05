'use client';

import { useState, useEffect, useCallback } from 'react';
import { useWebGPU } from './hooks/useWebGPU';
import { useWorker, Message } from './hooks/useWorker';
import { StatusBanner } from '@components/StatusBanner';
import { ChatMessages } from '@components/ChatMessages';
import { ChatInput } from '@components/ChatInput';
import { ErrorBoundary } from '@components/ErrorBoundary';
import styles from './page.module.scss';

export const dynamic = 'force-static';

/**
 * Main chat page component
 * Uses custom hooks for WebGPU detection and worker communication
 */
export default function Page() {
  const webGPU = useWebGPU();
  const worker = useWorker();
  const [messages, setMessages] = useState<Message[]>([]);

  // Set up completion handler to add assistant messages to history
  useEffect(() => {
    worker.onComplete((response: string) => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    });
  }, [worker]);

  // Handle sending a new message
  const handleSend = useCallback((content: string) => {
    const userMessage: Message = { role: 'user', content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    worker.sendMessage(newMessages);
  }, [messages, worker]);

  // Handle clearing the conversation
  const handleClear = useCallback(() => {
    setMessages([]);
    worker.reset();
  }, [worker]);

  // Determine if input should be disabled
  const isDisabled = worker.status !== 'ready' || worker.generation.isGenerating;

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Qwen-Web</h1>
          <p className={styles.subtitle}>
            Run Qwen3-0.6B locally in your browser with WebGPU
          </p>
        </header>

        {/* Status banner (loading/error/ready) */}
        <StatusBanner
          status={worker.status}
          progress={worker.progress}
          webGPUSupported={webGPU.isSupported}
          error={worker.error}
        />

        {/* Chat messages */}
        <ChatMessages
          messages={messages}
          isGenerating={worker.generation.isGenerating}
          currentResponse={worker.generation.currentResponse}
          thought={worker.generation.thought}
          tps={worker.generation.tps}
        />

        {/* Input controls */}
        <ChatInput
          onSend={handleSend}
          onClear={handleClear}
          onInterrupt={worker.interrupt}
          disabled={isDisabled}
          isGenerating={worker.generation.isGenerating}
          hasMessages={messages.length > 0}
        />
      </div>
    </ErrorBoundary>
  );
}
