module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: theme => ({
        'check': "url('./src/assets/check.svg')",
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      borderColor: ['checked', 'disabled'],
      cursor: ['disabled'],
      textColor: ['disabled'],
    },
    scrollbar: ['rounded'],
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
