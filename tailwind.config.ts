import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'system-ui'],
        inter: ['var(--font-inter)', 'system-ui'],
      },
    },
  },
} satisfies Config;

export default config;
