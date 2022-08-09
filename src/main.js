import Vue from 'vue'
import App from './App.vue'
import router from './router'
import layer from 'vue-layer';
import 'vue-layer/lib/vue-layer.css';
import axios from 'axios';
import store from './store';
import './assets/font/iconfont.css';
import loading from './components/loading/loading.js';

Vue.use(loading);
Vue.config.productionTip = false;
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$axios = axios;

new Vue({
  el:'#app',
  router,
  store,
  layer,
  render: h => h(App)
})
