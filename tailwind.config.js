/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        primary: "#6cba9f",
        "text-dark": "#0f172a",
        "text-light": "#475569",
        "extra-light": "#f2f2f2",
        white: "#ffffff",
      },
      maxWidth: {
        custom: "1200px",
      },
    },
  },
  plugins: [],
};
/*

theme: {
    fontFamily: {
      Mulish: ["Mulish"],
    },
    colors: {
      primaryColor: "#fe5b3e",
      textColor: "#0f172a",
      textLight: "#475569",
      textExtraLight: "#f2f2f2",
    },
    extend: {},
  },
*/
