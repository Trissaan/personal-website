import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Carbon & Sage palette — single sage accent on neutral carbon greys
        carbon: {
          50: '#f5f6f7',
          100: '#e8e9ea',
          200: '#c8cbd0',
          300: '#9ca0a6',
          400: '#6b7078',
          500: '#2a2f35',
          600: '#1c2024',
          700: '#15181c',
          800: '#111315',
          900: '#0b0c0e',
        },
        sage: {
          50: '#effaf6',
          100: '#d5f0e8',
          200: '#a5e1d2',
          300: '#7dd3c0',
          400: '#5eb3a1',
          500: '#4a9a8a',
          600: '#3d7e71',
          700: '#346258',
          800: '#2c4e47',
          900: '#1f3833',
        },
        primary: '#0b0c0e',
        secondary: '#15181c',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
