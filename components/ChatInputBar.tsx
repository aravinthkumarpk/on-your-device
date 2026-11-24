'use client';

import { useCallback } from 'react';
import {
    PromptInput,
    PromptInputTextarea,
    PromptInputFooter,
    PromptInputSubmit,
    PromptInputTools,
    PromptInputButton,
    type PromptInputMessage,
} from '@root/components/ai-elements/prompt-input';
import { TrashIcon, StopCircleIcon, SendIcon } from 'lucide-react';
import { cn } from '@root/lib/utils';

export interface ChatInputBarProps {
    onSend: (content: string) => void;
    onClear: () => void;
    onInterrupt: () => void;
    disabled: boolean;
    isGenerating: boolean;
    hasMessages: boolean;
    modelLabel?: string;
}

export function ChatInputBar({
    onSend,
    onClear,
    onInterrupt,
    disabled,
    isGenerating,
    hasMessages,
    modelLabel = 'The model',
}: ChatInputBarProps) {
    const handleSubmit = useCallback(
        (message: PromptInputMessage) => {
            if (message.text.trim()) {
                onSend(message.text.trim());
            }
        },
        [onSend]
    );


    return (
        <div className="w-full bg-transparent p-4 pt-2">
            <div className="mx-auto max-w-4xl">
                <PromptInput
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm p-2 shadow-sm transition-all focus-within:border-primary/50 focus-within:bg-background/70 focus-within:shadow-md"
                >
                    <PromptInputTextarea
                        placeholder={disabled ? "Waiting for model to load..." : `Message ${modelLabel}...`}
                        disabled={disabled && !isGenerating}
                        className={cn(
                            "min-h-[60px] resize-none bg-transparent px-4 py-3",
                            disabled && "opacity-50"
                        )}
                    />
                    <PromptInputFooter>
                        <PromptInputTools>
                            {hasMessages && (
                                <PromptInputButton
                                    onClick={onClear}
                                    disabled={isGenerating}
                                    className="text-muted-foreground hover:text-foreground"
                                    title="Clear conversation"
                                >
                                    <TrashIcon className="size-4" />
                                </PromptInputButton>
                            )}
                        </PromptInputTools>
                        <PromptInputTools>
                            {isGenerating ? (
                                <PromptInputButton
                                    onClick={onInterrupt}
                                    className="text-destructive hover:text-destructive"
                                    title="Stop generating"
                                >
                                    <StopCircleIcon className="size-5" />
                                </PromptInputButton>
                            ) : (
                                <PromptInputSubmit
                                    disabled={disabled}
                                    className={cn(
                                        "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
                                        disabled && "opacity-50"
                                    )}
                                >
                                    <SendIcon className="size-4" />
                                </PromptInputSubmit>
                            )}
                        </PromptInputTools>
                    </PromptInputFooter>
                </PromptInput>

                <p className="mt-2 text-center text-xs text-muted-foreground">
                    {modelLabel} running locally in your browser with WebGPU
                </p>
            </div>
        </div>
    );
}
