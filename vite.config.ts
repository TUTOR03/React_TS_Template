import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    strictPort: true,
    host: '0.0.0.0',
  },
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
})
