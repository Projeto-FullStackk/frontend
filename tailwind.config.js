const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "luxury-car": "url('/images/car.png')",
      },
      colors: {
        brand: {
          1: "#4529E6",
          2: "#5126EA",
          3: "#B0A6F0",
          4: "#EDEAFD",
        },
        gray: {
          0: "#0B0D0D",
          1: "#212529",
          2: "#495057",
          3: "#868E96",
          4: "#ADB5BD",
          5: "#CED4DA",
          6: "#DEE2E6",
          7: "#E9ECEF",
          8: "#F1F3F5",
          9: "#F8F9FA",
          10: "#FDFDFD",
          white: "#ffffff",
        },
        feedback: {
          alert1: "#CD2B31",
          alert2: "#FDD8D8",
          alert3: "#FFE5E5",
          sucess1: "#18794E",
          sucess2: "#CCEBD7",
          sucess3: "#DDF3E4",
        },
        random: {
          1: "#E34D8C",
          2: "#C04277",
          3: "#7D2A4D",
          4: "#7000FF",
          5: "#6200E3",
          6: "#36007D",
          7: "#349974",
          8: "#2A7D5F",
          9: "#153D2E",
          10: "#6100FF",
          11: "#5700E3",
          12: "#30007D",
        },
      },
      fontFamily: {
        lex: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      container: {
        md: "1024px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".bg-gradient-black": {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 75%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
