/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./index.html"],
  theme: {
      extend: {
          colors: {
              'primary-dark': '#343541',
              'second-dark': '#444551',
              'primary-light': "#eaeef1",
              'primary-blue': "#00ffff",
              'primary-red': "#BE1E32"
          }
      },
  },
  plugins: [
      function ({ addVariant }) {
          addVariant('path', '& path')
      }
  ],
}
