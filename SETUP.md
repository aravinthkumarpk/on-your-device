# Setup Guide for Qwen-Web

## Successfully Replicated! 🎉

This is a replication of [sdan/qwen-web](https://github.com/sdan/qwen-web) - a WebGPU-powered in-browser AI chat application.

## What's Been Created

### Core Files
- ✅ Next.js 15 with TypeScript configuration
- ✅ WebGPU-powered Web Worker for model inference
- ✅ Chat interface with streaming responses
- ✅ Progress tracking during model loading
- ✅ Full WebGPU compatibility checking

### Project Structure
```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main chat interface
├── common/
│   ├── constants.ts        # App constants
│   └── utilities.ts        # Utility functions
├── public/
│   ├── worker.js           # Web Worker for model inference
│   └── manifest.json       # PWA manifest
├── package.json            # Dependencies
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── global.scss             # Global styles
└── README.md               # Documentation
```

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open http://localhost:10000 in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## Browser Requirements

**Required:** WebGPU support
- Chrome/Edge 113+ ✅
- Safari (Technology Preview) ⚠️
- Firefox (coming soon) ⏳

**Recommended:**
- 8GB+ RAM
- Dedicated GPU (integrated works but slower)
- Fast internet for initial model download (~400MB)

## How It Works

1. **Model Loading**: On first load, downloads Qwen3-0.6B-ONNX model (~400MB) from Hugging Face
2. **WebGPU Acceleration**: Uses your GPU for fast inference
3. **Web Worker**: Runs model in background thread to keep UI responsive
4. **Streaming**: Shows responses token-by-token as they're generated
5. **Local Processing**: Everything runs in your browser - no server needed!

## Features

- 💬 Real-time streaming chat
- 🔒 100% private (no data sent to servers)
- ⚡ GPU-accelerated inference
- 💭 Shows "thinking" process
- 📊 Displays tokens/second performance
- 🎨 Clean, simple UI

## Troubleshooting

### "WebGPU not supported"
- Update your browser to the latest version
- Enable WebGPU flags in chrome://flags
- Check if your GPU drivers are up to date

### Model loading is slow
- First load downloads ~400MB (cached after)
- Check your internet connection
- Try a different network

### Low tokens/second
- Close other GPU-intensive apps
- Try a device with better GPU
- Desktop generally faster than mobile

## Development

### Tech Stack
- **Framework**: Next.js 15
- **Language**: TypeScript
- **ML**: Transformers.js + ONNX Runtime Web
- **Model**: Qwen3-0.6B-ONNX (quantized to q4f16)
- **Acceleration**: WebGPU

### Key Dependencies
```json
{
  "@huggingface/transformers": "^3.8.0",
  "onnxruntime-web": "^1.21.0-dev",
  "next": "^15.1.3",
  "react": "^19.0.0"
}
```

## Credits

- Original project: [sdan/qwen-web](https://github.com/sdan/qwen-web)
- Model: [Qwen3-0.6B-ONNX](https://huggingface.co/onnx-community/Qwen3-0.6B-ONNX)
- Framework: [Transformers.js](https://huggingface.co/docs/transformers.js)

## License

MIT License - See LICENSE.md for details
