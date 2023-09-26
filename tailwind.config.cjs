/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      'gris': {
        100: "#c1c1c1",
        200: "#6d6d6d",
        300: "#494949",
        400: "#313131",
        500: "#181818",
      },
      'bleu': {
        100: "#BFD5E3",
        200: "#376282",
        300: "#1B313F",
        400: "#13242E",
        500: "#0E1B23",
      },
    },
    extend: {
      keyframes: {
        "slide-up": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
        'blink': {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
    animation: {
      'slide-up-fast': 'slide-up 0.5s',
      'slide-up': 'slide-up 0.7s',
      'slide-up-slow': 'slide-up 1s',
      'spin-slow': 'spin ease-in-out 3s infinite',
      'blink': 'blink 1s infinite',
    },
  },
}

