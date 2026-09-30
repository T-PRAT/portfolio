/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          100: 'rgb(var(--neutral-100) / <alpha-value>)',
          300: 'rgb(var(--neutral-300) / <alpha-value>)',
          400: 'rgb(var(--neutral-400) / <alpha-value>)',
        },
        accent: {
          400: '#ffb454',
          500: '#ff8f40',
          600: '#c4771a',
          800: '#7d460e',
        },
      },
    },
  },
  content: [
    './src/**/*.{astro,html,js,ts,vue}',
  ],
}
