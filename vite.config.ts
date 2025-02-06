import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  css: {
    devSourcemap: true,
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: {
        pattern: '[hash]__[local]'
      }
    }
  },
  build: {
    cssMinify: 'lightningcss'
  },
  server: {
    port: 3000
  },
  base: ''
})
