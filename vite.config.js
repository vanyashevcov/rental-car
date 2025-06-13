import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  server: {
    historyApiFallback: {
      index: '/index.html',
    },
  },
  preview: {
    historyApiFallback: {
      index: '/index.html',
    },
  },
});
