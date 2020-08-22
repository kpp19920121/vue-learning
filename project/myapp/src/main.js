import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from "./router"



Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
