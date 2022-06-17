import json from '@rollup/plugin-json'
import { name } from './package.json'
export default {
  input: "src/App.vue",
  output: {
    name
    file: 'dist/bundle.js',
    format: "es"
  },
  plugins: [json()]
}