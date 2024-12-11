/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      fontFamily: {
         sans: ["Montserrat", "Padauk", "sans-serif"],
      },
      extend: {
         fontFamily: {
            heading: ["Poppins", "sans-serif"],
         },
         colors: {
            primary: "#1D4ED8", // Adding a primary color
            secondary: {
               light: "#4ADE80",
               DEFAULT: "#22C55E",
               dark: "#166534", // Nested shades for secondary
            },
            customGray: {
               100: "#F3F4F6",
               200: "#E5E7EB",
               300: "#D1D5DB",
            },
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
