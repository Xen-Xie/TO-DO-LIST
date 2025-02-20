/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    "./**/*.html", // Ensure Tailwind scans all files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}