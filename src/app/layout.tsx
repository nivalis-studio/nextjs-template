import '@/styles/globals.css';
import { fonts } from '@/fonts/google';
import { cn } from '@/utils/classnames';
import type { Metadata } from 'next';

const title = 'Template';
const description = 'Hello World';

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    locale: 'fr-FR',
    siteName: title,
    title,
    type: 'website',
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: {
    default: title,
    template: `%s | ${title}`,
  },
};

const RootLayout = ({ children }: { readonly children: React.ReactNode }) => (
  <html lang='fr' className={cn('min-w-[360px] scroll-smooth', fonts)}>
    <body className='flex !h-[unset] min-h-screen flex-1 flex-col font-sans antialiased'>
      <main className='isolate flex w-full max-w-[100vw] flex-col'>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
