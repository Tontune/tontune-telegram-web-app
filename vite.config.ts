import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
/// <reference types="vite-plugin-svgr/client" />
export default defineConfig({
  plugins: [svgr(), react(), basicSsl(), nodePolyfills(), tsconfigPaths()],
  base: 'https://tontune.github.io/tontune-telegram-web-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
