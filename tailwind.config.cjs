/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'petrole': "#22333B",
      'marron': "#C6AC8F",
      'marron-foncé': "#5E503F",
    },
    extend: {},
  },
  plugins: [],
}
