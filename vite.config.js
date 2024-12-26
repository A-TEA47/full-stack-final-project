import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000, // Set the local development server port
  },

  build: {
    rollupOptions: {
      external: ['your-problematic-module'], // Replace 'your-problematic-module' with the module name from the error log
    },
  },
})
