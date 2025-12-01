/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#FF69B4",
        "secondary": "#9370DB",
        "accent": "#FFB6C1",
        "success": "#4CAF50",
        "warning": "#FFC107",
        "danger": "#FF6B35",
        "background-light": "#FFF5F7",
        "surface-light": "#FFFFFF",
        "text-primary": "#654C75",
        "text-secondary": "#A996B8",
      },
      fontFamily: {
        "display": ["Fredoka One", "cursive"],
        "body": ["Quicksand", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'soft': '0 8px 24px 0 rgba(255, 105, 180, 0.15)',
        'soft-hover': '0 12px 32px 0 rgba(255, 105, 180, 0.25)',
        'inner-soft': 'inset 0 2px 8px 0 rgba(255, 105, 180, 0.1)',
        'glow-pink': '0 0 20px rgba(255, 105, 180, 0.6)',
      },
      animation: {
        'sparkle': 'sparkle 1.5s infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.6s ease-out 0.2s forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { transform: 'scale(0.5) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
