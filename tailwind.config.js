module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Sofia Pro"],
    },
    extend: {
      height: {
        mob: "30rem",
      },
      colors: {
        "black-80": "#40434C",
        primary: "#F7873B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
