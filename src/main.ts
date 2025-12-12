import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createApp } from 'vue';
import App from './App';
import '@/assets/css/reset.css';
import 'vant/lib/index.css';
import Vant from 'vant';
import VConsole from 'vconsole';

createApp(App)
  .use(Vant)
  .mount('#app');

new VConsole();
