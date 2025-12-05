// Application configuration
// Centralized config values to avoid hardcoding throughout the codebase

export const config = {
    // Model settings
    model: {
        id: 'onnx-community/Qwen3-0.6B-ONNX',
        dtype: 'q4f16' as const,
        maxNewTokens: 2048,
        contextWindowSize: 10, // Number of messages to include in context
    },

    // CDN for transformers.js (used by worker)
    transformersCDN: 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.0',

    // Server settings
    server: {
        port: parseInt(process.env.PORT || '10000', 10),
    },

    // Feature flags
    features: {
        debugLogging: process.env.NODE_ENV === 'development',
    },
} as const;

export type Config = typeof config;
