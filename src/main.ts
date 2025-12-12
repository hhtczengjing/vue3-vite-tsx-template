import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createApp } from 'vue';
import App from './App';
import Vant from 'vant';
import VConsole from 'vconsole';
import '@/assets/css/reset.css';
import 'vant/lib/index.css';

createApp(App)
  .use(Vant)
  .mount('#app');

// 在开发环境下启用 vConsole
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-new
  new VConsole();
}