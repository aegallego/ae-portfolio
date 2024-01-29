import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        adelia: ["var(--font-adelia)"],
        vico: ["var(--font-vico)"],
        audrey: ["var(--font-audrey)"],
        poppins: ["var(--font-poppins)"],
        helveticaultralight: ["var(--font-helveticaultralight)"],
      },
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
        slateblack: {
          50: "#100f0c",
        },
        grayblack: {
          50: "#555350",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      container: {
        center: true,
        padding: {
          // DEFAULT: '3rem 1.5rem',
          // md: "5rem 3rem",
          // lg: '0rem 6rem',
          DEFAULT: "1.5rem",
          md: "3rem",
          lg: "6rem",
        },
        screens: {
          xs: "475px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          // "2xl": "1536px",
          // "3xl": "1792px",
        },
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [require("@codaworks/react-glow/tailwind")],
};
export default config;
