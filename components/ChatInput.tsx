'use client';

import { FormEvent, useState, KeyboardEvent } from 'react';
import styles from './ChatInput.module.scss';

interface ChatInputProps {
    onSend: (message: string) => void;
    onClear: () => void;
    onInterrupt: () => void;
    disabled: boolean;
    isGenerating: boolean;
    hasMessages: boolean;
}

/**
 * Chat input form with send, clear, and interrupt controls
 */
export function ChatInput({
    onSend,
    onClear,
    onInterrupt,
    disabled,
    isGenerating,
    hasMessages
}: ChatInputProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || disabled) return;
        onSend(input.trim());
        setInput('');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // Submit on Enter (without Shift)
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!input.trim() || disabled) return;
            onSend(input.trim());
            setInput('');
        }
    };

    return (
        <div className={styles.container}>
            {/* Control buttons */}
            <div className={styles.controls}>
                <button
                    onClick={onClear}
                    disabled={!hasMessages || isGenerating}
                    className={styles.clearButton}
                    aria-label="Clear conversation"
                >
                    Clear
                </button>
                {isGenerating && (
                    <button
                        onClick={onInterrupt}
                        className={styles.stopButton}
                        aria-label="Stop generating"
                    >
                        Stop
                    </button>
                )}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={disabled ? 'Loading model...' : 'Type your message...'}
                    disabled={disabled}
                    className={styles.input}
                    aria-label="Chat message input"
                    aria-describedby="input-hint"
                />
                <span id="input-hint" className={styles.srOnly}>
                    Press Enter to send your message
                </span>
                <button
                    type="submit"
                    disabled={disabled || !input.trim()}
                    className={styles.sendButton}
                    aria-label="Send message"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
