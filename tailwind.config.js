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
        title: "Playfair Display",
      },
      colors: {
        primary: "#EEFF6C",
        oranges: "#FF8800",
        dusk: "#0F3538",
        cloud: "#496767",
        fog: "#87a19e",
        radiance: "#ff6600",
        warmth: "#ED6B2E",
        shine: "#ffbe00",
        gleam: "#f8e08e",
        bright: "#F4F0E6",
        bgdark: "#071F25",
      },
      maxWidth: {
        custom: "1100px",
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out infinite",
        bounceonce: "bounce 2s ease-in-out ",
        spinslow: "spin 15s linear infinite",
        orbit1: "orbit1 20s linear infinite",
        orbit2: "orbit2 20s linear infinite",
        orbit3: "orbit3 20s linear infinite",
        orbit4: "orbit4 20s linear infinite",
        orbit5: "orbit5 20s linear infinite",
        orbit6: "orbit6 20s linear infinite",
        orbit7: "orbit7 20s linear infinite",
        orbit8: "orbit8 20s linear infinite",
      },
      keyframes: {
        slideUp: {
          "0%, 20%": { transform: "translateY(0)", opacity: 1 },
          "30%, 70%": { transform: "translateY(-100%)", opacity: 0 },
          "80%, 100%": { transform: "translateY(0)", opacity: 1 },
        },
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbit1: {
          "0%": { transform: "rotate(0deg) translateX(200px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(200px) rotate(-360deg)",
          },
        },
        orbit2: {
          "0%": {
            transform: "rotate(51.43deg) translateX(200px) rotate(-51.43deg)",
          },
          "100%": {
            transform: "rotate(411.43deg) translateX(200px) rotate(-411.43deg)",
          },
        },
        orbit3: {
          "0%": {
            transform: "rotate(102.86deg) translateX(200px) rotate(-102.86deg)",
          },
          "100%": {
            transform: "rotate(462.86deg) translateX(200px) rotate(-462.86deg)",
          },
        },
        orbit4: {
          "0%": {
            transform: "rotate(154.29deg) translateX(200px) rotate(-154.29deg)",
          },
          "100%": {
            transform: "rotate(514.29deg) translateX(200px) rotate(-514.29deg)",
          },
        },
        orbit5: {
          "0%": {
            transform: "rotate(205.72deg) translateX(200px) rotate(-205.72deg)",
          },
          "100%": {
            transform: "rotate(565.72deg) translateX(200px) rotate(-565.72deg)",
          },
        },
        orbit6: {
          "0%": {
            transform: "rotate(257.15deg) translateX(200px) rotate(-257.15deg)",
          },
          "100%": {
            transform: "rotate(617.15deg) translateX(200px) rotate(-617.15deg)",
          },
        },
        orbit7: {
          "0%": {
            transform: "rotate(308.58deg) translateX(200px) rotate(-308.58deg)",
          },
          "100%": {
            transform: "rotate(668.58deg) translateX(200px) rotate(-668.58deg)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
