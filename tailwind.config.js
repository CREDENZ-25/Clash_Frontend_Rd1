/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instructions-bg': "url('/src/assets/Instructions/bg.svg')",
      },
    },
  },
  plugins: [],
}
