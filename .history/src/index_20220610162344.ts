/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-06-10 15:21:30
 * @LastEditTime: 2022-06-10 16:23:40
 * @FilePath: \lego-component\src\index.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import testPlugin from './test.plugin';

const app = createApp(App);
app.use(testPlugin);
app.mount('#app');
