module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Sofia Pro"],
    },
    extend: {
      height: {
        mob: "34rem",
      },
      maxHeight: {
        mob: "34rem",
      },
      fontSize: {
        title: "100px",
      },
      colors: {
        "black-80": "#40434C",
        "black-60": "#5C5E66",
        "black-40": "#1B1C1F",
        primary: "#F7873B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
