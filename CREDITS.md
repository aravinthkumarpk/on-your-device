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

## Local engine (optional)

People who connect [Ollama](https://github.com/ollama/ollama) (MIT) can run bigger models on their own computer. The app suggests one per Mac memory size. Ollama downloads them from its own library, or from Hugging Face for `hf.co/` tags.

| Ollama tag | Made by | License |
|---|---|---|
| `qwen3.5:4b`, `qwen3.5:9b` | Qwen team, Alibaba Cloud | Apache 2.0 |
| `gemma4:26b` | Google DeepMind | Apache 2.0 |
| `inkling-2-mini` | Thinking Machines | Apache 2.0, plus an acceptable use policy |
| `qwen3.8:27b` | Qwen team, Alibaba Cloud | Apache 2.0 |
| [`hf.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF:Q2_0`](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | PrismML, based on Qwen3.8 27B by the Qwen team | Apache 2.0 |

## Browser-provided model

In Chrome on desktop, if Google's Gemini Nano is already downloaded, the app can use it through Chrome's [Prompt API](https://developer.chrome.com/docs/ai/prompt-api) while the main model downloads. Replies from it are labelled. The app never starts its download. It is subject to [Google's Generative AI Prohibited Uses Policy](https://policies.google.com/terms/generative-ai/use-policy).

## Libraries

| Library | Author | License | What it does here |
|---|---|---|---|
| [Transformers.js](https://github.com/huggingface/transformers.js) | [Xenova](https://github.com/xenova) and Hugging Face | Apache 2.0 | Runs the models in the browser |
| [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) | Microsoft | MIT | The WebGPU and WASM engine under Transformers.js |
| [AI SDK](https://github.com/vercel/ai) | Vercel | Apache 2.0 | Chat state (`useChat`), message streaming, and the local agent (`ToolLoopAgent`) |
| [AI SDK OpenAI-compatible provider](https://github.com/vercel/ai/tree/main/packages/openai-compatible) | Vercel | Apache 2.0 | Talks to Ollama's OpenAI-style API for tool calls |
| [Zod](https://github.com/colinhacks/zod) | Colin McDonnell | MIT | Schema validation inside the provider |
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

## Design guidance

- The onboarding screens were reviewed against [Emil Kowalski's design engineering skills](https://github.com/emilkowalski/skills) (MIT): easing, durations, press states, and the Break UI worst-case pass.

## Communities

- [ONNX Community](https://huggingface.co/onnx-community) for the browser-ready model conversions.
- [WebML Community](https://huggingface.co/webml-community) for WebGPU demos and examples.
