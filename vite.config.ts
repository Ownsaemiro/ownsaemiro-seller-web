import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/components", replacement: "/src/components" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/hooks", replacement: "/src/hooks" },
      { find: "@/interface", replacement: "/src/interface" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/apis", replacement: "/src/apis" },
      { find: "@", replacement: "/src" },
    ],
  },
});
