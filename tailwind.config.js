/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#000000", // Custom black color
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [require("daisyui")],
}

