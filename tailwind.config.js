module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Newsreader", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
