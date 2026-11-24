/**
 * Download progress across all model files, shown as one bar in MB.
 */

export interface FileProgress {
    loaded: number;
    total: number;
}

export interface DownloadSummary {
    loadedBytes: number;
    totalBytes: number;
    /** 0 to 100, rounded down so it never shows 100 before it's done. */
    percent: number;
}

export function summarize(files: Record<string, FileProgress>, expectedBytes?: number): DownloadSummary {
    let loadedBytes = 0;
    let totalBytes = 0;
    for (const f of Object.values(files)) {
        loadedBytes += Math.min(f.loaded, f.total);
        totalBytes += f.total;
    }
    // Files are discovered one at a time, so early on the known total is too small.
    // Use the catalogue size as a floor until the real total passes it.
    if (expectedBytes && expectedBytes > totalBytes) totalBytes = expectedBytes;
    const percent = totalBytes > 0 ? Math.floor((loadedBytes / totalBytes) * 100) : 0;
    return { loadedBytes, totalBytes, percent: Math.min(percent, 100) };
}

/** "640 MB" or "1.4 GB". */
export function formatBytes(bytes: number): string {
    const mb = bytes / 1e6;
    if (mb < 1000) return `${Math.round(mb)} MB`;
    return `${(mb / 1000).toFixed(1)} GB`;
}

/** "about 2 minutes" from bytes left and a measured rate in bytes per second. */
export function formatEta(bytesLeft: number, bytesPerSecond: number): string | null {
    if (!(bytesPerSecond > 0) || bytesLeft <= 0) return null;
    const seconds = bytesLeft / bytesPerSecond;
    if (seconds < 10) return 'a few seconds left';
    if (seconds < 60) return 'under a minute left';
    const minutes = Math.round(seconds / 60);
    return `about ${minutes} ${new Intl.PluralRules('en').select(minutes) === 'one' ? 'minute' : 'minutes'} left`;
}

/** Rough time for a first download on fast Wi-Fi (100 Mbps), for the Start button. */
export function estimateFastWifi(gb: number): string {
    const minutes = Math.max(1, Math.round((gb * 8000) / 100 / 60));
    return `about ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} on fast Wi-Fi`;
}
