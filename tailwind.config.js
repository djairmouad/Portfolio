/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include TypeScript files
  ],
  theme: {
    colors: {
        customGray: 'rgb(53 54 59)',
        color_1:"#ffc96b",
        white:"white",
        black:"black"
      },
  },
  plugins: [],
};
