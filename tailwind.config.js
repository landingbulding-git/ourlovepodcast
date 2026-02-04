/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#f53da8',
          light: '#feebf6',
          dark: '#272525',
          gray: '#808080',
          note: '#fbb6de',
          noteText: '#920757',
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
      },
      backgroundImage: {
        'main-pattern': "url('https://cdn.gamma.app/theme_images/prism-background.2232a16e.png?w=3707&q=70')",
      }
    }
  },
  plugins: [],
}
