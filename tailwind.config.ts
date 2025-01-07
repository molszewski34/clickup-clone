import type { Config } from "tailwindcss";  

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#323452",
        sarch: "#5A5C74",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColor: "rgba(8, 128, 234, 1)",
        whitev1: "#FFFFFF",
        white_50:"#f7f8f9",
        white_100: "#F0F1F3",
        blue_600: "#7F77F1",
        blue_550: "#7f77f129",
        blue_400: "#9992F4",
        blue_300:"#544dc9",
        blue_200:"#ccc9fa",
        blue_150:"#5f55ee29",
        blue_100:"#E5E4FC",
        blue_50:"#f2f1fe",
        darkBlue_600: "#43418d",
        darkBlue_500: "#3b3a70",
        darkGray_600: "#2a2e34",
        darkGray_550: "#2a2e3433",
        darkGray_500: "#30353C",
        darkGray_400: "#3C414A",
        darkGray_300: "#4F5762",
        gray_600: "#656F7D",
        gray_100: "rgb(60,65,74)",
        gray_50:"#e8eaed",
        gray_400: "#87909E",
        iconDarkMode: "#999b9e",
      },
      boxShadow: {
        custom:
          "0px 16px 48px 0px rgba(0, 0, 0, 0.24), 0px 24px 96px 0px rgba(0, 0, 0, 0.24)",
        customDoubleBlueShadow_600: "0 0 0 1px #7F77F1, 0 0 0 4px #7f77f129",
        customGrayShadow_300: "0 0 0 1px #e8eaed",
        customGrayShadow_400: "0 0 0 1px #3c414a",
        customBlueShadow_600: "0 0 0 1px #43418d",
        customBlueShadow_500: "0 0 0 1px #ccc9fa",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      backgroundImage: {
        "text-gradient": `linear-gradient(54deg, rgba(8, 128, 234, 1) -3.99%, rgba(137, 32, 254, 1) 39.35%, rgba(233, 61, 130, 1) 72.09%, rgba(233, 61, 195, 1) 72.1%, rgba(198, 42, 182, 1) 92.75%)`,
        "login-page": "url('/background_login.svg')",
      },
      gridTemplateColumns: {
        "custom-grid": "290px repeat(auto-fit, minmax(290px, 1fr))",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(fill|stroke|border|bg)-(white|gray|blue|indigo|sky|teal|emerald|amber|orange|red|pink|purple|stone|black)(-(100|200|300|400|500|600|700|800|900))?$/,
    },
  ],
  plugins: [],
} satisfies Config;
