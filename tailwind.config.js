const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Circular: ['CircularStd', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
      },
    },
    boxShadow: {
      '3xl': '5px 0 20px rgba(0, 0, 0, 0.2)',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
