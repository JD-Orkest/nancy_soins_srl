/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}", // <-- La ligne cruciale pour Nuxt 4
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003f87',
        'primary-container': '#0056b3',
        secondary: '#516161',
        tertiary: '#004a41',
        surface: '#f8f9fa',
        'surface-container-low': '#f3f4f5',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#191c1d',
        'soft-teal': '#d4e6e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        label: ['Atkinson Hyperlegible Next', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
      },
    },
  },
  plugins: [],
}