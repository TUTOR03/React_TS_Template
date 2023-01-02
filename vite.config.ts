import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import { peerDependencies } from './package.json'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    tsConfigPaths(),
    dts({
      exclude: [path.resolve(__dirname, './src/vite-env.d.ts')],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/lib.ts'),
      name: 'MyLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
})
