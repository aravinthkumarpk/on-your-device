export function noop(): null {
  return null;
}

type EmptyCheckable = string | number | object | null | undefined;

export function isEmpty(text: EmptyCheckable): boolean {
  if (text === 0) {
    return false;
  }

  if (!text) {
    return true;
  }

  if (typeof text === 'object') {
    return true;
  }

  if ((text as string).length === 0) {
    return true;
  }

  const textStr = text.toString();
  return Boolean(!textStr.trim());
}

type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, boolean>;

export function classNames(...args: ClassValue[]): string {
  const hasOwn = {}.hasOwnProperty;
  const classes: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      const obj = arg as Record<string, boolean>;
      if (obj.toString !== Object.prototype.toString) {
        classes.push(obj.toString());
      } else {
        for (const key in obj) {
          if (hasOwn.call(obj, key) && obj[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ');
}

export function bytesToSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
}

interface DebouncedFunction<Args extends unknown[]> {
  (...args: Args): void;
  flush: () => void;
}

export function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number): DebouncedFunction<Args> {
  let timeoutID: ReturnType<typeof setTimeout> | undefined;
  let lastArgs: Args | undefined;

  const run = (): void => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const debounced = (...args: Args): void => {
    clearTimeout(timeoutID);
    lastArgs = args;
    timeoutID = setTimeout(run, delay);
  };

  debounced.flush = (): void => {
    clearTimeout(timeoutID);
  };

  return debounced;
}

export function timeAgo(dateInput: Date | string | number): string {
  const date = new Date(dateInput);
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 0 || isNaN(secondsPast)) {
    return '[INVALID]';
  }

  if (secondsPast < 60) {
    return 'Just now';
  } else if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (secondsPast < 604800) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  const formattedDate = date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
}

export function deepEqual<T>(x: T, y: T): boolean {
  if (x === y) return true;

  if (typeof x !== 'object' || typeof y !== 'object') return false;
  if (x === null || y === null) return false;

  const xObj = x as Record<string, unknown>;
  const yObj = y as Record<string, unknown>;

  const xKeys = Object.keys(xObj);
  const yKeys = Object.keys(yObj);

  if (xKeys.length !== yKeys.length) return false;

  return xKeys.every((key) => deepEqual(xObj[key], yObj[key]));
}
