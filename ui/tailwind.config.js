/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'md': '600px',
        'lg' : '900px'
      },
      minWidth: {
        '360px': '360px',
      },
      maxWidth: {
        '450px': '450px',
      },
    },
  },
  plugins: [],
}