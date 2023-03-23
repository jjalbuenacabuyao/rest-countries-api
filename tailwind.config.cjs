/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "light-mode-very-dark-blue": "hsl(207, 26%, 17%)",
        "light-mode-dark-gray": "hsl(0, 0%, 52%)",
        "light-mode-light-gray": "hsl(0, 0%, 98%)",
      },

      fontFamily: {
        "nunito": ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}