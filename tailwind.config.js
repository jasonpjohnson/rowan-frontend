/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      regular: ['"Mission Gothic Regular"'],
      light: ['"Mission Gothic Light"'],
    },
    screens: {
      xl: '1306px',
      md: { min: '1050px', max: '1306px' },
      smd: { min: '768px', max: '1050px' },
      sm: { min: '320px', max: '768px' },
      xs: '320px',
    },
    extend: {
      colors: {
        brand: '#96241D',
        grey: '#a6a6a6',
        darkGrey: '#292928',
      },
      backgroundImage: {
        'culture-bg': "url('../public/images/culture-background.png')",
      },
    },
  },
  plugins: [],
};
