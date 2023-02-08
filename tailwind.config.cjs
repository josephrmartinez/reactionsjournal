/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'mukta': ['Mukta', 'sans-serif']
      },
    },
  },
  plugins: [],
}
