/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'], // Untuk heading/title futuristik
        'exo': ['Exo 2', 'sans-serif'], // Untuk body text modern
        'space': ['Space Grotesk', 'sans-serif'], // Untuk accent text
      },
    },
  },
  plugins: [],
}
