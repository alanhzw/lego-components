// 打包 vue 文件
import vue from 'rollup-plugin-vue'
// 打包 css
import css from 'rollup-plugin-css-only'
// 打包 ts 文件
import ts from 'rollup-plugin-typescript2'
// 打包依赖
import { nodeResolve } from '@rollup/plugin-node-resolve'
// 文件名称
import { name } from './package.json'

import json from '@rollup/plugin-json'

function exPlugin() {
  return {
    name: "my-plugin",
    buildStart(options) {
      console.log('🚀🚀 buildStart ~ options', options);
    },
    load(id) {
      console.log('🚀🚀 load ~ id', id);
    },
    transform(code, id) {
      console.log('🚀🚀 transform ~ id', id);
      console.log('🚀🚀 transform ~ code', code);
    },
    buildEnd(error) {
      console.log('🚀🚀 buildEnd ~ error', error);
    }

  }
}

// 文件
const file = type => `dist/${name}.${type}.js`

export { name, file }

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
    // nodeResolve(),
    // vue(),
    // css({ output: 'bundle.css' }),
    // ts({ tsconfigOverride: overrides })
    exPlugin
  ],
  // 排除需要打包的第三方库
  // external: (id) => {
  //   return /^vue/.test(id)
  // }
  external: ['vue', 'lodash-es']
}