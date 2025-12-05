'use client';

import { useCallback } from 'react';
import {
    Conversation,
    ConversationContent,
    ConversationEmptyState,
    ConversationScrollButton,
} from '@root/components/ai-elements/conversation';
import {
    Message,
    MessageContent,
    MessageResponse,
    MessageActions,
    MessageAction,
    MessageToolbar,
} from '@root/components/ai-elements/message';
import {
    Reasoning,
    ReasoningContent,
    ReasoningTrigger,
} from '@root/components/ai-elements/reasoning';
import { Loader } from '@root/components/ai-elements/loader';
import { Suggestion, Suggestions } from '@root/components/ai-elements/suggestion';
import { CopyIcon, ThumbsUpIcon, StopCircleIcon, SparklesIcon, Zap } from 'lucide-react';
import { type Message as ChatMessage } from '@root/app/hooks/useWorker';
import { cn } from '@root/lib/utils';

export interface ChatContainerProps {
    messages: ChatMessage[];
    isGenerating: boolean;
    currentResponse: string;
    thought: string;
    tps: number | null;
    onSend: (content: string) => void;
    onInterrupt: () => void;
}

const SUGGESTIONS = [
    "Explain quantum computing simply",
    "Write a haiku about coding",
    "What are the benefits of WebGPU?",
    "Help me write a function",
];

// Parse message content to separate thinking from response
interface ParsedContent {
    thinking: string;
    response: string;
}

function parseMessageContent(content: string): ParsedContent {
    // First, check if content has explicit <think>...</think> tags
    const thinkMatch = content.match(/<think>([\s\S]*?)<\/think>/i);

    if (thinkMatch) {
        const thinking = thinkMatch[1].trim();
        const response = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
        return { thinking, response };
    }

    // If no explicit tags, check for "assistant" pattern that indicates thinking
    // Pattern: "question user message assistant thinking... actual response"
    const assistantPattern = /^(.*?)\s*assistant\s+([\s\S]*?)(?=\n[A-Z]|\n\*\*|$)/i;
    const match = content.match(assistantPattern);

    if (match && match[2]) {
        // Find where the actual response starts (usually after a clear break like headers or bullet points)
        const thinkingAndResponse = match[2];

        // Look for common response indicators
        const responseIndicators = [
            /\n\*\*[^*]+\*\*/,  // Markdown headers like **Title**
            /\n#{1,3}\s/,       // Markdown headings
            /\n(?:Here|Let me|I'll|To|The|A|In)\s/i,  // Common response starters
        ];

        let splitIndex = -1;
        for (const indicator of responseIndicators) {
            const indicatorMatch = thinkingAndResponse.match(indicator);
            if (indicatorMatch && indicatorMatch.index !== undefined) {
                if (splitIndex === -1 || indicatorMatch.index < splitIndex) {
                    splitIndex = indicatorMatch.index;
                }
            }
        }

        if (splitIndex > 50) { // Only split if thinking is substantial
            return {
                thinking: thinkingAndResponse.substring(0, splitIndex).trim(),
                response: thinkingAndResponse.substring(splitIndex).trim()
            };
        }
    }

    // No thinking detected, return content as response
    return { thinking: '', response: content };
}

// Clean tags from text
function cleanTags(text: string): string {
    return text
        .replace(/<think>/gi, '')
        .replace(/<\/think>/gi, '')
        .trim();
}

export function ChatContainer({
    messages,
    isGenerating,
    currentResponse,
    thought,
    tps,
    onSend,
    onInterrupt,
}: ChatContainerProps) {
    const handleCopy = useCallback((text: string) => {
        navigator.clipboard.writeText(text);
    }, []);

    const isEmpty = messages.length === 0 && !isGenerating;

    // Clean the streaming thought content
    const cleanedThought = thought ? cleanTags(thought) : '';

    return (
        <Conversation className="flex-1">
            <ConversationContent className="mx-auto max-w-3xl px-4 pb-4">
                {isEmpty ? (
                    <ConversationEmptyState
                        title="Start a conversation"
                        description="Ask me anything! I'm Qwen3-0.6B running locally in your browser."
                        icon={<SparklesIcon className="size-8" />}
                    >
                        <div className="mt-6 w-full max-w-xl">
                            <Suggestions className="justify-center flex-wrap">
                                {SUGGESTIONS.map((suggestion) => (
                                    <Suggestion
                                        key={suggestion}
                                        suggestion={suggestion}
                                        onClick={onSend}
                                        className="text-xs"
                                    />
                                ))}
                            </Suggestions>
                        </div>
                    </ConversationEmptyState>
                ) : (
                    <div className="space-y-6">
                        {/* Render all messages */}
                        {messages.map((message, index) => {
                            const isAssistant = message.role === 'assistant';
                            const parsed = isAssistant
                                ? parseMessageContent(message.content)
                                : { thinking: '', response: message.content };

                            return (
                                <Message key={index} from={message.role}>
                                    <MessageContent
                                        className={cn(
                                            message.role === 'user' && 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm'
                                        )}
                                    >
                                        {/* Show thinking in collapsible for assistant messages */}
                                        {isAssistant && parsed.thinking && (
                                            <Reasoning isStreaming={false} defaultOpen={false}>
                                                <ReasoningTrigger />
                                                <ReasoningContent>{cleanTags(parsed.thinking)}</ReasoningContent>
                                            </Reasoning>
                                        )}
                                        <MessageResponse>{cleanTags(parsed.response)}</MessageResponse>
                                    </MessageContent>
                                    {isAssistant && (
                                        <MessageToolbar>
                                            <MessageActions>
                                                <MessageAction
                                                    tooltip="Copy"
                                                    onClick={() => handleCopy(parsed.response)}
                                                >
                                                    <CopyIcon className="size-4" />
                                                </MessageAction>
                                                <MessageAction tooltip="Like">
                                                    <ThumbsUpIcon className="size-4" />
                                                </MessageAction>
                                            </MessageActions>
                                        </MessageToolbar>
                                    )}
                                </Message>
                            );
                        })}

                        {/* Show streaming response */}
                        {isGenerating && (
                            <Message from="assistant">
                                <MessageContent>
                                    {/* Show thinking/reasoning if present */}
                                    {cleanedThought && (
                                        <Reasoning isStreaming={isGenerating}>
                                            <ReasoningTrigger />
                                            <ReasoningContent>{cleanedThought}</ReasoningContent>
                                        </Reasoning>
                                    )}

                                    {/* Show current response or loader */}
                                    {currentResponse ? (
                                        <MessageResponse>{currentResponse}</MessageResponse>
                                    ) : !cleanedThought && (
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Loader size={16} />
                                            <span className="text-sm">Generating...</span>
                                        </div>
                                    )}

                                    {/* Show TPS indicator */}
                                    {tps !== null && tps > 0 && (
                                        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                                            <Zap className="size-3" />
                                            <span>{tps.toFixed(1)} tokens/sec</span>
                                        </div>
                                    )}
                                </MessageContent>

                                <MessageToolbar>
                                    <MessageActions>
                                        <MessageAction
                                            tooltip="Stop generating"
                                            onClick={onInterrupt}
                                            variant="outline"
                                            className="text-destructive hover:text-destructive"
                                        >
                                            <StopCircleIcon className="size-4" />
                                            <span className="ml-1 text-xs">Stop</span>
                                        </MessageAction>
                                    </MessageActions>
                                </MessageToolbar>
                            </Message>
                        )}
                    </div>
                )}
            </ConversationContent>
            <ConversationScrollButton />
        </Conversation>
    );
}

