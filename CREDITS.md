# Credits

OnYourDevice stands on other people's work. This file lists it, with licenses.
A test (`tests/unit/credits.test.ts`) fails the build if the app uses a model
that is not listed in the Models table below.

## Original implementation

| Project | Author | License | What we use |
|---|---|---|---|
| [qwen-web](https://github.com/sdan/qwen-web) | [sdan](https://github.com/sdan) | MIT | The app started as a fork of this. Its copyright line stays in [LICENSE.md](LICENSE.md). |

## Models

The app downloads these from Hugging Face at runtime. They are not stored in this repo.

| Model id | Made by | Converted by | License |
|---|---|---|---|
| `onnx-community/Qwen3.5-0.8B-ONNX-OPT` | [Qwen team, Alibaba Cloud](https://huggingface.co/Qwen/Qwen3.5-0.8B) | [ONNX Community](https://huggingface.co/onnx-community) | Apache 2.0 |
| `onnx-community/Qwen3.5-2B-ONNX-OPT` | [Qwen team, Alibaba Cloud](https://huggingface.co/Qwen/Qwen3.5-2B) | [ONNX Community](https://huggingface.co/onnx-community) | Apache 2.0 |
| `onnx-community/Qwen3.5-4B-ONNX-OPT` | [Qwen team, Alibaba Cloud](https://huggingface.co/Qwen/Qwen3.5-4B) | [ONNX Community](https://huggingface.co/onnx-community) | Apache 2.0 |

## Libraries

| Library | Author | License | What it does here |
|---|---|---|---|
| [Transformers.js](https://github.com/huggingface/transformers.js) | [Xenova](https://github.com/xenova) and Hugging Face | Apache 2.0 | Runs the models in the browser |
| [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) | Microsoft | MIT | The WebGPU and WASM engine under Transformers.js |
| [AI SDK](https://github.com/vercel/ai) | Vercel | Apache 2.0 | Chat state (`useChat`) and message streaming |
| [AI Elements](https://github.com/vercel/ai-elements) | Vercel | Apache 2.0 | Chat UI components in `components/ai-elements` |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | shadcn | MIT | Base UI components in `components/ui` |
| [Radix UI](https://github.com/radix-ui/primitives) | WorkOS | MIT | Accessible UI primitives |
| [Next.js](https://github.com/vercel/next.js) | Vercel | MIT | App framework and static export |
| [Lucide](https://github.com/lucide-icons/lucide) | Lucide contributors | ISC | Icons |
| [Motion](https://github.com/motiondivision/motion) | Matt Perry | MIT | Animation |
| [Streamdown](https://github.com/vercel/streamdown) | Vercel | Apache 2.0 | Streaming Markdown rendering |
| [Outfit font](https://fonts.google.com/specimen/Outfit) | Rodrigo Fuenzalida | OFL 1.1 | Typeface, bundled at build time |

## Code patterns

- Loading Qwen3.5 on WebGPU in `public/worker.js` follows the official [Qwen3.5 WebGPU demo](https://huggingface.co/spaces/webml-community/Qwen3.5-WebGPU) by the WebML Community.

## Communities

- [ONNX Community](https://huggingface.co/onnx-community) for the browser-ready model conversions.
- [WebML Community](https://huggingface.co/webml-community) for WebGPU demos and examples.
