/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tealshade": "#2a5753",
        "brownshade": "#544e37",
        "navy": "#232c36",
        "blueshade": "#1a1a20",
        "darkshade":"#13131a"
      },
    },
  },
  plugins: [],
}
