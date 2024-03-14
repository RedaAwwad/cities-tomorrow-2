/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#02735E',
        secondary: '#0DF25C',
        deep_green:"#002E29",
        'gray-light': '#DCDCDC',
        gold:"#806226"
      },
      fontFamily: {
        'body': ["'Effra Trial', Tahoma, san-serif"],
      }
    },
  },
  plugins: [
    require('tailwindcss-dir')(),
  ],
}
