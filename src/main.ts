import { createApp } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { MotionPlugin } from '@vueuse/motion';
import './style.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(MotionPlugin);
app.use(autoAnimatePlugin);
app.use(router);
app.mount('#app');
