import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",

        /* 🔴 Crimson Theme */
        accent: "var(--accent)",
        "accent-alt": "var(--accent-alt)",
        "accent-hover": "var(--hover)",

        border: "var(--border)",
        "card-bg": "var(--card-bg)",

        success: "var(--success)",
        error: "var(--error)",
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "96px",
        "3xl": "128px",
        "section-padding-desktop": "160px",
        "section-padding-mobile": "80px",
      },

      borderRadius: {
        button: "999px",
        card: "12px",
        image: "12px",
        input: "8px",
        tech: "999px",
      },

      /* 🔥 Enhanced shadows for red glow */
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(220, 20, 60, 0.6)",
        "glow-lg": "0 0 40px rgba(220, 20, 60, 0.4)",
      },

      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },

      screens: {
        tablet: "768px",
        desktop: "1024px",
        large: "1440px",
      },

      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      animation: {
        "marquee-left": "marquee-left var(--duration, 20s) linear infinite",
        "marquee-right": "marquee-right var(--duration, 20s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;