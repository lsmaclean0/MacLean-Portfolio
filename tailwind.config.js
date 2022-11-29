module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue' : '#0A6DC1',
      'blue-light' : '#2D728F',
      'gray-dark' : "#201E1F",
      'gray-light' :"#383536",
      'white' : "#FFFFFF",
      'white-antique' : "#FEEFDD",
      'pink-light' : "#d1b2bc",
      'jazzberry-jam' : "#AF125A"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}