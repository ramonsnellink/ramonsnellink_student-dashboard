const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx", "public/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Build your palette here
        emerald: colors.emerald,
        blue: colors.lightBlue,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};
