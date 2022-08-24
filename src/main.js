import Vue from 'vue'
import App from './App.vue'
import router from './router'
import layer from 'vue-layer';
import 'vue-layer/lib/vue-layer.css';
import axios from 'axios';
import store from './store';
import './assets/font/iconfont.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Chat from 'jwchat';

Vue.use(Chat)
Vue.use(ElementUI)

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
