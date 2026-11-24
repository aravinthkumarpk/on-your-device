// Fake engine for tests. Open the app with ?engine=fake to use it.
// It speaks the same message protocol as worker.js, but makes no network
// requests and needs no GPU, so CI can test the whole chat flow.
//
// Test switches, read from this worker's URL:
//   fail=load   loading fails with an out-of-memory error
//   slowload=1  the download takes about 3 seconds

const params = new URLSearchParams(self.location.search);
const REPLY = 'Hello from the fake engine. This reply streams one word at a time.';
let interrupted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function load(model) {
  self.postMessage({ status: 'loading', data: 'Downloading the model...' });
  const files = [`${model?.id ?? 'fake'}/embed_tokens.onnx`, `${model?.id ?? 'fake'}/decoder.onnx`];
  const total = 50e6;
  const step = params.get('slowload') ? 300 : 15;
  for (const file of files) {
    self.postMessage({ status: 'initiate', file, progress: 0 });
    for (let i = 1; i <= 5; i++) {
      await wait(step);
      self.postMessage({ status: 'progress', file, progress: i * 20, loaded: (total * i) / 5, total });
    }
    self.postMessage({ status: 'done', file });
  }
  if (params.get('fail') === 'load' && !model?.id?.includes('0.8B')) {
    self.postMessage({ status: 'error', data: 'Your device ran out of GPU memory. Close other tabs or pick the smaller model.' });
    return;
  }
  self.postMessage({ status: 'loading', data: 'Warming up...' });
  await wait(step);
  self.postMessage({ status: 'ready' });
}

async function generate(id, turns) {
  interrupted = false;
  const last = turns[turns.length - 1]?.content ?? '';
  const slow = last.includes('[slow]');
  const words = REPLY.split(' ');
  self.postMessage({ status: 'start', id });
  let answer = '';
  for (let i = 0; i < words.length; i++) {
    if (interrupted) break;
    await wait(slow ? 400 : 15);
    answer += (i ? ' ' : '') + words[i];
    self.postMessage({ status: 'update', id, output: answer, thought: '', tps: slow ? 2 : 42 });
  }
  self.postMessage({ status: 'complete', id, output: answer });
}

self.addEventListener('message', (e) => {
  const { type, id, data, model } = e.data;
  if (type === 'load') load(model);
  if (type === 'generate') generate(id, data);
  if (type === 'interrupt') interrupted = true;
});
