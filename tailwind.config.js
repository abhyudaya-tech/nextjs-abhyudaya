/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',    // Tailwind's orange-500
        secondary: '#facc15',  // Tailwind's yellow-400
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}