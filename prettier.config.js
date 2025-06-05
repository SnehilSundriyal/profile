/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
  darkMode: 'class',
  theme: {
    extend: {},
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
}
