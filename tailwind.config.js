/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        marquee: "marquee 1000s linear infinite", // Loop the animation
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" }, // Start at the original position
          "100%": { transform: "translateX(-100%)" }, // Move one full width to the left
        },
      },
    },
  },
  plugins: [],
};
