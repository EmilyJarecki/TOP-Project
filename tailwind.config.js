/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    flex: {
      'carousel-mobile': '0 0 127px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "hych-bg-blue": "#606E90",
        "hych-title-blue": "#243C6C",
        "hych-subheading-blue": "#30528F",
        footer: "#243558",
        inputfield: "#F4F6F8",
      },
      fontFamily: {
        rubik: ["var(--rubik-font)"],
        inter: ["var(--inter-font)"],
      },
      fontSize: {
        xs: "12px",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.441rem",
        "5xl": "3rem",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
