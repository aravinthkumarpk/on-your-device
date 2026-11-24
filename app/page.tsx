'use client';

import { useCallback, useMemo } from 'react';
import { useChat } from '@ai-sdk/react';
import { useEngine } from './hooks/useEngine';
import { toChatTurns } from '@root/lib/engine';
import { ChatContainer } from '@components/ChatContainer';
import { ChatInputBar } from '@components/ChatInputBar';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ThemeToggle } from '@root/components/theme-toggle';
import { ModelSelector } from '@root/components/ModelSelector';

export const dynamic = 'force-static';

/**
 * Main chat page. useEngine loads the model in a worker, and useChat
 * (AI SDK) manages the conversation through the worker transport.
 */
export default function Page() {
  const engine = useEngine();
  const { messages, sendMessage, status, stop, setMessages, error } = useChat({
    transport: engine.transport,
  });

  const isGenerating = status === 'submitted' || status === 'streaming';
  const last = messages[messages.length - 1];
  const streaming = isGenerating && last?.role === 'assistant' ? last : null;

  // Finished turns, plus the reply that is still streaming.
  const history = useMemo(
    () => toChatTurns(streaming ? messages.slice(0, -1) : messages, Infinity),
    [messages, streaming],
  );
  const currentResponse = streaming ? toChatTurns([streaming])[0]?.content ?? '' : '';
  const thought = streaming
    ? streaming.parts.filter((p) => p.type === 'reasoning').map((p) => ('text' in p ? p.text : '')).join('')
    : '';

  const handleSend = useCallback((content: string) => {
    sendMessage({ text: content });
  }, [sendMessage]);

  const handleClear = useCallback(() => {
    stop();
    setMessages([]);
  }, [stop, setMessages]);

  const modelLabel = engine.pick?.model.label;
  const isDisabled = engine.status !== 'ready' || isGenerating;

  return (
    <ErrorBoundary>
      <div className="flex h-screen flex-col bg-gradient-to-b from-background to-secondary/20">
        <header className="shrink-0 border-b border-border/40 bg-background/80 px-4 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                OnYourDevice
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Run AI models locally in your browser with WebGPU
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ModelSelector
                status={engine.status}
                modelName={modelLabel}
                error={engine.error ?? undefined}
                progress={engine.progress}
              />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <ChatContainer
          messages={history}
          isGenerating={isGenerating}
          currentResponse={currentResponse}
          thought={thought}
          tps={engine.tps}
          onSend={handleSend}
          onInterrupt={stop}
          modelLabel={modelLabel}
        />

        {error && (
          <p role="alert" className="mx-auto max-w-4xl px-4 text-sm text-destructive">
            {error.message}
          </p>
        )}

        <div className="shrink-0">
          <ChatInputBar
            onSend={handleSend}
            onClear={handleClear}
            onInterrupt={stop}
            disabled={isDisabled}
            isGenerating={isGenerating}
            hasMessages={messages.length > 0}
            modelLabel={modelLabel}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}
