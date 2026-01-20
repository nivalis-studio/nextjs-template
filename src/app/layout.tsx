import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { type PropsWithChildren, Suspense } from 'react';
import { fonts } from '@/fonts';
import { cn } from '@/lib/classnames';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: { default: 'create next app', template: '%s | create next app' },
  description: 'create next app',
  metadataBase: new URL('https://google.com'),
};

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html className={cn('dark font-mono', fonts)} lang='en'>
      <body className='relative'>
        <div className='container relative isolate mx-auto flex min-h-svh flex-col'>
          <Suspense>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
