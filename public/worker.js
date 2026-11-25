// Runs the browser model in a Web Worker so the page stays responsive.
// Transformers.js loads from a pinned CDN build because workers can't use the
// page bundle. Keep this version in step with package.json.
import {
  AutoProcessor,
  Qwen3_5ForConditionalGeneration,
  TextStreamer,
  InterruptableStoppingCriteria,
  env,
} from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2";
import { createResumableFetch, classify } from "./resumable-fetch.js";

// Download log. Entries go to the page only, which keeps them on this device
// and shows them under "Details" with a Copy button.
function log(entry) {
  self.postMessage({ status: "log", entry: { t: Date.now(), ...entry } });
}

// Model files come through a fetch that retries and resumes midway.
env.fetch = createResumableFetch(fetch, log);

self.addEventListener("online", () => log({ level: "info", event: "online", message: "Network came back." }));
self.addEventListener("offline", () => log({ level: "warn", event: "offline", message: "The browser says it went offline." }));

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

const SAMPLING = { do_sample: true, temperature: 0.7, top_p: 0.8, top_k: 20, repetition_penalty: 1.1 };

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
      // Greedy decoding makes small models loop (the same line five times).
      // These are the Qwen team's settings for chat with thinking off, plus a
      // light repetition penalty as transformers.js has no presence penalty.
      ...SAMPLING,
      max_new_tokens: 1024,
      streamer,
      stopping_criteria,
    });
    self.postMessage({ status: "complete", id, output: splitThinking(raw).answer });
  } catch (error) {
    self.postMessage({ status: "error", id, data: friendlyError(error) });
  }
}

function errorKind(error) {
  const message = error?.message || String(error);
  if (/memory|OOM|allocation/i.test(message)) return "memory";
  if (/WebGPU|adapter/i.test(message)) return "gpu";
  return classify(error);
}

function friendlyError(error) {
  const message = error?.message || String(error);
  if (/memory|OOM|allocation/i.test(message)) {
    return "Your device ran out of GPU memory. Close other tabs or pick the smaller model.";
  }
  const kind = classify(error);
  if (kind === "storage") {
    return "Your browser ran out of space for the model. Free up disk space, or pick the smaller model.";
  }
  if (kind === "network" || kind === "stall") {
    return "The download kept dropping, even after several retries. A VPN, firewall or patchy Wi-Fi can do this. Try again: files that already finished are kept.";
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

async function storageNote() {
  try {
    const { usage = 0, quota = 0 } = (await navigator.storage?.estimate?.()) ?? {};
    return { usedGB: +(usage / 1e9).toFixed(2), quotaGB: +(quota / 1e9).toFixed(2) };
  } catch {
    return {};
  }
}

// When requests fail before any data, tell "can't reach the server at all"
// apart from "reached something that answered, but not with the file".
// A no-cors request succeeds whenever anything answers, even a block page.
async function probeHost() {
  const host = "https://huggingface.co";
  try {
    await fetch(`${host}/favicon.ico`, { mode: "no-cors", cache: "no-store" });
    log({ level: "warn", event: "probe", host: "huggingface.co", reachable: true,
      message: "Something answers at huggingface.co, but file requests fail. A VPN, proxy or company firewall may be answering in its place." });
  } catch (error) {
    log({ level: "warn", event: "probe", host: "huggingface.co", reachable: false,
      message: "huggingface.co can't be reached at all from this browser. A VPN, firewall or content blocker is stopping it." });
  }
}

// Whole-load retries on top of the per-file ones. Finished files are in the
// browser cache by then, so a retry only fetches what's missing.
const LOAD_TRIES = 3;

async function load(modelConfig) {
  self.postMessage({ status: "loading", data: "Checking WebGPU..." });
  log({ level: "info", event: "load", model: modelConfig?.id, dtype: modelConfig?.dtype, online: navigator.onLine, ...(await storageNote()) });
  try {
    const adapter = await navigator.gpu?.requestAdapter();
    if (!adapter) throw new Error("WebGPU is not available in this browser.");
    self.postMessage({ status: "loading", data: "Downloading the model..." });
    for (let attempt = 1; ; attempt++) {
      try {
        await loadModel(modelConfig);
        break;
      } catch (error) {
        const kind = classify(error);
        if (attempt === 1 && kind === "network") await probeHost();
        const retry = attempt < LOAD_TRIES && (kind === "network" || kind === "stall" || kind === "http");
        log({ level: retry ? "warn" : "error", event: "load-failed", kind, attempt, message: String(error?.message ?? error) });
        if (!retry) throw error;
        self.postMessage({ status: "loading", data: "The connection dropped. Picking up where it left off..." });
        await new Promise((r) => setTimeout(r, 3000 * attempt));
      }
    }
    log({ level: "info", event: "loaded", ...(await storageNote()) });
    self.postMessage({ status: "loading", data: "Warming up..." });
    const warm = await processor("a");
    await model.generate({ ...warm, max_new_tokens: 1 });
    self.postMessage({ status: "ready" });
  } catch (error) {
    const kind = errorKind(error);
    log({ level: "error", event: "gave-up", kind, message: String(error?.message ?? error) });
    self.postMessage({ status: "error", data: friendlyError(error), kind });
  }
}

self.addEventListener("message", (e) => {
  const { type, id, data, model: modelConfig } = e.data;
  if (type === "load") load(modelConfig);
  if (type === "generate") generate(id, data);
  if (type === "interrupt") stopping_criteria.interrupt();
});
