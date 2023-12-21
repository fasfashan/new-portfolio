/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        twilight: "#0F2021",
        dusk: "#0F3538",
        cloud: "#496767",
        fog: "#87a19e",
        radiance: "#ff6600",
        warmth: "#ff9200",
        shine: "#ffbe00",
        gleam: "#f8e08e",
        bright: "#fafaf0",
      },
      maxWidth: {
        custom: "1100px",
      },
    },
  },
  plugins: [],
};
