import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Core': path.resolve(__dirname, './sdk'),
      '@CoreComponents': path.resolve(__dirname, './sdk/components'),
      '@CoreHelpers': path.resolve(__dirname, './sdk/helpers'),
      '@CorePages': path.resolve(__dirname, './sdk/pages'),
      '@CoreServices': path.resolve(__dirname, './sdk/services'),
    },
  },
});
