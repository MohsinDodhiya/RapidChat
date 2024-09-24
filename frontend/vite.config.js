import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        //target: "http://localhost:3001",   // LocalHost
        target: "https://rapidchat-backend-ctip.onrender.com", // renderHosting
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
