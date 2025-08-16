import { type ThemeConfig } from "tailwindcss/types/config"

export const shadcnTheme: ThemeConfig = {
  colors: {
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
  },
}
