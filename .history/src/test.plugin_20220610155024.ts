/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-06-10 15:47:39
 * @LastEditTime: 2022-06-10 15:50:23
 * @FilePath: \lego-component\src\test.plugin.ts
 */
import type { App } from 'vue';

const plugins = {
  install: (app: App) => {
    //

    app.config.globalProperties.$echo = () => {};
  },
};
export default plugins;
