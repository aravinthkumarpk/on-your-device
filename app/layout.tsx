import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'qwen-web',
  description: 'Run Qwen LLMs locally in your browser with WebGPU. Zero installation, instant AI chat.',
  metadataBase: new URL('https://qwen-web.sdan.io'),
  openGraph: {
    title: 'qwen-web',
    description: 'Run Qwen LLMs locally in your browser with WebGPU. Zero installation, instant AI chat.',
    url: 'https://qwen-web.sdan.io',
    siteName: 'qwen-web',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'qwen-web',
    description: 'Run Qwen LLMs locally in your browser with WebGPU. Zero installation, instant AI chat.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us" className="dark" suppressHydrationWarning>
      <body className={`min-h-screen bg-background text-foreground antialiased ${outfit.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

