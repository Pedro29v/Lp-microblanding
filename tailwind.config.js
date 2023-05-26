/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFEFEA",
        secondary: "#DDC8CA",
        tertiary: "#2F4858",
        auxiliar: "#5E6478",
        fontColor: "#333333",
      },
    },
  },
  plugins: [],
};
