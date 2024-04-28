/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
