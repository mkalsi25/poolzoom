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
        header: "786px",
        box: "388px",
      },
      maxHeight: {
        mob: "34rem",
      },
      borderRadius: {
        drop: "4px",
      },
      fontSize: {
        title: "100px",
        heading: "36px",
        product: "20px",
        menu: "16px",
        submenu: "14px",
        small: "12px",
      },
      padding: {
        "p-0.2": "6px",
        "p-0.5": "8px",
        "p-0.6": "12px",
        "p-0.8": "13px",
        "p-0.9": "14px",
        "p-1": "16px",
        "p-1.1": "17px",
        "p-1.5": "20px",
        "p-1.8": "22px",
        "p-2": "24px",
        "p-3": "32px",
        "p-3.2": "35px",
        "p-3.5": "40px",
        "p-4": "43px",
        "p-4.5": "45px",
      },
      margin: {
        "m-0.5": "8px",
        "m-0.8": "13px",
        "m-1": "16px",
        "m-1.1": "17px",
        "m-2": "24px",
        "m-3": "32px",
        "m-4": "43px",
      },
      colors: {
        "black-80": "#40434C",
        "black-60": "#5C5E66",
        "black-40": "#1B1C1F",
        "black-20": "#8A8E99",
        colmenu: "#40434C",
        primary: "#F7873B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
