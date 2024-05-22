import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true
  },
  server: {
    host: '0.0.0.0', // Change to '0.0.0.0' for outside access
    port: 8080,
  }
})
