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
        primary: "#1A2B6D",
        "primary-dark": "#001456",
        accent: "#C0392B",
        "accent-dark": "#A93226",
        dark: "#0D1117",
        light: "#F5F7FA",
        mid: "#E8ECF0",
        "body-text": "#1C1C1E",
        muted: "#6B7280",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
