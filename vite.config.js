import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],   // split react core
          vendor: ['lottie-web'],          // split lottie
        },
      },
    },
    chunkSizeWarningLimit: 1500, // increase limit from 500kb → 1.5mb
  },
})
