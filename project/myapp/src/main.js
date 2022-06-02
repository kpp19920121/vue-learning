import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import store from './store'
import router from "./router"
import Storage from "vue-ls"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)



Vue.use(axios)

axios.interceptors.request.use(
    config => {
      config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
      config.timeout = 6000
      let token = Vue.ls.get('Access-Token')
      if (token) {
        config.headers = {
          'access-token': token
        }
      }
      if (config.url === 'refresh') {
        config.headers = {
          'refresh-token': sessionStorage.getItem('refresh_token'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
);



Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(Storage,{
  namespace: 'vuejs__', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local', // 存储名称: session, local, memory
});

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')


