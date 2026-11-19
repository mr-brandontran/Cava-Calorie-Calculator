/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chipotle: {
          dark: '#451400',
          darkHover: '#330E00',
          text: '#2B110B',
          red: '#8C1D24',
          green: '#2E6B34',
          gold: '#C68A1B',
          tint: '#F7F5F2',
          border: '#E5E0DB',
          muted: '#6E6E6E',
          grayBg: '#F9F8F6',
        },
        cava: {
          olive: '#2C3E2D',
          oliveDark: '#1E2C1F',
          terracotta: '#C35A38',
          saffron: '#D9822B',
          charcoal: '#2B110B',
          cream: '#FFFFFF',
          tint: '#F7F5F2',
          border: '#E5E0DB',
          muted: '#6E6E6E',
        }
      },
      fontFamily: {
        sans: ['"Nunito Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        condensed: ['"Barlow Condensed"', '"Oswald"', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
