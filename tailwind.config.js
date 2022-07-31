/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(50, 100%, 75%, 1)",
        secondary: "hsla(236, 100%, 25%, 1)",
        tertiary: "hsla(15, 100%, 62%, 1)",
      },
    },
  },
  plugins: [],
};
