/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        subtitle: "Noto Serif",
      },
      colors: {
        primary: "#DBFD00",
        twilight: "#0F2021",
        dusk: "#0F3538",
        cloud: "#496767",
        fog: "#87a19e",
        radiance: "#ff6600",
        warmth: "#ED6B2E",
        shine: "#ffbe00",
        gleam: "#f8e08e",
        bright: "#F4F0E6",
      },
      maxWidth: {
        custom: "1100px",
      },
      animation: {
        bounceonce: "bounce 2s ease-in-out ",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
