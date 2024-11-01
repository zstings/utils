import { defineConfig } from 'vite'
import { resolve } from 'path'
import { uname } from './package.json'

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
      exclude: [
				'coverage/**',
				'dist/**',
				'docs/**',
				'docsvite/**',
				'run.js',
				'**/node_modules/**',
				'**/[.]**',
				'packages/*/test?(s)/**',
				'**/*.d.ts',
				'**/virtual:*',
				'**/__x00__*',
				'**/\x00*',
				'cypress/**',
				'test?(s)/**',
				'test?(-*).?(c|m)[jt]s?(x)',
				'**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
				'**/__tests__/**',
				'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
				'**/vitest.{workspace,projects}.[jt]s?(on)',
				'**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
			]
		},
	},
})
