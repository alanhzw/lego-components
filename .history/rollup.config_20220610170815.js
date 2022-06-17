import json from '@rollup/plugin-json'
import { name } from './package.json'

const file = type => `dist/${name}.${type}.js`
export default {
  input: "src/App.vue",
  output: {
    name,
    file: file('esm'),
    format: "es"
  },
  plugins: [json()]
}