import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), nodePolyfills(), tsconfigPaths()],
  build: {
    outDir: "./docs",
  },
  base: "/tontune-telegram-web-app/",
});
