import { defineConfig } from 'vite'
import { resolve } from 'path'
import { name } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@types': resolve(__dirname, 'types')
    }
  },
  build: {
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'tingsUtils',
      format: ['es', 'cjs'],
      fileName: format => `${name}.${format}.js`
    }
  }
})
