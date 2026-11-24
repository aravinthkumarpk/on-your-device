// Shared motion settings. Strong ease-out for things entering the screen,
// short durations, and nothing that runs on every keystroke.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const enter = {
    initial: { opacity: 0, y: 8, filter: 'blur(2px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -4, filter: 'blur(2px)' },
};
