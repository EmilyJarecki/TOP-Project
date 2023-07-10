/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
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
    },
  },
  plugins: [],
};
