/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },

    colors: {
      red: {
        400: '#780000'
      },
      
      gray: {
        100: '#E1E1E6',
        300: '#8D8D99',
        600: '#323238',
        800: '#202024',
        900: '#121214',
        900: '#121214',
      },

      dark: {
        700: '#212529'
      }
    }
  },
  plugins: [],
}
