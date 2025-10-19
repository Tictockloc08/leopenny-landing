import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeInUp 1s ease-out 0.3s both',
        'fade-in-delay': 'fadeInUp 1s ease-out 0.9s both',
        'fade-in-delay-2': 'fadeInUp 1s ease-out 1.2s both',
        'fade-in-delay-3': 'fadeInUp 1s ease-out 1.5s both',
        'slide-in': 'slideIn 1s ease-out 0.6s both',
        'float': 'float 20s infinite ease-in-out',
        'float-delay': 'float 20s infinite ease-in-out -7s',
        'float-delay-2': 'float 20s infinite ease-in-out -14s',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': { width: '0' },
          '100%': { width: '80px' },
        },
        float: {
          '0%, 100%': {
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(20px, -20px) rotate(90deg)',
          },
          '50%': {
            transform: 'translate(-20px, -10px) rotate(180deg)',
          },
          '75%': {
            transform: 'translate(10px, 20px) rotate(270deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
