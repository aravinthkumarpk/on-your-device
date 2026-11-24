// Fake engine for tests. Open the app with ?engine=fake to use it.
// It speaks the same message protocol as worker.js, but makes no network
// requests and needs no GPU, so CI can test the whole chat flow.

const REPLY = 'Hello from the fake engine. This reply streams one word at a time.';
let interrupted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function load() {
  self.postMessage({ status: 'loading', data: 'Loading fake model...' });
  self.postMessage({ status: 'initiate', file: 'fake-model.onnx', progress: 0 });
  for (const progress of [25, 50, 75]) {
    await wait(20);
    self.postMessage({ status: 'progress', file: 'fake-model.onnx', progress });
  }
  self.postMessage({ status: 'done', file: 'fake-model.onnx' });
  self.postMessage({ status: 'ready' });
}

async function generate(messages) {
  interrupted = false;
  const last = messages[messages.length - 1]?.content ?? '';
  const slow = last.includes('[slow]');
  const words = REPLY.split(' ');
  self.postMessage({ status: 'start' });
  let answer = '';
  for (let i = 0; i < words.length; i++) {
    if (interrupted) break;
    await wait(slow ? 400 : 15);
    answer += (i ? ' ' : '') + words[i];
    self.postMessage({ status: 'update', output: answer, thought: '', tps: 42 });
  }
  // worker.js sends the decoded sequence, and the page drops its first line.
  self.postMessage({ status: 'complete', output: ['assistant\n' + answer] });
}

self.addEventListener('message', (e) => {
  const { type, data } = e.data;
  if (type === 'load') load();
  if (type === 'generate') generate(data);
  if (type === 'interrupt') interrupted = true;
});
