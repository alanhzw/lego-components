/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-06-13 16:27:53
 * @LastEditTime: 2022-06-13 16:36:05
 * @FilePath: \lego-component\rollup.umd.config.js
 */
import baseConfig, { name, file } from './rollup.config'

export default {
  ...baseConfig,
  output: {
    name,
    file: file('umd'),
    format: 'umd'
  }
}