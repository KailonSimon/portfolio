/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#4c69f6",
        secondary: "#4c94f6",
        tertiary: "#DBE2EF",
        quaternary: "#F9F7F7",
      },
    },
  },
  plugins: [],
};
