/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'mukta': ['Mukta', 'sans-serif']
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)'
      }
    },
  },
  plugins: [],
}
