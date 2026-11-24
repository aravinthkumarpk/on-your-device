// Fake engine for tests. Open the app with ?engine=fake to use it.
// It speaks the same message protocol as worker.js, but makes no network
// requests and needs no GPU, so CI can test the whole chat flow.

const REPLY = 'Hello from the fake engine. This reply streams one word at a time.';
let interrupted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function load(model) {
  self.postMessage({ status: 'loading', data: 'Loading fake model...' });
  const file = `${model?.id ?? 'fake'}/model.onnx`;
  self.postMessage({ status: 'initiate', file, progress: 0 });
  for (const progress of [25, 50, 75]) {
    await wait(20);
    self.postMessage({ status: 'progress', file, progress });
  }
  self.postMessage({ status: 'done', file });
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
    self.postMessage({ status: 'update', id, output: answer, thought: '', tps: 42 });
  }
  self.postMessage({ status: 'complete', id, output: answer });
}

self.addEventListener('message', (e) => {
  const { type, id, data, model } = e.data;
  if (type === 'load') load(model);
  if (type === 'generate') generate(id, data);
  if (type === 'interrupt') interrupted = true;
});
