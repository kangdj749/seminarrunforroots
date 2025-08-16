import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // ✅ FIX: cukup string "class"
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7c3aed", // Ungu utama
          light: "#a78bfa",   // Ungu muda
          dark: "#5b21b6",    // Ungu tua
          accent: "#ec4899",  // Pink aksen
        },
        gradientStart: "#6366f1",
        gradientEnd: "#ec4899",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 10px 25px -5px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // animasi shadcn/ui
  ],
}

export default config
