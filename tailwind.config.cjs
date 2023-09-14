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
      'creme': "#EAE0D5",
      'noir': "#0A0908",
      'marron': "#C6AC8F",
      'marron-foncé': "#5E503F",
    },
    extend: {
      animation: {
        'spin-slow': 'spin ease-in-out 3s infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
  corePlugins: {
    animation: false,
  },
  animation: {
    blink: {
      "0%, 100%": { opacity: 0 },
      "50%": { opacity: 1 },
    }
  }
}
