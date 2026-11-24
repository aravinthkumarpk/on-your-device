'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Gauge, Loader2 } from 'lucide-react';
import { useEngine } from './hooks/useEngine';
import { toChatTurns, toDisplayTurns } from '@root/lib/engine';
import { ChatContainer } from '@components/ChatContainer';
import { ChatInputBar } from '@components/ChatInputBar';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ThemeToggle } from '@root/components/theme-toggle';
import { Welcome } from '@components/onboarding/Welcome';
import { GettingReady } from '@components/onboarding/GettingReady';
import { LoadError, Unsupported } from '@components/onboarding/Problems';
import { AfterAnswer } from '@components/onboarding/AfterAnswer';

export const dynamic = 'force-static';

/**
 * Main page. First visit: Welcome, then Getting ready (with a live input that
 * queues the first question), then chat. Return visits go straight to chat.
 */
export default function Page() {
  const engine = useEngine();
  const { messages, sendMessage, status, stop, setMessages, error } = useChat({
    transport: engine.transport,
  });
  const [queued, setQueued] = useState<string | null>(null);

  const isGenerating = status === 'submitted' || status === 'streaming';
  const last = messages[messages.length - 1];
  const streaming = isGenerating && last?.role === 'assistant' ? last : null;

  const history = useMemo(
    () => toDisplayTurns(streaming ? messages.slice(0, -1) : messages),
    [messages, streaming],
  );
  const currentResponse = streaming ? toChatTurns([streaming])[0]?.content ?? '' : '';
  const thought = streaming
    ? streaming.parts.filter((p) => p.type === 'reasoning').map((p) => ('text' in p ? p.text : '')).join('')
    : '';

  // Send the question typed during the download as soon as the model is ready.
  useEffect(() => {
    if (engine.phase === 'ready' && queued) {
      sendMessage({ text: queued });
      setQueued(null);
    }
  }, [engine.phase, queued, sendMessage]);

  const handleSend = useCallback((content: string) => {
    if (engine.phase === 'ready' || engine.bridgeActive) sendMessage({ text: content });
    else if (engine.phase === 'loading') setQueued(content);
  }, [engine.phase, engine.bridgeActive, sendMessage]);

  const handleClear = useCallback(() => {
    stop();
    setMessages([]);
  }, [stop, setMessages]);

  const modelLabel = engine.pick?.model.label;
  const canType = engine.phase === 'ready' || engine.bridgeActive || (engine.phase === 'loading' && !queued);
  const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');
  const hasAnswer = !!lastAssistant && !isGenerating && engine.phase === 'ready'
    && (lastAssistant.metadata as { engine?: string } | undefined)?.engine !== 'chrome';

  if (engine.phase === 'checking') {
    return <div className="flex h-screen items-center justify-center" aria-busy="true"><Loader2 className="size-5 animate-spin text-muted-foreground" aria-label="Loading" /></div>;
  }

  return (
    <ErrorBoundary>
      <div className="flex h-screen flex-col bg-gradient-to-b from-background to-secondary/20">
        <header className="shrink-0 border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur-xl">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
            <h1 className="text-xl font-semibold tracking-[-0.02em]">OnYourDevice</h1>
            <div className="flex items-center gap-2">
              {modelLabel && engine.phase !== 'welcome' && (
                <span className="rounded-full border border-border/60 px-3 py-1 text-sm text-muted-foreground" data-testid="model-chip">
                  {modelLabel}
                  {engine.phase === 'loading' && ' (loading)'}
                </span>
              )}
              {engine.tps !== null && isGenerating && (
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm tabular-nums text-primary" aria-label="Speed">
                  <Gauge className="size-4" aria-hidden />
                  {engine.tps.toFixed(0)} tok/s
                </span>
              )}
              <ThemeToggle />
            </div>
          </div>
        </header>

        {engine.phase === 'unsupported' && <Unsupported />}

        {engine.phase === 'welcome' && engine.suggested && (
          <Welcome suggested={engine.suggested} onStart={engine.start} />
        )}

        {(engine.phase === 'loading' || engine.phase === 'ready' || engine.phase === 'error') && (
          <>
            {engine.phase === 'loading' && engine.download && modelLabel && (messages.length === 0 || engine.bridgeActive) && (
              <GettingReady modelLabel={modelLabel} download={engine.download} queued={queued} isReturning={engine.isReturning} />
            )}
            {engine.phase === 'error' && (
              <LoadError message={engine.error ?? 'Something went wrong.'} current={engine.pick?.key} onRetry={engine.start} />
            )}

            {engine.bridgeActive && (
              <p className="mx-auto mt-3 max-w-xl px-4 text-center text-sm text-muted-foreground" data-testid="bridge-note">
                Chrome&apos;s built-in model will answer until {modelLabel} is ready.
              </p>
            )}

            {engine.phase === 'ready' || messages.length > 0 ? (
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
            ) : (
              <div className="flex-1" />
            )}

            {hasAnswer && (
              <AfterAnswer
                tps={engine.lastTps}
                isSmall={engine.pick?.key === 'small'}
                onUseSmall={() => engine.start('small')}
              />
            )}

            {error && (
              <p role="alert" className="mx-auto max-w-4xl px-4 pt-2 text-sm text-destructive">
                {error.message}
              </p>
            )}

            <div className="shrink-0">
              <ChatInputBar
                onSend={handleSend}
                onClear={handleClear}
                onInterrupt={stop}
                disabled={!canType || isGenerating}
                isGenerating={isGenerating}
                hasMessages={messages.length > 0}
                modelLabel={modelLabel}
                placeholder={
                  engine.phase === 'error' ? 'Pick a model above to continue'
                    : engine.bridgeActive ? 'Ask anything, Chrome answers for now...'
                    : queued ? 'Your question is queued...'
                    : engine.phase === 'loading' ? 'Type your first question...'
                    : undefined
                }
              />
            </div>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}
