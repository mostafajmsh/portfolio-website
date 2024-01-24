/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: ['./*.html'],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'es': { 'max': '400px' }
    },

    fontFamily: {
      "primaryFont": "danaLight",
      "titleFont": "danaBold",
      "enTitleFont": "poppinsBold",
      "enPrimaryFont": "poppinsExtraLite"
    },
    extend: {
      colors: {
        'darkColor': '#464749'
      },
      gridTemplateRows: {
        'customRows': "repeat(3, 350px)",
        'xlCustomRows': "repeat(3, 300px)",
        'lgCustomRows': "250px repeat(2, 200px)",
        'mdCustomRows': "repeat(5, 300px)",
      },
      backgroundImage: {
        'darkBanner': "linear-gradient(to bottom, #292931e8, #292931a9), url(../images/banner/banner-bckgrnd.jpg)",
        'lightBanner': "linear-gradient(to bottom, #f1f5f9ec, #eff6ffd3), url(../images/banner/banner-bckgrnd.jpg)",
        'darkSkills': "url(../images/programming-background-with-person-working-with-codes-computer.jpg)",
        'lightSkills': "linear-gradient(to bottom, #f8fafcdd, #1d4fd8d5), url(../images/programming-background-with-person-working-with-codes-computer.jpg)"
      }
    },
  },
  plugins: [],
}

