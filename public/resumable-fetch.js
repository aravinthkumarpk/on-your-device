// A fetch for model downloads that survives flaky networks and VPNs.
//
// - Retries a request that fails to start (network error, 429, 5xx), with backoff.
// - When a download dies midway, or goes quiet for too long, it asks the
//   server for the rest with a Range request and keeps going from the same
//   byte, so a 1 GB file doesn't start over at zero.
// - Reports every step to `log`, so people can see (and copy) what happened.
//
// Plain JS so the model worker can import it straight from /public.
// Nothing here leaves the device: `log` only posts to the page.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const DEFAULTS = {
  /** Tries in a row without new bytes before giving up. */
  maxRetries: 6,
  /** Waits between tries, in ms. The last one repeats. */
  backoff: [1000, 2000, 4000, 8000, 15000],
  /** No bytes for this long counts as a dead connection. */
  stallMs: 30000,
};

/**
 * Sorts an error into a few kinds people can act on.
 * network: the connection dropped or never opened (VPN, Wi-Fi, firewall, ad blocker)
 * stall:   the connection stayed open but stopped sending
 * http:    the server answered with an error status
 * storage: the browser ran out of disk space for the model
 */
export function classify(error) {
  const name = error?.name ?? '';
  const message = String(error?.message ?? error ?? '');
  if (error?.kind) return error.kind;
  if (name === 'QuotaExceededError' || /quota|storage|disk/i.test(message)) return 'storage';
  if (/network|failed to fetch|load failed|fetch failed|connection|ERR_/i.test(message)) return 'network';
  if (name === 'AbortError') return 'stall';
  return 'other';
}

const retryableStatus = (status) => status === 408 || status === 429 || status >= 500;

function shortName(url) {
  try {
    const u = new URL(String(url));
    const parts = u.pathname.split('/');
    return parts.slice(-1)[0] || u.pathname;
  } catch {
    return String(url);
  }
}

function hostOf(url) {
  try {
    return new URL(String(url)).host;
  } catch {
    return '';
  }
}

function httpError(status, statusText) {
  const e = new Error(`HTTP ${status}${statusText ? ` ${statusText}` : ''}`);
  e.kind = 'http';
  e.status = status;
  return e;
}

/**
 * Wraps `fetchFn` (usually the browser's fetch).
 * @param {typeof fetch} fetchFn
 * @param {(entry: object) => void} log
 */
