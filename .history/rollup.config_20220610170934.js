import { name } from './package.json'
import vue from 'rollup-plugin-vue'

const file = type => `dist/${name}.${type}.js`
export default {
  input: "src/App.vue",
  output: {
    name,
    file: file('esm'),
    format: "es"
  },
  plugins: [vue()]
}