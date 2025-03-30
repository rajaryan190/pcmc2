/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tricolor-saffron': '#FF9933',
        'tricolor-white': '#FFFFFF',
        'tricolor-green': '#138808',
        'tricolor-blue': '#000080', // Ashoka Chakra color
        'saffron-600': '#E68523' // Define hover color variant
      },
    },
  },
  plugins: [],
}
