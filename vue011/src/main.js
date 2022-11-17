import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  // 在最后必须return config
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
