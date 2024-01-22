import animatePlugin from 'tailwindcss-animate';
import radixPlugin from 'tailwindcss-radix';
import {fontFamily} from 'tailwindcss/defaultTheme.js';
import typographyPlugin from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';
import type {Config} from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: ['class'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		animatePlugin,
		radixPlugin,
		typographyPlugin,
		plugin(({addUtilities}) => {
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				background: 'hsl(var(--background))',
				black: '#191919',
				border: 'hsl(var(--border))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					danger: 'hsl(var(--foreground-danger))',
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					invalid: 'hsl(var(--input-invalid))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					invalid: 'hsl(var(--foreground-danger))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
			},
			fontFamily: {
				inter: ['var(--font-inter)', ...fontFamily.sans],
				poppins: ['var(--font-poppins)', ...fontFamily.sans],
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			keyframes: {
				'accordion-down': {
					from: {height: '0'},
					to: {height: 'var(--radix-accordion-content-height)'},
				},
				'accordion-up': {
					from: {height: 'var(--radix-accordion-content-height)'},
					to: {height: '0'},
				},
			},
			transitionTimingFunction: {
				easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
			},
		},
	},
} satisfies Config;
