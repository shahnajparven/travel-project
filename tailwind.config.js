/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '414px',
    },
    colors: {
        white: '#FFFFFF',
        gray: '#EEF0F1', 
        sky: '#30EEC9',
        green: '#34C211',
        black:'#00000'
    }
    },
  },
  plugins: [],
}