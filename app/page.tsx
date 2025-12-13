'use client';

import { useState, useEffect, useCallback } from 'react';
import { useWorker, Message } from './hooks/useWorker';
import { ChatContainer } from '@components/ChatContainer';
import { ChatInputBar } from '@components/ChatInputBar';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ThemeToggle } from '@root/components/theme-toggle';
import { ModelSelector } from '@root/components/ModelSelector';

export const dynamic = 'force-static';

/**
 * Main chat page component
 * Uses custom hooks for WebGPU detection and worker communication
 */
export default function Page() {
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
      <div className="flex h-screen flex-col bg-gradient-to-b from-background to-secondary/20">
        {/* Header */}
        <header className="shrink-0 border-b border-border/40 bg-background/80 px-4 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
            {/* Left: Title */}
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                OnYourDevice
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Run AI models locally in your browser with WebGPU
              </p>
            </div>

            {/* Right: Model Selector + Theme Toggle */}
            <div className="flex items-center gap-3">
              <ModelSelector
                status={worker.status}
                modelName="Qwen3-0.6B"
                error={worker.error ?? undefined}
                progress={worker.progress}
              />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Chat container - this is the scrollable area */}
        <ChatContainer
          messages={messages}
          isGenerating={worker.generation.isGenerating}
          currentResponse={worker.generation.currentResponse}
          thought={worker.generation.thought}
          tps={worker.generation.tps}
          onSend={handleSend}
          onInterrupt={worker.interrupt}
        />

        {/* Input controls - fixed at bottom */}
        <div className="shrink-0">
          <ChatInputBar
            onSend={handleSend}
            onClear={handleClear}
            onInterrupt={worker.interrupt}
            disabled={isDisabled}
            isGenerating={worker.generation.isGenerating}
            hasMessages={messages.length > 0}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}
