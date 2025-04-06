// tailwind.config.js
import tailwindcss from 'tailwindcss'

export default tailwindcss({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '0.9' }
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin 10s linear infinite reverse',
      },
      colors: {
        primary: {
          500: '#73138C',
          200: '#E37BFF'
        },
        secondary: {
          400: '#FF845B'
        },
        neutral: {
          10: '#FFFFFF',
          20: 'rgba(18, 18, 18, 0.2)',
          80: '#7E8492'
        },
        gray: {
          custom: 'var(--gray)'
        }
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(286.17deg, #721D89 0%, #C715F5 71.5%)',
        'gradient-blur': 'linear-gradient(287.09deg, rgba(77, 3, 96, 0.16) 24.87%, rgba(145, 5, 181, 0.4) 137.7%)'
      },
      boxShadow: {
        'purple': '0px 48px 48px -32px rgba(28, 32, 40, 0.5)',
        'button': '0px 48px 48px -32px rgba(28, 32, 40, 0.5), inset 2px 4px 16px rgba(248, 248, 248, 0.06)'
      },
      width: {
        parent: '80vw'
      }
    }
  },
  plugins: [],
})