export function createResumableFetch(fetchFn, log = () => {}, options = {}) {
  const { maxRetries, backoff, stallMs } = { ...DEFAULTS, ...options };
  const wait = options.sleep ?? sleep;
  const delay = (n) => backoff[Math.min(n - 1, backoff.length - 1)];

  return async function resumableFetch(input, init = {}) {
    const url = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
    const file = shortName(url);
    const host = hostOf(url);
    const headers = new Headers(init.headers ?? {});
    const method = (init.method ?? 'GET').toUpperCase();

    // Only plain GETs of whole files can be resumed. Everything else just gets logged.
    if (method !== 'GET' || headers.has('Range')) {
      try {
        return await fetchFn(input, init);
      } catch (error) {
        log({ level: 'error', event: 'request-failed', file, host, kind: classify(error), message: String(error?.message ?? error) });
        throw error;
      }
    }

    // One request, aborted if no bytes arrive for `stallMs`.
    async function open(start) {
      const h = new Headers(headers);
      if (start > 0) h.set('Range', `bytes=${start}-`);
      const controller = new AbortController();
      const outer = init.signal;
      if (outer?.aborted) controller.abort(outer.reason);
      outer?.addEventListener?.('abort', () => controller.abort(outer.reason), { once: true });
      let timer = setTimeout(() => controller.abort(stallError()), stallMs);
      const res = await fetchFn(url, { ...init, headers: h, signal: controller.signal }).finally(() => clearTimeout(timer));
      return {
        res,
        controller,
        arm() {
          clearTimeout(timer);
          timer = setTimeout(() => controller.abort(stallError()), stallMs);
        },
        disarm() {
          clearTimeout(timer);
        },
      };
    }

    function stallError() {
      const e = new Error(`No data for ${Math.round(stallMs / 1000)} seconds`);
      e.kind = 'stall';
      return e;
    }

    // Start the download, retrying failures that a second try can fix.
    let first;
    for (let attempt = 1; ; attempt++) {
      try {
        first = await open(0);
        if (first.res.ok || !retryableStatus(first.res.status)) break;
        throw httpError(first.res.status, first.res.statusText);
      } catch (error) {
        if (init.signal?.aborted) throw error;
        const kind = classify(error);
        const give = attempt >= maxRetries || (kind === 'http' && !retryableStatus(error.status));
        log({ level: give ? 'error' : 'warn', event: 'request-failed', file, host, kind, status: error.status, attempt, message: String(error?.message ?? error) });
        if (give) throw error;
        await wait(delay(attempt));
      }
    }

    const { res } = first;
    if (!res.ok || !res.body) {
      log({ level: 'error', event: 'http-error', file, host, kind: 'http', status: res.status });
      return res;
    }

    const total = Number(res.headers.get('content-length')) || 0;
    // A compressed body can't be resumed by byte offset, so only resume
    // when we know the size and the bytes aren't re-encoded.
    const canResume = total > 0 && !res.headers.get('content-encoding');
    log({ level: 'info', event: 'start', file, host, status: res.status, total });

    let current = first;
    let reader = res.body.getReader();
    let loaded = 0;
    let tries = 0;
    let resumed = false;

    const body = new ReadableStream({
      async pull(controller) {
        for (;;) {
          try {
            current.arm();
            const { done, value } = await reader.read();
            current.disarm();
            if (done) {
              if (resumed && canResume && loaded !== total) {
                throw Object.assign(new Error(`Got ${loaded} of ${total} bytes after resuming`), { kind: 'other' });
              }
              log({ level: 'info', event: 'done', file, host, loaded, total, resumed });
              controller.close();
              return;
            }
            loaded += value.length;
            tries = 0;
            controller.enqueue(value);
            return;
          } catch (error) {
            current.disarm();
            if (init.signal?.aborted) {
              controller.error(error);
              return;
            }
            // A stalled read rejects with the abort reason we set.
            const reason = current.controller.signal.aborted ? current.controller.signal.reason : error;
            const kind = classify(reason);
            tries++;
            const give = !canResume || tries > maxRetries;
            log({
              level: give ? 'error' : 'warn',
              event: 'dropped',
              file, host, kind, loaded, total,
              attempt: tries,
              message: String(reason?.message ?? reason),
              ...(canResume ? {} : { note: 'Server did not give a size, so this file restarts from zero.' }),
            });
            if (give) {
              controller.error(reason);
              return;
            }
            await wait(delay(tries));
            try {
              current = await open(loaded);
              const r = current.res;
              const range = r.headers.get('content-range') ?? '';
              if (r.status === 206 && range.startsWith(`bytes ${loaded}-`)) {
                reader = r.body.getReader();
                resumed = true;
                log({ level: 'info', event: 'resumed', file, host, status: r.status, loaded, total, attempt: tries });
              } else if (r.ok) {
                // The server ignored Range and sent the whole file: skip what we have.
                reader = skipBytes(r.body.getReader(), loaded);
                resumed = true;
                log({ level: 'warn', event: 'resumed', file, host, status: r.status, loaded, total, attempt: tries, note: 'Server ignored Range, skipping bytes we already had.' });
              } else {
                throw httpError(r.status, r.statusText);
              }
            } catch (openError) {
              log({ level: 'warn', event: 'request-failed', file, host, kind: classify(openError), status: openError?.status, loaded, total, attempt: tries, message: String(openError?.message ?? openError) });
              // Loop: the next read fails fast on the old reader and counts another try.
              reader = failingReader(openError);
            }
          }
        }
      },
      cancel(reason) {
        current.controller.abort(reason);
      },
    });

    return new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers });
  };
}

function failingReader(error) {
  return { read: () => Promise.reject(error), cancel: () => Promise.resolve() };
}

/** A reader that drops the first `count` bytes of `reader`. */
function skipBytes(reader, count) {
  let left = count;
  return {
    async read() {
      for (;;) {
        const r = await reader.read();
        if (r.done || left === 0) return r;
        if (r.value.length <= left) {
          left -= r.value.length;
          continue;
        }
        const value = r.value.subarray(left);
        left = 0;
        return { done: false, value };
      }
    },
    cancel: (reason) => reader.cancel(reason),
  };
}
