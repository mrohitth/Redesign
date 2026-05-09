import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#7C9A82',
          50: '#f4f7f5',
          100: '#e6ece8',
          200: '#ccd9d1',
          300: '#a8bfad',
          400: '#85a589',
          500: '#6b8f70',
          600: '#5a7a5f',
          700: '#4a634e',
          800: '#3c503f',
          900: '#2e3c2f',
        },
        cream: {
          DEFAULT: '#F5F1EB',
          50: '#fdfcfb',
          100: '#f9f6f1',
          200: '#f5f1eb',
          300: '#efe8de',
          400: '#e5ddd0',
          500: '#d4c9b8',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          50: '#5a5a5a',
          100: '#4a4a4a',
          200: '#3d3d3d',
          300: '#353535',
          400: '#2d2d2d',
          500: '#252525',
        },
        gold: {
          DEFAULT: '#B8975A',
          50: '#f7f3ed',
          100: '#ede3d6',
          200: '#dbcaa9',
          300: '#c9ae7e',
          400: '#b8975a',
          500: '#a67d42',
          600: '#8a6333',
          700: '#6d4b28',
          800: '#50361c',
          900: '#332111',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config