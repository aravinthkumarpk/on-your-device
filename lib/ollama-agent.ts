import { DirectChatTransport, type ChatTransport, type UIMessage } from 'ai';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { createLocalAgent } from '@root/lib/agent';
import { OLLAMA_URL, type Sampling } from '@root/lib/ollama';
import type { ChatTurn } from '@root/lib/engine';

/** Fetch that flags Ollama calls as loopback for Chrome's local network prompt. */
const loopbackFetch: typeof fetch = (input, init) =>
    fetch(input, { ...init, targetAddressSpace: 'loopback' } as RequestInit);

/** useChat transport that runs the local agent against Ollama's OpenAI-style API. */
export function ollamaAgentTransport(tag: string, getChats: () => ChatTurn[], base = OLLAMA_URL, sampling?: Sampling): ChatTransport<UIMessage> {
    const ollama = createOpenAICompatible({ name: 'ollama', baseURL: `${base}/v1`, fetch: loopbackFetch });
    // The OpenAI-style API takes the standard settings only; top_k and min_p go through /api/chat.
    const agent = createLocalAgent(ollama.chatModel(tag), getChats, {
        settings: sampling && { temperature: sampling.temperature, topP: sampling.top_p, presencePenalty: sampling.presence_penalty },
    });
    const transport = new DirectChatTransport({
        agent,
        messageMetadata: ({ part }) => (part.type === 'start' ? { engine: 'ollama' } : undefined),
    });
    // The page's chat is untyped (plain UIMessage); the agent's tool parts are a subset of that.
    return transport as unknown as ChatTransport<UIMessage>;
}
