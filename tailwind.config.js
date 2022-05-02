const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Lexend Deca', ...fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', '1.5625rem'],
        base: ['0.9375rem', '1.5625rem'],
        '2xl': ['1.5rem', '1.8125rem'],
        '3xl': ['1.75rem', '2rem'],
        '4xl': ['2.25rem', '2.75rem'],
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
