import * as path from 'path';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteYaml(),
    visualizer({
      title: 'Package size',
      filename: 'stats/index.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  envPrefix: 'VALKYRIE_'
});
