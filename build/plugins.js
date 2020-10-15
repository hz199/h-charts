import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import cssnano from 'cssnano'

const extensions = ['.ts', '.js', '.tsx']

export default [
  typescript({
    lib: ['es5', 'es6', 'dom'],
    target: 'es5',
    noEmitOnError: true,
  }),
  resolve({ mainFields: ['module', 'main', 'browser'] }),
  commonjs({ extensions, sourceMap: true }),
  babel({ babelHelpers: 'bundled', extensions }),
  postcss({
    plugins: [cssnano],
    extract: 'dist/css/z-style.css',
  }),
]
