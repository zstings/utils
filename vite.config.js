import { defineConfig } from 'vite'
import {resolve} from 'path'
import {name} from './package.json'

export default defineConfig({
  plugins: [],
  build:{
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'tingsUtils',
      format: ['es', 'cjs'],
      fileName: name
    },
  }
})
