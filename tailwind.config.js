/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,vue}",
    "./components/**/*.{html,js,vue}",
    "./layouts/**/*.{html,js,vue}",
  ],
  theme: {
    colors: {
      blue: "#3E80FA",
      peach: "#F19876",
      violet: "#261D3F",
      white: "#FFFFFF",
      lightGray: "#F0F0F0",
      lightViolet: '#E7D9F8',
      blueLight: '#E7F3FF',
      peachLight: '#FFEDE6',
      yellow: '#FFEF83',
      greenLight: '#DBF9ED',
      gray: '#D3D3D3',
      darkGray: '#919191',
      lightIndigoBlue: '#CADDFE',
      veryDarkGray: '#AAAAAB',
      error: '#FF3333'
    },
    extend: {},
  },
  plugins: [],
};
