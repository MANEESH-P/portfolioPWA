//postcss.config.js
const tailwindcss = require("tailwindcss");
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  theme: {
    extend: {
      colors: {
        // "valorant-violet": "#0f1923",
        "valorant-violet": "#303455",
        "valorant-red": "#ff4655",
      },
      variants: {
        borderColor: ["responsive", "hover", "focus", "focus-within"],
        borderWidth: ["responsive", "hover", "focus", "focus-within"],
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
};
