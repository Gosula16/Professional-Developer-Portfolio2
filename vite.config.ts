import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'Professional-Developer-Portfolio2';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
