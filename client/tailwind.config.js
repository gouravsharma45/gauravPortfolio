/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#171717',
          700: '#262626'
        },
        primary: {
          500: '#3b82f6', // blue
          600: '#2563eb'
        },
        accent: {
          500: '#8b5cf6', // violet
          600: '#7c3aed'
        }
      }
    },
  },
  plugins: [],
}
