import animatePlugin from 'tailwindcss-animate';
import radixPlugin from 'tailwindcss-radix';
import { fontFamily } from 'tailwindcss/defaultTheme.js';
import typographyPlugin from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      transitionTimingFunction: {
        easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [
    animatePlugin,
    radixPlugin,
    typographyPlugin,
    plugin(({ addUtilities }) => {
      addUtilities({
        '.no-scrollbar': {
          '& *': {
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          },
          '& *::-webkit-scrollbar': {
            background: 'transparent',
            display: 'none',
            width: '0px',
          },
          '&::-webkit-scrollbar': {
            background: 'transparent',
            display: 'none',
            width: '0px',
          },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
