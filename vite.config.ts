import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Terminal from 'vite-plugin-terminal'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Terminal()],
  optimizeDeps: {
    exclude: ['chunk-AECS3VF7']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@config': path.resolve(__dirname, './src/config'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@form': path.resolve(__dirname, './src/form'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
    }
  }
})
