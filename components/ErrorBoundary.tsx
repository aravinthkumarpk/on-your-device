'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * Error boundary component to gracefully handle React errors
 * Provides a fallback UI when child components throw errors
 */
export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error to console (could be sent to error tracking service)
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <div className={styles.container} role="alert">
                    <div className={styles.icon}>⚠️</div>
                    <h2 className={styles.title}>Something went wrong</h2>
                    <p className={styles.message}>
                        {this.state.error?.message || 'An unexpected error occurred'}
                    </p>
                    <button onClick={this.handleRetry} className={styles.retryButton}>
                        Try again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
