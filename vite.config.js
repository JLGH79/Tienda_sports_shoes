import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Tienda_sports_shoes/", 
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
