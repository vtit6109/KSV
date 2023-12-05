/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2481a8',
        'primary-black': '#353b3f',
      },
    },
  },
  plugins: [],
};
