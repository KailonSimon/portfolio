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
        main: "#112D4E",
        secondary: "#3F72AF",
        tertiary: "#DBE2EF",
        quaternary: "#F9F7F7",
      },
    },
  },
  plugins: [],
};
