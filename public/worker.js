// Runs the browser model in a Web Worker so the page stays responsive.
// Transformers.js loads from a pinned CDN build because workers can't use the
// page bundle. Keep this version in step with package.json.
import {
  AutoProcessor,
  Qwen3_5ForConditionalGeneration,
  TextStreamer,
  InterruptableStoppingCriteria,
} from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2";

const DEBUG = false;
const log = (...args) => DEBUG && console.log("[Worker]", ...args);

// Loading follows the official Qwen3.5 WebGPU demo by webml-community.
// The decoder uses q4f16 when the GPU has shader-f16, else q4.
let processor = null;
let model = null;
let loadedKey = null;

async function loadModel({ id, dtype }) {
  const key = `${id}:${dtype}`;
  if (model && loadedKey === key) return;
  if (model) {
    await model.dispose?.();
    model = null;
  }
  processor = await AutoProcessor.from_pretrained(id, { progress_callback: handleProgress });
  model = await Qwen3_5ForConditionalGeneration.from_pretrained(id, {
    dtype: {
      embed_tokens: dtype,
      decoder_model_merged: dtype,
      vision_encoder: dtype === "q4f16" ? "q4f16" : "fp16",
    },
    device: "webgpu",
    progress_callback: handleProgress,
  });
  loadedKey = key;
}

// Qwen3.5 ChatML. Thinking is off: the assistant turn starts with an empty
// think block, which is how the model card disables it.
function buildPrompt(turns) {
  let prompt = "";
  for (const { role, content } of turns) {
    prompt += `<|im_start|>${role}\n${content}<|im_end|>\n`;
  }
  return prompt + "<|im_start|>assistant\n<think>\n\n</think>\n\n";
}

function splitThinking(raw) {
  const start = raw.indexOf("<think>");
  const end = raw.indexOf("</think>");
  if (start === -1) return { thought: "", answer: raw };
  if (end > start) return { thought: raw.slice(start + 7, end).trim(), answer: raw.slice(end + 8) };
  return { thought: raw.slice(start + 7), answer: raw.slice(0, start) };
}

const stopping_criteria = new InterruptableStoppingCriteria();

async function generate(id, turns) {
  if (!model) {
    self.postMessage({ status: "error", id, data: "The model is not loaded yet." });
    return;
  }
  stopping_criteria.reset();
  const inputs = await processor(buildPrompt(turns));

  let raw = "";
  let startTime;
  let numTokens = 0;
  let tps;

  const streamer = new TextStreamer(processor.tokenizer, {
    skip_prompt: true,
    skip_special_tokens: true,
    token_callback_function: () => {
      startTime ??= performance.now();
      if (numTokens++ > 0) tps = (numTokens / (performance.now() - startTime)) * 1000;
    },
    callback_function: (text) => {
      raw += text;
      const { thought, answer } = splitThinking(raw);
      self.postMessage({ status: "update", id, output: answer, thought, tps });
    },
  });

  self.postMessage({ status: "start", id });
  try {
    await model.generate({
      ...inputs,
      do_sample: false,
      max_new_tokens: 1024,
      streamer,
      stopping_criteria,
    });
    self.postMessage({ status: "complete", id, output: splitThinking(raw).answer });
  } catch (error) {
    self.postMessage({ status: "error", id, data: friendlyError(error) });
  }
}

function friendlyError(error) {
  const message = error?.message || String(error);
  if (/memory|OOM|allocation/i.test(message)) {
    return "Your device ran out of GPU memory. Close other tabs or pick the smaller model.";
  }
  if (/WebGPU|adapter|device/i.test(message)) {
    return "WebGPU stopped working. Refresh the page, or update your browser and GPU drivers.";
  }
  return message;
}

function handleProgress(event) {
  if (event.status === "initiate") {
    self.postMessage({ status: "initiate", file: event.file, progress: 0 });
  } else if (event.status === "progress" && event.total) {
    self.postMessage({
      status: "progress",
      file: event.file,
      progress: Math.round((event.loaded / event.total) * 100),
      loaded: event.loaded,
      total: event.total,
    });
  } else if (event.status === "done") {
    self.postMessage({ status: "done", file: event.file });
  }
}

async function load(modelConfig) {
  self.postMessage({ status: "loading", data: "Checking WebGPU..." });
  try {
    const adapter = await navigator.gpu?.requestAdapter();
    if (!adapter) throw new Error("WebGPU is not available in this browser.");
    self.postMessage({ status: "loading", data: "Downloading the model..." });
    await loadModel(modelConfig);
    self.postMessage({ status: "loading", data: "Warming up..." });
    const warm = await processor("a");
    await model.generate({ ...warm, max_new_tokens: 1 });
    self.postMessage({ status: "ready" });
  } catch (error) {
    log("load failed", error);
    self.postMessage({ status: "error", data: friendlyError(error) });
  }
}

self.addEventListener("message", (e) => {
  const { type, id, data, model: modelConfig } = e.data;
  if (type === "load") load(modelConfig);
  if (type === "generate") generate(id, data);
  if (type === "interrupt") stopping_criteria.interrupt();
});
