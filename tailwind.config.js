const colors = require("tailwindcss/colors");
const mdx = require("@mdx-js/mdx");

module.exports = {
  // mode: "jit",
  purge: {
    content: ["./src/pages/**/*.{ts,tsx,js,mdx}", "./next.config.js"],
    transform: {
      mdx: mdx.sync,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#05678B",
        dark: "#04162C",
        light: "#329BA9",
        danger: "#F2622D",
        warning: "#F9F4D4",
        code: {
          green: "#b5f4a5",
          yellow: "#ffe484",
          purple: "#d9a9ff",
          red: "#ff8383",
          blue: "#93ddfd",
          white: "#fff",
        },
      },
      inset: {
        "-16": "-4rem",
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.700"),
          h2: {
            fontWeight: "700",
            letterSpacing: theme("letterSpacing.tight"),
            color: theme("colors.gray.900"),
          },
          h3: {
            fontWeight: "600",
            color: theme("colors.gray.900"),
          },
          "ol li:before": {
            fontWeight: "600",
            color: theme("colors.gray.500"),
          },
          "ul li:before": {
            backgroundColor: theme("colors.gray.400"),
          },
          code: {
            color: theme("colors.gray.900"),
          },
          a: {
            color: theme("colors.gray.900"),
          },
          pre: {
            color: theme("colors.gray.200"),
            backgroundColor: theme("colors.gray.800"),
          },
          blockquote: {
            color: theme("colors.gray.900"),
            borderLeftColor: theme("colors.gray.200"),
          },
        },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("@tailwindcss/typography"),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "normal",
            fontNamedInstance: "Regular",
            fontDisplay: "swap",
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "italic",
            fontNamedInstance: "Italic",
            fontDisplay: "swap",
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ]);
    },
  ],
  xwind: {
    mode: "objectstyles",
  },
};
