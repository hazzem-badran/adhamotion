/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f4',
          100: '#fee2e7',
          200: '#fecdd3',
          300: '#fda4b4',
          400: '#fb7199',
          500: '#e02f6b',
          600: '#c82859',
          700: '#a61e4d',
          800: '#881337',
          900: '#701a75',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#2ecc71',
          600: '#27ae60',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        tertiary: {
          50: '#E8F9FF',
          100: '#bfdbfe',
        },
        text: {
          primary: '#18293C',
        },
        // Enhanced neutral colors for dark mode
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #aef1ee, #8F87F1)',
        'gradient-dark': 'linear-gradient(to bottom right, #0f172a, #1e293b)',
        'section-bg': 'rgba(255, 255, 255, 0.25)',
        'section-bg-dark': 'rgba(15, 23, 42, 0.25)',
      },
      backdropBlur: {
        'section': '5px',
      },
      borderColor: {
        'section': 'rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'pulse-slow': 'pulse 1.4s infinite',
        'spin-slow': 'spin 1.8s linear infinite',
        'spin-fast': 'spin 1.6s linear infinite',
        'shrink-grow': 'shrinkGrow 8s linear infinite',
        'bounce-top': 'bounceTop 5s ease-in-out infinite',
        'bounce-right': 'bounceRight 8s infinite linear',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          'to': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shrinkGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.7)' },
        },
        bounceTop: {
          '0%, 100%': { transform: 'translateY(-5rem)' },
          '50%': { transform: 'translateY(0)' },
        },
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10rem)' },
        }
      }
    },
  },
  plugins: [],
}

