/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000',
        },
        light: {
          primary: '#FFFFFF',
        },
        'gray-light': '#D9DADD',
        'dark-c': '#404652',
        'green-c': '#28D280',
        'red-c': '#E63E19',
        'blue-c': '#4C82F6',
      },
      gridTemplateColumns: {
        'nav-bar':
          'repeat(2,minmax(1rem, 3rem)) minmax(2rem, 5rem) repeat(2,minmax(1rem, 3rem))',
        'chat-item': 'minmax(2rem, 4rem) 1fr',
        'chat-page': '12rem minmax(10rem, 15rem) 1fr',
      },
      boxShadow: {
        'custom-1': '0px 6px 1rem rgb(0 0 0 / 0.35)',
        'custom-2': '0px 10px 1rem rgb(0 0 0 / 0.35)',
        'custom-red': '0px 4px 0.6rem #cf2121b8',
        'custom-long': '2px 15px 0.6rem rgb(0 0 0 / 30%)',
        'custom-blue': '-1px 14px 16rem #4c82f6',
      },
      backgroundColor: {
        'blue-c': '#4C82F6',
        'gray-light': '#EDF2FE',
        'gray-transparent': '#edf2fe69;',
        'green-c': '#28D280',
        'red-c': '#E63E19',
        'royal-green': '#9BDFB6',
        'royal-yellow': '#F4F5B4',
        'royal-purp': '#E0B4F5',
        dark: '#475569',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
