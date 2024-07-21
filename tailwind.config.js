// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ffffff",
        custom: "28px -28px 55px #1a1a1a, -28px 28px 55px #2e2e2e",
        "custom-hover": "15px -20px 30px #ffffff40, -15px 20px 55px #ffffff40",
      },
      keyframes: {
        bubbleFloat: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "1" },
          "50%": {
            transform: "translateY(-20px) translateX(20px)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(-40px) translateX(-40px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "bubble-float": "bubbleFloat 5s infinite",
      },
      borderRadius: {
        "72px": "72px",
        "72px": "72px",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
