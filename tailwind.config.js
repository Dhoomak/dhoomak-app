/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./helpers/**/*.{js,jsx,ts,tsx}",
    "./module/**/*.{js,jsx,ts,tsx}",
    "./common/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./<custom-folder>/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFC109',
        'secondary': '#1A9607',
        'secondary-shade': '#2B851C',
        'transparent-green': '#DAFFD4',
        'transparent-yellow': '#F6EDC3',
        'black': '#060400',
        'magnolia': '#F8F3FF',
        'white': '#ffffff',
        'grey': '#F0F1F6',
        'red': '#F70C0C',
        "grey2": "#403B3B",
        "green": '#0C4403',
        "dark-pink": "#EEEBF2"
      },
      flex: {
        2: '2 2 0%',
        4: '4 4 0%',
        6: '6 6 0%',
      },
      width: {
        1.5: '5px',
        0.5: '2px',
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        15: '15px',
      }
    },
  },
  plugins: [],
}

