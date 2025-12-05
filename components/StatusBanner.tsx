import { WorkerProgress, WorkerStatus } from '../app/hooks/useWorker';
import styles from './StatusBanner.module.scss';

interface StatusBannerProps {
    status: WorkerStatus;
    progress: WorkerProgress | null;
    webGPUSupported: boolean | null;
    error?: string | null;
}

/**
 * Displays loading status, progress bars, and error messages
 */
export function StatusBanner({ status, progress, webGPUSupported, error }: StatusBannerProps) {
    // WebGPU not supported error
    if (webGPUSupported === false) {
        return (
            <div className={styles.error} role="alert">
                <strong>WebGPU not supported</strong>
                <p>Your browser doesn&apos;t support WebGPU. Please use Chrome or Edge 113+ with WebGPU enabled.</p>
            </div>
        );
    }

    // Generic error state
    if (status === 'error') {
        return (
            <div className={styles.error} role="alert">
                <strong>Error</strong>
                <p>{error || 'An unexpected error occurred. Please refresh and try again.'}</p>
            </div>
        );
    }

    // Loading state with progress
    if (status === 'loading') {
        return (
            <div className={styles.loading} role="status" aria-live="polite">
                <strong>Loading model...</strong>
                {progress && (
                    <div className={styles.progressContainer}>
                        <div className={styles.fileName}>{progress.file}</div>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${progress.progress}%` }}
                                role="progressbar"
                                aria-valuenow={progress.progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                        </div>
                        <div className={styles.progressPercent}>{progress.progress}%</div>
                    </div>
                )}
            </div>
        );
    }

    // Ready state
    if (status === 'ready') {
        return (
            <div className={styles.ready} role="status">
                ✓ Model ready
            </div>
        );
    }

    // Initializing (no display needed)
    return null;
}
