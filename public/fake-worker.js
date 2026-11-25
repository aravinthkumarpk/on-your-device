// Fake engine for tests. Open the app with ?engine=fake to use it.
// It speaks the same message protocol as worker.js, but makes no network
// requests and needs no GPU, so CI can test the whole chat flow.
//
// Test switches, read from this worker's URL:
//   fail=load   loading fails with an out-of-memory error
//   slowload=1  the download takes about 3 seconds
//   flaky=1     the connection drops once midway and resumes
//   fail=network  the download keeps dropping and gives up

const params = new URLSearchParams(self.location.search);
const REPLY = 'Hello from the fake engine. This reply streams one word at a time.';
let interrupted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function load(model) {
  self.postMessage({ status: 'loading', data: 'Downloading the model...' });
  const files = [`${model?.id ?? 'fake'}/embed_tokens.onnx`, `${model?.id ?? 'fake'}/decoder.onnx`];
  const total = 50e6;
  const step = params.get('slowload') ? 300 : 15;
  const log = (entry) => self.postMessage({ status: 'log', entry: { t: Date.now(), host: 'huggingface.co', ...entry } });
  log({ level: 'info', event: 'load', model: model?.id });
  for (const file of files) {
    const name = file.split('/').pop();
    self.postMessage({ status: 'initiate', file, progress: 0 });
    log({ level: 'info', event: 'start', file: name, status: 200, total });
    for (let i = 1; i <= 5; i++) {
      await wait(step);
      if (i === 3 && file.endsWith('decoder.onnx')) {
        const loaded = (total * 2) / 5;
        if (params.get('fail') === 'network') {
          for (let a = 1; a <= 6; a++) {
            log({ level: a === 6 ? 'error' : 'warn', event: 'dropped', file: name, kind: 'network', loaded, total, attempt: a, message: 'network error' });
          }
          self.postMessage({
            status: 'error',
            kind: 'network',
            data: 'The download kept dropping, even after several retries. A VPN, firewall or patchy Wi-Fi can do this. Try again: files that already finished are kept.',
          });
          return;
        }
        if (params.get('flaky')) {
          log({ level: 'warn', event: 'dropped', file: name, kind: 'network', loaded, total, attempt: 1, message: 'network error' });
          log({ level: 'info', event: 'resumed', file: name, status: 206, loaded, total, attempt: 1 });
        }
      }
      self.postMessage({ status: 'progress', file, progress: i * 20, loaded: (total * i) / 5, total });
    }
    self.postMessage({ status: 'done', file });
    log({ level: 'info', event: 'done', file: name, loaded: total, total });
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
