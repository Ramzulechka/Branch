/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
        'mx': {max: '412px'},
        'mn': {min: '412px'},
     }
  },
  plugins: [],
}

