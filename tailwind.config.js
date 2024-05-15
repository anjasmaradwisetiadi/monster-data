/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary' : '#014D81',
        'red-primary': '#9D174D',
        'green-primary': '#16A34A'
      },
    },
  },
  plugins: [],
}

