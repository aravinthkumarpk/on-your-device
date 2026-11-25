'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai';
import { Gauge, Loader2, Rocket, X } from 'lucide-react';
import { LocalEnginePanel } from '@components/LocalEnginePanel';
import { useEngine } from './hooks/useEngine';
import { toChatTurns, toDisplayTurns, type ChatTurn } from '@root/lib/engine';
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
  const chatsRef = useRef<ChatTurn[]>([]);
  const engine = useEngine(() => chatsRef.current);
  const { messages, sendMessage, status, stop, setMessages, error, addToolApprovalResponse } = useChat({
    transport: engine.transport,
    // After the user allows or denies a tool, the agent carries on by itself.
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses,
  });
  chatsRef.current = toChatTurns(messages, Infinity);
  const [queued, setQueued] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);

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
    if (engine.local || engine.phase === 'ready' || engine.bridgeActive) sendMessage({ text: content });
    else if (engine.phase === 'loading') setQueued(content);
  }, [engine.local, engine.phase, engine.bridgeActive, sendMessage]);

  const handleClear = useCallback(() => {
    stop();
    setMessages([]);
  }, [stop, setMessages]);

  const modelLabel = engine.local?.label ?? engine.pick?.model.label;
  const logMeta = {
    model: engine.pick ? `${engine.pick.model.id} (${engine.pick.dtype})` : undefined,
    browser: typeof navigator === 'undefined' ? undefined : navigator.userAgent,
    online: typeof navigator === 'undefined' ? undefined : navigator.onLine,
  };
  const canType = !!engine.local || engine.phase === 'ready' || engine.bridgeActive || (engine.phase === 'loading' && !queued);
  const canUpgrade = !engine.device?.isMobile && (engine.phase === 'ready' || engine.phase === 'loading');
  const answers = messages.filter((m) => m.role === 'assistant').length;
  const showNudge = canUpgrade && !engine.local && answers >= 3 && !nudgeDismissed && !isGenerating;
  const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');
  const nudge = (
    <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="upgrade-nudge">
      <Rocket className="size-4 shrink-0" aria-hidden />
      <span className="flex-1">Want a bigger brain? Connect Ollama in 3 steps.</span>
      <button type="button" onClick={() => setPanelOpen(true)} className="font-medium text-foreground underline underline-offset-4">Show me</button>
      <button type="button" onClick={() => setNudgeDismissed(true)} aria-label="Dismiss suggestion" className="rounded p-0.5 hover:text-foreground">
        <X className="size-4" />
      </button>
    </div>
  );
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
                <span className="flex items-center gap-1 rounded-full border border-border/60 px-3 py-1 text-sm text-muted-foreground" data-testid="model-chip">
                  {modelLabel}
                  {engine.local ? ' (Ollama)' : engine.phase === 'loading' ? ' (loading)' : ''}
                  {engine.local && (
                    <button type="button" onClick={() => engine.connectLocal(null)} aria-label="Stop using Ollama" className="-mr-1 rounded-full p-0.5 hover:text-foreground">
                      <X className="size-3.5" />
                    </button>
                  )}
                </span>
              )}
              {canUpgrade && !engine.local && (
                <button
                  type="button"
                  onClick={() => setPanelOpen(true)}
                  className="hidden items-center gap-1 rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex"
                >
                  <Rocket className="size-4" aria-hidden /> Bigger model
                </button>
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

        <LocalEnginePanel
          open={panelOpen}
          onOpenChange={setPanelOpen}
          onConnect={(model) => {
            engine.connectLocal(model);
            setPanelOpen(false);
          }}
        />

        {engine.localNeedsReconnect && !engine.local && (
          <div className="mx-auto mt-3 flex w-full max-w-4xl items-center gap-2 px-4 text-sm" data-testid="reconnect-banner">
            <span className="text-muted-foreground">Welcome back. Ollama needs one paste to reconnect.</span>
            <button type="button" onClick={() => setPanelOpen(true)} className="font-medium underline underline-offset-4">Reconnect</button>
          </div>
        )}

        {engine.phase === 'unsupported' && <Unsupported />}

        {engine.phase === 'welcome' && engine.suggested && (
          <Welcome suggested={engine.suggested} onStart={engine.start} />
        )}

        {(engine.phase === 'loading' || engine.phase === 'ready' || engine.phase === 'error') && (
          <>
            {engine.phase === 'loading' && engine.download && modelLabel && (messages.length === 0 || engine.bridgeActive) && (
              <GettingReady modelLabel={modelLabel} download={engine.download} queued={queued} isReturning={engine.isReturning} log={engine.log} logMeta={logMeta} />
            )}
            {engine.phase === 'error' && (
              <LoadError message={engine.error ?? 'Something went wrong.'} current={engine.pick?.key} onRetry={engine.start} kind={engine.errorKind} log={engine.log} logMeta={logMeta} />
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
                onToolApproval={(id, approved) => addToolApprovalResponse({ id, approved })}
              />
            ) : (
              <div className="flex-1" />
            )}

            {hasAnswer && (
              <AfterAnswer
                tps={engine.lastTps}
                isSmall={engine.pick?.key === 'small'}
                onUseSmall={() => engine.start('small')}
                nudge={showNudge ? nudge : null}
              />
            )}

            {showNudge && !hasAnswer && <div className="mx-auto w-full max-w-4xl px-4">{nudge}</div>}

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
