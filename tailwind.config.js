/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your file structure
  theme: {
    extend: {
      colors: {
        primary: "#304146", // Custom color
      },
    },
  },
  plugins: [],
};
