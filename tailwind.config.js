/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 0.2s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      colors: {
        sidebar: '#1E1E1E',
        sidebarHover: '#2c2c2c',
        sidebarSubHover: '#3a3a3a',
      },
    },
  },
  plugins: [],
}
