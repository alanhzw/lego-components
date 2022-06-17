/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-06-10 15:47:39
 * @LastEditTime: 2022-06-10 16:02:58
 * @FilePath: \lego-component\src\test.plugin.ts
 */
import type { App } from 'vue';
import GlobalComponent from './components/GlobalComponent.vue';

const plugins = {
  install: (app: App) => {
    app.component('global-component', GlobalComponent);
    app.provide;
  },
};
export default plugins;
