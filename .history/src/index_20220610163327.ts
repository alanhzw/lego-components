// 整个项目的入口文件
import type { App } from 'vue';

import LText from './components/LText';

const components = [LText];
const install = (app: App) => {
  components.forEach((c) => {
    app.component(c.name, c);
  });
};

export { LText, install };
