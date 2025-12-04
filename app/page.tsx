'use client'

import { useEffect, useRef, useState } from 'react';
import * as Utilities from '@common/utilities';

export const dynamic = 'force-static';

// WebGPU type declarations
declare global {
  interface Navigator {
    gpu?: {
      requestAdapter(): Promise<GPUAdapter | null>;
    };
  }
}

interface MessageType {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export default function Page() {
  const workerRef = useRef<Worker | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<string>('initializing');
  const [progress, setProgress] = useState<{ file: string; progress: number } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [thought, setThought] = useState('');
  const [tps, setTps] = useState<number | null>(null);
  const [webGPUSupported, setWebGPUSupported] = useState<boolean | null>(null);

  // Initialize Web Worker and check WebGPU support
  useEffect(() => {
    // Check WebGPU support
    const checkWebGPU = async () => {
      if (!navigator.gpu) {
        setWebGPUSupported(false);
        setStatus('error');
        return;
      }

      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
          setWebGPUSupported(false);
          setStatus('error');
          return;
        }
        setWebGPUSupported(true);
      } catch (error) {
        setWebGPUSupported(false);
        setStatus('error');
        return;
      }
    };

    checkWebGPU();

    // Initialize Web Worker
    if (typeof window !== 'undefined') {
      try {
        workerRef.current = new Worker('/worker.js', { type: 'module' });

        workerRef.current.onmessage = (event) => {
          const { status: workerStatus, data, file, progress: workerProgress, output, thought: workerThought, tps: workerTps } = event.data;

          switch (workerStatus) {
            case 'loading':
              setStatus('loading');
              break;
            case 'initiate':
              setProgress({ file, progress: 0 });
              break;
            case 'progress':
              setProgress({ file, progress: workerProgress });
              break;
            case 'done':
              setProgress(null);
              break;
            case 'ready':
              setStatus('ready');
              setProgress(null);
              break;
            case 'start':
              setIsGenerating(true);
              setCurrentResponse('');
              setThought('');
              break;
            case 'update':
              setCurrentResponse(output || '');
              setThought(workerThought || '');
              setTps(workerTps);
              break;
            case 'complete':
              setIsGenerating(false);
              if (output && output[0]) {
                const assistantMessage = output[0].split('\n').slice(1).join('\n').trim();
                setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
              }
              setCurrentResponse('');
              setThought('');
              setTps(null);
              break;
            case 'error':
              setStatus('error');
              setIsGenerating(false);
              alert(`Error: ${data}`);
              break;
          }
        };

        workerRef.current.onerror = (error) => {
          console.error('Worker error:', error);
          setStatus('error');
        };

        // Load the model
        workerRef.current.postMessage({ type: 'load' });
      } catch (error) {
        console.error('Failed to initialize worker:', error);
        setStatus('error');
      }
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating || status !== 'ready') return;

    const userMessage: MessageType = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    // Send to worker
    if (workerRef.current) {
      workerRef.current.postMessage({
        type: 'generate',
        data: newMessages.slice(-10), // Send last 10 messages for context
      });
    }
  };

  const handleInterrupt = () => {
    if (workerRef.current && isGenerating) {
      workerRef.current.postMessage({ type: 'interrupt' });
      setIsGenerating(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setCurrentResponse('');
    setThought('');
    if (workerRef.current) {
      workerRef.current.postMessage({ type: 'reset' });
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: '600' }}>
          Qwen-Web
        </h1>
        <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
          Run Qwen3-0.6B locally in your browser with WebGPU
        </p>
      </div>

      {/* Status Display */}
      {webGPUSupported === false && (
        <div style={{
          padding: '15px',
          backgroundColor: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <strong>WebGPU not supported</strong>
          <p style={{ margin: '5px 0 0 0' }}>
            Your browser doesn't support WebGPU. Please use Chrome or Edge with WebGPU enabled.
          </p>
        </div>
      )}

      {status === 'loading' && (
        <div style={{
          padding: '15px',
          backgroundColor: '#e3f2fd',
          border: '1px solid #90caf9',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <strong>Loading model...</strong>
          {progress && (
            <div style={{ marginTop: '10px' }}>
              <div style={{ fontSize: '12px', marginBottom: '5px' }}>
                {progress.file}
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#ddd',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${progress.progress}%`,
                  height: '100%',
                  backgroundColor: '#1976d2',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              <div style={{ fontSize: '12px', marginTop: '5px' }}>
                {progress.progress}%
              </div>
            </div>
          )}
        </div>
      )}

      {status === 'ready' && (
        <div style={{
          padding: '10px 15px',
          backgroundColor: '#e8f5e9',
          border: '1px solid #a5d6a7',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          ✓ Model ready
        </div>
      )}

      {/* Messages Display */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px'
      }}>
        {messages.length === 0 && !currentResponse && (
          <div style={{ color: '#999', textAlign: 'center', padding: '40px 20px' }}>
            Start a conversation by typing a message below
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '15px',
              padding: '12px',
              backgroundColor: msg.role === 'user' ? '#f5f5f5' : '#e3f2fd',
              borderRadius: '8px'
            }}
          >
            <div style={{ fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>
              {msg.role === 'user' ? 'You' : 'Assistant'}
            </div>
            <div style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
              {msg.content}
            </div>
          </div>
        ))}

        {isGenerating && currentResponse && (
          <div style={{
            marginBottom: '15px',
            padding: '12px',
            backgroundColor: '#e3f2fd',
            borderRadius: '8px'
          }}>
            <div style={{ fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>
              Assistant
            </div>
            {thought && (
              <div style={{
                fontSize: '12px',
                color: '#666',
                marginBottom: '8px',
                fontStyle: 'italic',
                padding: '8px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px'
              }}>
                💭 Thinking: {thought}
              </div>
            )}
            <div style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
              {currentResponse}
              <span style={{ animation: 'blink 1s infinite' }}>▊</span>
            </div>
            {tps && (
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                {tps.toFixed(1)} tokens/sec
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button
          onClick={handleClear}
          disabled={messages.length === 0 || isGenerating}
          style={{
            padding: '8px 16px',
            backgroundColor: messages.length === 0 || isGenerating ? '#ddd' : '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: messages.length === 0 || isGenerating ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          Clear
        </button>
        {isGenerating && (
          <button
            onClick={handleInterrupt}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Stop
          </button>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={status === 'ready' ? 'Type your message...' : 'Loading model...'}
          disabled={status !== 'ready' || isGenerating}
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={status !== 'ready' || isGenerating || !input.trim()}
          style={{
            padding: '12px 24px',
            backgroundColor: status !== 'ready' || isGenerating || !input.trim() ? '#ddd' : '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: status !== 'ready' || isGenerating || !input.trim() ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Send
        </button>
      </form>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
