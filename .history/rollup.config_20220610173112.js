import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import ts from 'rollup-plugin-typescript2'
import { name } from './package.json'
// 开启 ts 的类型声明文件打包
const overrides = {
  compilerOptions: {
    declaration: true
  }
}

const file = type => `dist/${name}.${type}.js`
export default {
  input: "src/App.vue",
  output: {
    name,
    file: file('esm'),
    format: "es"
  },
  plugins: [vue(), css({ output: 'bundle.css' }), ts(overrides)]
}