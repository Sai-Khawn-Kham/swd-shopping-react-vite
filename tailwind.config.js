/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      extend: {
         fontFamily: {
            // heading: ["Poppins", "serif"],
            // base: [],
            // display: [],
         },
         colors: {
            // primary: {
            //    100: "#F3F4F6",
            //    200: "",
            //    300: "",
            //    400: "",
            //    500: "",
            //    600: "",
            //    700: "",
            //    800: "",
            //    900: "",
            //    950: "",
            // },
            // secondary: {
            //    100: "",
            //    200: "",
            //    300: "",
            //    400: "",
            //    500: "",
            //    600: "",
            //    700: "",
            //    800: "",
            //    900: "",
            //    950: "",
            // },
            // accent: {
            //    100: "",
            //    200: "",
            //    300: "",
            //    400: "",
            //    500: "",
            //    600: "",
            //    700: "",
            //    800: "",
            //    900: "",
            //    950: "",
            // },
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
