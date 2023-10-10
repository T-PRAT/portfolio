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
      'vert': {
        100: "#C9EEE9",
        200: "#2C877B",
        300: "#226A60",
        400: "#194D46",
        500: "#10302C",
      },
      'sable': {
        100: "#F6EFE4",
        200: "#E4CEAF",
        300: "#D6B587",
        400: "#CDA56D",
        500: "#BF8C45",
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
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    animation: {
      'slide-up-fast': 'slide-up 0.5s',
      'slide-up': 'slide-up 0.7s',
      'slide-up-slow': 'slide-up 1s',
      'spin-slow': 'spin ease-in-out 3s infinite',
      'blink': 'blink 0.8s infinite',
      'fade-in': 'fade-in 1s ease-in',
    },
  },
}

