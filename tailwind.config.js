/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', 'sans-serif'],
      },
      colors: {  // Pluralized "color" to "colors"
        bgc: '#160E33',  // Changed the value to a string
        body: '#EF443B'       
      },
      backgroundImage: {
        'custom-image': "url('/img/bg(3).png')",
      }
    },
  },
  plugins: [],
}

