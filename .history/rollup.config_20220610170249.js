import json from '@rollup/plugin-json'

export default {
  input: "main.js",
  output: {
    file: 'dist/bundle.js',
    format: "es"
  },
  plugins: [json()]
}