import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        ink: {
          900: { value: "#0C0B09" },
          800: { value: "#1A1916" },
          700: { value: "#2E2C28" },
          600: { value: "#494540" },
          400: { value: "#6B6660" },
          200: { value: "#A09A94" },
        },
        coral: {
          500: { value: "#E8512A" },
          200: { value: "#F07A54" },
          600: { value: "#C94420" },
        },
      },
      fonts: {
        heading: { value: "var(--font-manrope), sans-serif" },
        body: { value: "var(--font-dm-mono), monospace" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
