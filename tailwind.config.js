import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeSpin: "fadeSpin 2s linear infinite",
        bounceSlow: "bounceSlow 3s infinite",
        pulseFast: "pulseFast 0.8s infinite",
      },
      keyframes: {
        fadeSpin: {
          "0%": { opacity: "0", transform: "rotate(0deg)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "rotate(360deg)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(-10%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
        },
        pulseFast: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [daisyui], // ✅ Correct ESM import for DaisyUI
  daisyui: {
    themes: ["light", "dark", "cupcake"], // ✅ Add or remove themes as needed
  },
};
