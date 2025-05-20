import tailwindScrollbar from 'tailwind-scrollbar';

export default {
    darkMode: 'class',

content: [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
],
theme: {
  extend: {
    
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    }
  },
},
plugins: [],
}