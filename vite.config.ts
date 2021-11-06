import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteCommonjs({
      exclude: ['jsdom'],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['jsdom'])],
    },
  },
});
