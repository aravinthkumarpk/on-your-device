# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Qwen-Web is a WebGPU-powered browser application that runs the Qwen3-0.6B language model entirely client-side. The architecture is designed around three key principles:

1. **Zero-server inference**: All ML operations happen in the browser using WebGPU
2. **Responsive UI**: Web Worker isolates heavy computation from the main thread
3. **Progressive loading**: Model downloads with real-time progress feedback

## Development Commands

```bash
# Development server (runs on port 10000)
npm run dev

# Production build (static export)
npm run build

# Production server
npm start

# Lint code
npm lint
```

## Architecture

### Client-Server Split (Browser-Only)

**Main Thread** (`app/page.tsx`):
- React component managing UI state and user interactions
- WebGPU compatibility checking via `navigator.gpu.requestAdapter()`
- Message passing to/from Web Worker
- Renders chat interface with streaming responses

**Worker Thread** (`public/worker.js`):
- Loads Qwen3-0.6B-ONNX model from Hugging Face (~400MB)
- Handles tokenization via `AutoTokenizer.from_pretrained()`
- Runs inference with `AutoModelForCausalLM` using WebGPU device
- Streams tokens back to main thread via `postMessage()`
- Maintains conversation state with `past_key_values_cache`

### Communication Protocol

Worker messages use a status-based protocol:

```javascript
// Worker -> Main Thread
{ status: 'loading', data: 'Loading model...' }
{ status: 'progress', file: 'model.onnx', progress: 45 }
{ status: 'ready' }
{ status: 'update', output: 'text', thought: 'reasoning', tps: 23.4 }
{ status: 'complete', output: ['full response'] }
{ status: 'error', data: 'error message' }

// Main Thread -> Worker
{ type: 'check' }  // Check WebGPU support
{ type: 'load' }   // Load model
{ type: 'generate', data: messages }  // Generate response
{ type: 'interrupt' }  // Stop generation
{ type: 'reset' }  // Clear cache
```

### TypeScript Path Aliases

The project uses path aliases configured in `tsconfig.json`:

- `@root/*` → `./`
- `@common/*` → `./common/`
- `@components/*` → `./components/`
- `@pages/*` → `./pages/`
- `@modules/*` → `./modules/`

Always use these aliases instead of relative imports for consistency.

## Key Technical Details

### Next.js Configuration

The project uses **static export mode** (`output: 'export'`), meaning:
- No server-side rendering
- All pages are pre-rendered at build time
- Output goes to `out/` directory
- Can be served from any static host

**Webpack aliases disable**:
- `sharp` - not needed for static export
- `onnxruntime-node` - only `onnxruntime-web` is used

### WebGPU Requirements

The application requires:
- Browser: Chrome/Edge 113+ or Safari Technology Preview
- GPU: Integrated or dedicated (dedicated performs better)
- RAM: Minimum 4GB, recommended 8GB+

**Critical**: Always check WebGPU availability before attempting to load the worker. The pattern is:

```typescript
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  // Show error, don't initialize worker
}
```

### Model Loading Strategy

The worker uses singleton pattern for model/tokenizer:

```javascript
this.tokenizer ??= await AutoTokenizer.from_pretrained(...)
this.model ??= await AutoModelForCausalLM.from_pretrained(...)
```

This ensures the model is only loaded once and reused across multiple generations.

**Model specs**:
- ID: `onnx-community/Qwen3-0.6B-ONNX`
- Quantization: `q4f16` (4-bit weights, float16 activations)
- Size: ~400MB download
- Device: `webgpu`

### Streaming Architecture

The worker uses `TextStreamer` with two callbacks:

1. **`token_callback_function`**: Called for each token, tracks timing for TPS calculation
2. **`callback_function`**: Called with decoded text, parses `<think>...</think>` tags for reasoning display

The streaming buffer accumulates text and distinguishes between:
- `thought`: Content inside `<think>` tags
- `answer`: Content outside thinking tags

### State Management

Main thread state:
- `messages`: Array of `{role, content}` chat history
- `currentResponse`: Real-time accumulating response text
- `thought`: Current reasoning being displayed
- `status`: `initializing | loading | ready | error`
- `isGenerating`: Boolean for generation in progress

Worker state:
- `past_key_values_cache`: KV cache for efficient subsequent generations
- `stopping_criteria`: Controls interruption of generation

## Common Modifications

### Changing the Model

To use a different ONNX model:

1. Update `model_id` in `public/worker.js`:
   ```javascript
   static model_id = "onnx-community/YOUR-MODEL-ONNX";
   ```

2. Adjust quantization if needed:
   ```javascript
   dtype: "q4f16",  // or "fp16", "q8", etc.
   ```

3. Ensure the model supports WebGPU and chat templates

### Adjusting Generation Parameters

In `public/worker.js`, modify the `generate()` function:

```javascript
const { past_key_values, sequences } = await model.generate({
  ...inputs,
  do_sample: false,        // Set true for sampling
  max_new_tokens: 2048,    // Maximum response length
  temperature: 1.0,        // Add for sampling
  top_p: 0.9,             // Add for nucleus sampling
  streamer,
  stopping_criteria,
  return_dict_in_generate: true,
});
```

### Customizing UI Behavior

Context window: The main thread sends last 10 messages to worker:
```typescript
workerRef.current.postMessage({
  type: 'generate',
  data: newMessages.slice(-10),  // Adjust this number
});
```

## Browser Testing

Since this relies on WebGPU, testing requires:

1. **Chrome/Edge with WebGPU enabled**:
   - Visit `chrome://flags`
   - Enable "Unsafe WebGPU"
   - Restart browser

2. **Check GPU availability**: Open DevTools console and run:
   ```javascript
   await navigator.gpu.requestAdapter()
   ```

3. **Monitor memory**: Use Chrome Task Manager to watch GPU memory usage during model loading

## Build Artifacts

After `npm run build`:
- Static HTML/CSS/JS in `out/` directory
- Worker file copied to `out/worker.js`
- All assets can be served from CDN or static host
- No server required for deployment

## Troubleshooting Development Issues

**Worker not loading**: The `public/worker.js` file imports `@huggingface/transformers` from CDN (`https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.0`). This is required because:
- Workers can't access the main bundle
- The transformers.js library needs to load WASM files dynamically
- CDN provides the complete bundled version with all dependencies

If you get "Worker error: {}", check that:
1. The CDN import URL is correct and accessible
2. The worker file uses `{ type: 'module' }` when instantiated
3. Browser console for detailed error messages

**WebGPU errors**: These often present as cryptic ONNX Runtime errors. Common causes:
- GPU drivers out of date
- Insufficient VRAM
- Browser WebGPU not enabled
- macOS: integrated GPU may not work, need discrete GPU

**TypeScript errors with Navigator.gpu**: The global type declaration in `app/page.tsx` extends Navigator interface. Ensure this is present when working with WebGPU APIs.

**Build warnings about lockfiles**: The project has a lockfile at root. This warning can be silenced by setting `outputFileTracingRoot` in `next.config.mjs` if needed.
