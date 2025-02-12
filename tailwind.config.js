/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ['"Nanum Myeongjo"', "serif"],
      "sans-serif": ['"Poppins"', "sans-serif"],
    },

    container: {
      center: true, // Center the container by default
      padding: {
        DEFAULT: "1rem",
        xl: "0px",
      },
      screens: {
        sm: "640px", // Small screen starts at 640px
        md: "768px", // Medium screen starts at 768px
        lg: "1024px", // Large screen starts at 1024px
        xl: "1280px", // Largest screen size is 1240px
      },
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#1FA888", light: "#EAF9F5" },
        black: "#252525",
        dark: "#151515",
        grey: "#596172",
        white: "#FFFFFF",
      },
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1140px", // Extra large screens
        "2xl": "1240px", // Custom breakpoint for the largest screens
      },
    },
  },
  plugins: [],
};
