# Qwen-Web

Run Qwen3-0.6B locally in your browser with WebGPU. Zero installation, instant AI chat.

## Features

- 🚀 **Local execution**: Runs entirely in your browser using WebGPU
- 🔒 **Privacy-first**: No data sent to servers, everything stays on your device
- ⚡ **Fast**: Hardware-accelerated inference with WebGPU
- 💬 **Chat interface**: Simple, intuitive chat UI
- 🧠 **Thinking mode**: See the model's reasoning process

## Requirements

- Modern browser with WebGPU support (Chrome 113+, Edge 113+)
- Decent GPU (integrated or dedicated)
- At least 4GB RAM

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:10000](http://localhost:10000) in your browser.

### Build for production

```bash
npm run build
```

## How it Works

This project uses:

- **Next.js 15** - React framework
- **Transformers.js** - Run ML models in the browser
- **ONNX Runtime Web** - Optimized model inference
- **WebGPU** - Hardware-accelerated computation
- **Qwen3-0.6B-ONNX** - Small but capable language model

The model is loaded directly in the browser via a Web Worker, keeping the main thread responsive. All inference happens locally on your device.

## Browser Support

WebGPU is required and currently supported in:

- Chrome/Edge 113+ (Windows, macOS, Linux)
- Chrome/Edge 121+ (ChromeOS, Android)

Safari support is in development.

## License

MIT

## Credits

Based on [qwen-web](https://github.com/sdan/qwen-web) by sdan.
