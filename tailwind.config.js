/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#f5f1f3",
          100: "#ede5e8",
          200: "#d9c9d3",
          300: "#c7aebe",
          400: "#a887a3",
          500: "#8b6e8d",
          600: "#6B4C5A",
          700: "#5a4050",
          800: "#4a3446",
          900: "#3d2939",
        },
      },
    },
  },
  plugins: [],
};
