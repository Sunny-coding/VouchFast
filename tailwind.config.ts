import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        primary: {
          "50": "#effefc",
          "100": "#c8fff8",
          "200": "#92fdf2",
          "300": "#53f5ea",
          "400": "#20e1db",
          "500": "#08d9d6",
          "600": "#039c9e",
          "700": "#077c7e",
          "800": "#0b6264",
          "900": "#0e5153",
          "950": "#012e32",
        },

        secondary: {
          "50": "#ffeff2",
          "100": "#ffe0e6",
          "200": "#ffc6d4",
          "300": "#ff97b0",
          "400": "#ff5d87",
          "500": "#ff2463",
          "600": "#f5004f",
          "700": "#d70045",
          "800": "#b40043",
          "900": "#990240",
          "950": "#57001d",
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
