import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury palette
        sand: {
          50:  "#faf8f4",
          100: "#f5f0e8",
          200: "#ece3d0",
          300: "#dfd0b3",
          400: "#cdb890",
          500: "#bda070",
          600: "#a88852",
          700: "#8c7043",
          800: "#725a38",
          900: "#5e4a2f",
        },
        limestone: {
          50:  "#f9f7f4",
          100: "#f0ece5",
          200: "#e2d9cc",
          300: "#cfc0a8",
          400: "#b8a082",
          500: "#a58a66",
          600: "#977657",
          700: "#7e614a",
          800: "#67503f",
          900: "#554235",
        },
        charcoal: {
          900: "#0e0e0e",
          800: "#1a1a1a",
          700: "#242424",
          600: "#2e2e2e",
          500: "#3d3d3d",
        },
        bronze: {
          300: "#d4a96a",
          400: "#c8983f",
          500: "#b5861e",
          600: "#9a7018",
        },
        olive: {
          400: "#6b7c5c",
          500: "#556648",
          600: "#435239",
        },
        cream: "#faf8f3",
        parchment: "#f2ede4",
      },
      fontFamily: {
        serif:  ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans:   ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-bodoni)", "Bodoni Moda", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-2xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl":  ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md":  ["clamp(1.5rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "section": "clamp(5rem, 10vw, 9rem)",
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(32px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideLeft: { from: { opacity: "0", transform: "translateX(32px)" }, to: { opacity: "1", transform: "translateX(0)" } },
      },
      backgroundImage: {
        "gradient-luxury": "linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 50%, #242424 100%)",
        "gradient-sand":   "linear-gradient(180deg, rgba(250,248,243,0) 0%, #faf8f3 100%)",
        "gradient-hero":   "linear-gradient(to bottom, rgba(14,14,14,0.55) 0%, rgba(14,14,14,0.3) 40%, rgba(14,14,14,0.7) 100%)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
