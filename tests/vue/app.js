import App from './app.vue';
import Vue from 'vue';

Vue.config.silent = !DEBUG;
const app = new Vue(Object.assign(App));
app.$mount('#app');