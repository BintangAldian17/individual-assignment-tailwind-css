/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'primary': "url('./assets/desktop-background.jpg')",
      },
      fontFamily: {
        'primary': ['Ubuntu', 'sans-serif'],
        'secondary': ["Ukiyo"]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
