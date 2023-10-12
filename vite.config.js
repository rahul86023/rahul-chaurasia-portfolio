import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Determine the base path based on the GitHub Pages URL structure
const base = "/rahul-chaurasia-portfolio/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
