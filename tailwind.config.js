/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bluee: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      keyframes: {
        "float-bob-y": {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
