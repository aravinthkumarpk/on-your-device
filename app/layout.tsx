import { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OnYourDevice',
  description: 'Run AI models locally in your browser with WebGPU. Zero installation, instant AI chat.',
  metadataBase: new URL('https://onyourdevice.ai'),
  openGraph: {
    title: 'OnYourDevice',
    description: 'Run AI models locally in your browser with WebGPU. Zero installation, instant AI chat.',
    url: 'https://onyourdevice.ai',
    siteName: 'OnYourDevice',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnYourDevice',
    description: 'Run AI models locally in your browser with WebGPU. Zero installation, instant AI chat.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

import { ThemeProvider } from '@root/components/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us" suppressHydrationWarning>
      <body className={`min-h-screen bg-background text-foreground antialiased ${outfit.variable} font-sans opacity-100 transition-opacity duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

