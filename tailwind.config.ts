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
          DEFAULT: "#101010", // WAMOCON dark background
          foreground: "#FFFFFF",
          light: "#303030", // WAMOCON card background
        },
        accent: {
          DEFAULT: "#fe0404", // WAMOCON red
          foreground: "#FFFFFF",
          hover: "#de0303", // Darker red for hover (better contrast)
          light: "#ff3d33", // Lighter red for secondary elements
        },
        background: "#101010", // Dark background like test-it-academy
        "background-alt": "#1a1a1a", // Slightly lighter than primary
        "background-card": "#303030", // Card background
        foreground: "#FFFFFF", // Primary text color
        "foreground-muted": "#b3b3b3", // Muted text (WCAG AA compliant on #101010)
        border: "#404040", // Subtle borders
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
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
        cta: "0 4px 20px rgba(254, 4, 4, 0.3)", // Red glow for CTAs
        card: "0 1px 3px rgba(0, 0, 0, 0.3)", // Darker shadow for dark theme
        "card-hover": "0 8px 24px rgba(254, 4, 4, 0.2)", // Red glow on hover
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
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
      },
    },
  },
  plugins: [],
};

export default config;
