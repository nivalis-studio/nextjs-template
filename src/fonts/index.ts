import localFont from 'next/font/local';
import { fontInter } from '@/fonts/google';

const geistSans = localFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const fonts = `${fontInter.variable} ${geistSans.variable} ${geistMono.variable}`;
