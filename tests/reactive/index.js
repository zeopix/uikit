import App from './app.vue';
import Vue from 'vue';
import UIkit from '../../src/js/uikit';

window.UIkit = UIkit;

const app = new Vue(Object.assign(App));
app.$mount('#app');