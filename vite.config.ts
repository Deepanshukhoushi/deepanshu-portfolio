import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    // Three.js chunks are large — raise the warning threshold
    chunkSizeWarningLimit: 1000,
    // Never inline assets as base64; always emit separate files
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy vendors into separate cached chunks
          "vendor-react": ["react", "react-dom"],
          "vendor-three": ["three", "three-stdlib"],
          "vendor-gsap": ["gsap", "gsap-trial"],
        },
      },
    },
  },
});
