/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apple/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

