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
        primary: {
          DEFAULT: "#151515", // WAMOCON dark background - Lightened
          foreground: "#FFFFFF",
          light: "#303030", // WAMOCON card background
        },
        accent: {
          DEFAULT: "#FF0B00", // WAMOCON official red
          foreground: "#FFFFFF",
          hover: "#CC0900", // Darker shade for hover
          light: "#ff3d33", // Lighter red for secondary elements
        },
        background: "#151515", // Dark background - Lightened
        "background-alt": "#1F1F1F", // Slightly lighter than primary - Lightened
        "background-card": "#292929", // Increased contrast card background - Lightened
        "background-red-dark": "#250B0B", // Very dark red for section variance - Lightened
        foreground: "#FFFFFF", // Primary text color
        "foreground-muted": "#d4d4d4", // Higher contrast muted text for accessibility
        border: "#404040", // Subtle borders
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["monospace"],
      },
      fontSize: {
        "display-lg": ["56px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["42px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      spacing: {
        section: "120px",
        "section-mobile": "80px",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      boxShadow: {
        cta: "0 4px 10px rgba(0, 0, 0, 0.4)", // Cleaner shadow
        card: "0 1px 3px rgba(0, 0, 0, 0.3)", // Darker shadow for dark theme
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.5)", // Stronger shadow on hover, no red glow
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "dialog-overlay-in": "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "dialog-content-in": "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
