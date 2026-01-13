/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  darkMode: "class", // use class-based dark mode
  theme: {
    extend: {
      boxShadow: {
     glow: "0 0 20px rgba(16, 185, 129, 0.25)",
    },

      colors: {
        primary: "#10B981",
        primary2: "#06B6D4",
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(12, 12, 12, 0.08)',
        'glow': '0 6px 30px rgba(16,185,129,0.14)'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
  
}
