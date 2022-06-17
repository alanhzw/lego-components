// 整个项目的入口文件
import type { App } from 'vue';

import LText from './components/LText';
import LImage from './components/LImage';

const components = [LText, LImage];

const install = (app: App) => {
  components.forEach((c) => {
    app.component(c.name, c);
  });
};

export { LText, install };

export default {
  install,
};
