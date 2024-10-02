/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  extend: {
    colors: {
      softBlue: "hsl(231, 69%, 60%)",
      softRed: "hsl(0, 94%, 66%)",
      grayishBlue: "hsl(229, 8%, 60%)",
      veryDarkBlue: "hsl(229, 31%, 21%)",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      alata: ["Alata", "sans-serif"],
    },
    latterSpacing: {
      widest: ".3em",
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
};
export const plugins = [];
