/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        primary: "#4f46e5", // indigo-600
        secondary: "#9333ea", // purple-600
        accent: "#d97706", // amber-600
        dark: "#1f2937", // gray-800
        light: "#f9fafb" // gray-50
      }
    },
  },
  plugins: [],
}
