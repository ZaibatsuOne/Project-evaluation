/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        systemWhite: "#FFFFFF",
        systemBlack: "#000000",
        systemDarkGrey: "#18181B",
        systemGrey: "#8E8E93",
        systemGrey2: "#AEAEB2",
        systemGrey3: "#C7C7CC",
        systemGrey4: "#D1D1D6",
        systemGrey5: "#E5E5EA",
        systemBlue: "#0A84FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(10deg)",
          },
          "75%": {
            transform: "rotate(-10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
