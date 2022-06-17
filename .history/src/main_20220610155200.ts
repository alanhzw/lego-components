import { createApp } from 'vue';
import App from './App.vue';
import testPlugin from './test.plugin';

const app = createApp(App);
app.mount('#app');
