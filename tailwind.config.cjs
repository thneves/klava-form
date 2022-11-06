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
    boxShadow: {
      'normal': '0px 0px 16px 2px rgba(225,225,230,1)',
    },

    colors: {
      red: {
        400: '#a41623'
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
