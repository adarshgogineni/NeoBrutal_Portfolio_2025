/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'jua': ['Jua', 'sans-serif'],
        'k2d': ['K2D', 'sans-serif'],
      },
      colors: {
        'neon-pink': '#a388ee',
        'neon-green': '#e8ffa8',
        'neon-cyan': '#7fffd4',
        'neon-yellow': '#f5b6f6',
        'neon-purple': '#e8a3ff',
        'neon-orange': '#ffa388',
        'neon-red': '#ff8888',
        'neon-blue': '#88a3ff',
        'neon-gray': '#cccccc',
        'neon-black': '#000000',
        'neon-white': '#ffffff',
      },
    },
  },
  plugins: [],
}
