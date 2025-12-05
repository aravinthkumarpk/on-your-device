import { Message } from '../app/hooks/useWorker';
import styles from './ChatMessages.module.scss';

interface ChatMessagesProps {
    messages: Message[];
    isGenerating: boolean;
    currentResponse: string;
    thought: string;
    tps: number | null;
}

/**
 * Displays the chat message history and current streaming response
 */
export function ChatMessages({
    messages,
    isGenerating,
    currentResponse,
    thought,
    tps
}: ChatMessagesProps) {
    return (
        <div className={styles.container} role="log" aria-live="polite">
            {/* Empty state */}
            {messages.length === 0 && !currentResponse && (
                <div className={styles.empty}>
                    Start a conversation by typing a message below
                </div>
            )}

            {/* Message history */}
            {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={`${styles.message} ${styles[msg.role]}`}
                    role="article"
                    aria-label={`${msg.role === 'user' ? 'You' : 'Assistant'} said`}
                >
                    <div className={styles.role}>
                        {msg.role === 'user' ? 'You' : 'Assistant'}
                    </div>
                    <div className={styles.content}>{msg.content}</div>
                </div>
            ))}

            {/* Streaming response */}
            {isGenerating && currentResponse && (
                <div className={`${styles.message} ${styles.assistant} ${styles.streaming}`}>
                    <div className={styles.role}>Assistant</div>

                    {/* Thinking indicator */}
                    {thought && (
                        <div className={styles.thought} aria-label="Model is thinking">
                            💭 Thinking: {thought}
                        </div>
                    )}

                    <div className={styles.content}>
                        {currentResponse}
                        <span className={styles.cursor} aria-hidden="true">▊</span>
                    </div>

                    {/* Tokens per second indicator */}
                    {tps && (
                        <div className={styles.tps}>
                            {tps.toFixed(1)} tokens/sec
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
