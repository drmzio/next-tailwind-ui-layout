const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      heading: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: ({ colors }) => ({
        gray: colors.neutral,
      }),
      typography: ({ theme }) => ({

      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

