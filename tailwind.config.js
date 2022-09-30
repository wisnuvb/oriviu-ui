const aspectRatio = require("@tailwindcss/aspect-ratio");
const scrollbarHide = require("tailwind-scrollbar-hide");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0995D3",
        primary2: "#C9E8F5",
        primary3: "#dae2fe",
        primary4: "#5e85fb",
        danger: "#D44A1E",
        danger2: "#FF1414",
        secondary: "#9733ff",
        secondary2: "#b480f1",
        success: "#32ff55",
        success2: "#55ba6c",
        success3: "#07c97a",
        textHeading1: "#404040",
        textHeading2: "#2B2C3E",
        textHeading3: "0D0846",
        textBody1: "#8D8D8D",
        textBody2: "#898A9F",
        textBody3: "#362e49",
        textBody4: "#5d6163",
        inactive: "#ABABAB",
        background: "#F8F7FF",
        background2: "#f5f2f7",
        border: "#E8E8E8",
        warning: "#FFCA22",
        ...colors,
      },
      fontFamily: {
        Nunito: ["Nunito"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [aspectRatio, scrollbarHide],
};
