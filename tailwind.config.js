/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chipotle-dark': '#451400',
        'chipotle-darkHover': '#330E00',
        'chipotle-text': '#2B110B',
        'chipotle-red': '#8C1D24',
        'chipotle-green': '#2E6B34',
        'chipotle-gold': '#C68A1B',
        'chipotle-tint': '#F7F5F2',
        'chipotle-border': '#E5E0DB',
        'chipotle-muted': '#6E6E6E',
        'chipotle-grayBg': '#F9F8F6',
        'chipotle-brown': '#8B572A',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        condensed: ['"Barlow Condensed"', '"Oswald"', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
