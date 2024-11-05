import { defineConfig } from 'vite'
import { resolve, basename } from 'node:path'
import fs from 'node:fs'
import { uname } from './package.json'

export default defineConfig({
	plugins: [
		{
			name: 'vite-plugin-jscode',
			apply: 'build',
			transform(code, id) {
				if (id.includes('.ts') && !id.includes('index.ts')) {
					fs.mkdirSync('./temp_code/', { recursive: true })
					fs.writeFileSync('./temp_code/' + basename(id), code.replace(' /* @__PURE__ */', '').replaceAll(`"`, `'`), 'utf-8')
				}
			},
		}
	],
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
      name: 'utils',
      format: ['es', 'cjs'],
      fileName: format => `${uname}.${format}.js`
    }
  },
  server: {
    host: '0.0.0.0'
  },
  test: {
		// reporters: ['default', 'json'],
		coverage: {
			enabled: true,
			// provider: 'istanbul',
			cleanOnRerun: true,
			reporter: ['text', 'json', 'html'],
			include: ['src/**'],
		},
	},
})
