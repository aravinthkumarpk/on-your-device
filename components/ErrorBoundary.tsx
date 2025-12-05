'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@root/components/ui/button';
import { Card, CardContent } from '@root/components/ui/card';

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
                <div className="flex min-h-screen items-center justify-center p-4" role="alert">
                    <Card className="max-w-md border-destructive/50 bg-destructive/5">
                        <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
                                <AlertTriangle className="size-6 text-destructive" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-semibold text-foreground">
                                    Something went wrong
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {this.state.error?.message || 'An unexpected error occurred'}
                                </p>
                            </div>
                            <Button onClick={this.handleRetry} variant="outline">
                                Try again
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}
