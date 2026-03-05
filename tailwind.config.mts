import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
        },
        maroon: {
          DEFAULT: 'rgb(var(--color-maroon-600) / <alpha-value>)',
          50: 'rgb(var(--color-maroon-50) / <alpha-value>)',
          100: 'rgb(var(--color-maroon-100) / <alpha-value>)',
          200: 'rgb(var(--color-maroon-200) / <alpha-value>)',
          300: 'rgb(var(--color-maroon-300) / <alpha-value>)',
          400: 'rgb(var(--color-maroon-400) / <alpha-value>)',
          500: 'rgb(var(--color-maroon-500) / <alpha-value>)',
          600: 'rgb(var(--color-maroon-600) / <alpha-value>)',
          700: 'rgb(var(--color-maroon-700) / <alpha-value>)',
          800: 'rgb(var(--color-maroon-800) / <alpha-value>)',
          900: 'rgb(var(--color-maroon-900) / <alpha-value>)',
        },
      },
      textColor: {
        foreground: 'rgb(var(--color-text-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

export default config;
