import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// 文件名称
import { name } from './package.json'

// 文件
const file = type => `dist/${name}.${type}.js`

// 开启 ts 的类型声明文件打包
const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['src/main.ts', 'node_modules', 'src/App.vue']
}

export default {
  input: "src/index.ts",
  output: {
    name,
    file: file('esm'),
    format: "es"
  },
  plugins: [
    nodeResolve(),
    vue(),
    css({ output: 'bundle.css' }),
    ts({ tsconfigOverride: overrides })
  ],
  external: ['vue', 'load']
}