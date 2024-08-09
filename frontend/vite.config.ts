import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 3333,
    hmr: {
      path: '/ws',
      clientPort: 3332,
      port: 3332
    },
    watch: {
      usePolling: true,
    },

  }
})
