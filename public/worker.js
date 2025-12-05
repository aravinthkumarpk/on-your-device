// Import from CDN for Web Worker
import {
  AutoTokenizer,
  AutoModelForCausalLM,
  TextStreamer,
  InterruptableStoppingCriteria,
} from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.0";

// Debug logger - only outputs when DEBUG is true
// Set to false for production to reduce console noise
const DEBUG = false;
const log = (...args) => DEBUG && console.log('[Worker]', ...args);

log('Imported dependencies');

async function check() {
  log('Running WebGPU check');
  try {
    const adapter = await navigator.gpu.requestAdapter();
    log('Got adapter:', adapter);
    if (!adapter) {
      throw new Error("WebGPU is not supported (no adapter found)");
    }
  } catch (e) {
    console.error('WebGPU check failed:', e);
    self.postMessage({
      status: "error",
      data: e.toString(),
    });
  }
}

class TextGenerationPipeline {
  static model_id = "onnx-community/Qwen3-0.6B-ONNX";

  static async getInstance(progress_callback = null) {
    log('Getting pipeline instance');
    try {
      this.tokenizer ??= await AutoTokenizer.from_pretrained(this.model_id, {
        progress_callback,
      });
      log('Tokenizer loaded successfully');

      this.model ??= await AutoModelForCausalLM.from_pretrained(this.model_id, {
        dtype: "q4f16",
        device: "webgpu",
        progress_callback,
      });
      log('Model loaded successfully');

      return [this.tokenizer, this.model];
    } catch (error) {
      console.error('Failed to load model:', error);
      let errorMessage = error?.message || error?.toString() || `Unknown error (${typeof error}): ${JSON.stringify(error)}`;

      // Handle specific ONNX/WebGPU errors
      if (errorMessage.includes('3944596720') || errorMessage.includes('WebGPU')) {
        errorMessage = 'WebGPU device creation failed. Try refreshing the page or check your GPU drivers.';
      } else if (errorMessage.includes('onnxruntime') || errorMessage.includes('session')) {
        errorMessage = 'Model initialization failed. The model may be corrupted or incompatible.';
      } else if (errorMessage.includes('memory') || errorMessage.includes('OOM')) {
        errorMessage = 'Insufficient GPU memory. Try closing other tabs or use a device with more VRAM.';
      }

      self.postMessage({
        status: "error",
        data: `Model loading failed: ${errorMessage}`
      });
      throw error;
    }
  }
}

const stopping_criteria = new InterruptableStoppingCriteria();
let past_key_values_cache = null;

async function generate(messages) {
  log('Starting generation with messages:', messages);
  const [tokenizer, model] = await TextGenerationPipeline.getInstance();
  log('Got tokenizer and model instances');

  const inputs = tokenizer.apply_chat_template(messages, {
    add_generation_prompt: true,
    return_dict: true,
  });
  log('Applied chat template:', inputs);

  let state = "thinking";
  let startTime;
  let numTokens = 0;
  let tps;
  let rawBuffer = "";

  const token_callback_function = (tokens) => {
    log('Token callback:', tokens);
    startTime ??= performance.now();
    if (numTokens++ > 0) {
      tps = (numTokens / (performance.now() - startTime)) * 1000;
      log('Current TPS:', tps);
    }
  };

  const callback_function = (output) => {
    log('Output callback:', output);
    rawBuffer += output;

    // Split thinking vs answer based on <think> ... </think>
    let thought = '';
    let answer = rawBuffer;
    const start = rawBuffer.indexOf('<think>');
    const end = rawBuffer.indexOf('</think>');

    if (start !== -1) {
      if (end !== -1 && end > start) {
        thought = rawBuffer.slice(start + 7, end).trim();
        answer = rawBuffer.slice(end + 8);
        state = "answering";
      } else {
        thought = rawBuffer.slice(start + 7);
        answer = rawBuffer.slice(0, start);
        state = "thinking";
      }
    } else {
      state = "answering";
    }

    self.postMessage({
      status: "update",
      output: answer,
      thought,
      tps,
      numTokens,
      state,
    });
  };

  const streamer = new TextStreamer(tokenizer, {
    skip_prompt: true,
    skip_special_tokens: true,
    callback_function,
    token_callback_function,
  });
  log('Created streamer');

  self.postMessage({ status: "start" });

  const { past_key_values, sequences } = await model.generate({
    ...inputs,
    do_sample: false,
    max_new_tokens: 2048,
    streamer,
    stopping_criteria,
    return_dict_in_generate: true,
  });
  log('Generation complete:', sequences);

  past_key_values_cache = past_key_values;

  const decoded = tokenizer.batch_decode(sequences, { skip_special_tokens: true });
  log('Decoded output:', decoded);
  self.postMessage({ status: "complete", output: decoded });
}

function handleProgress(event) {
  log('Progress event:', event);
  if (!event.total) return;

  const friendlyName = "Qwen3-0.6B-ONNX";
  const fileLabel = event.url || friendlyName;

  if (event.loaded === 0) {
    log('Starting file load:', event.url);
    self.postMessage({
      status: "initiate",
      file: fileLabel,
      progress: 0,
      total: event.total,
    });
  } else if (event.loaded < event.total) {
    const percent = Math.round((event.loaded / event.total) * 100);
    log(`Loading progress: ${percent}%`);
    self.postMessage({
      status: "progress",
      file: fileLabel,
      progress: percent,
      total: 100,
    });
  } else {
    log('File load complete:', event.url);
    self.postMessage({
      status: "done",
      file: fileLabel,
    });
  }
}

async function load() {
  log('Starting model load');
  self.postMessage({ status: "loading", data: "Checking WebGPU support..." });

  try {
    // First check for WebGPU support
    log('Running WebGPU check');
    const adapter = await navigator.gpu.requestAdapter();
    log('Got adapter:', adapter);
    if (!adapter) {
      throw new Error("WebGPU is not supported (no adapter found)");
    }

    // If we get here, WebGPU is supported, so proceed with loading the model
    self.postMessage({ status: "loading", data: "Loading Qwen3-0.6B-ONNX..." });

    const [tokenizer, model] = await TextGenerationPipeline.getInstance(handleProgress);
    log('Model loaded successfully');

    self.postMessage({ status: "loading", data: "Compiling shaders and warming up model..." });
    const inputs = tokenizer("a");
    log('Warmup inputs:', inputs);
    await model.generate({ ...inputs, max_new_tokens: 1 });
    log('Warmup complete');
    self.postMessage({ status: "ready" });
  } catch (error) {
    console.error('Model load failed:', error);
    const errorMessage = error?.message || error?.toString() || `Unknown error (${typeof error}): ${JSON.stringify(error)}`;
    self.postMessage({
      status: "error",
      data: `Model load failed: ${errorMessage}`
    });
  }
}

self.addEventListener("message", async (e) => {
  const { type, data } = e.data;
  log('Received message:', type, data);

  switch (type) {
    case "check":
      check();
      break;
    case "load":
      load();
      break;
    case "generate":
      stopping_criteria.reset();
      generate(data);
      break;
    case "interrupt":
      log('Interrupting generation');
      stopping_criteria.interrupt();
      break;
    case "reset":
      log('Resetting state');
      past_key_values_cache = null;
      stopping_criteria.reset();
      break;
  }
});
