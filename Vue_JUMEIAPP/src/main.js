import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'lib-flexible'
import axios from 'axios'
import { setCookie, getCookie, delCookie } from './forCookie'

// import Swiper from 'swiper'
// import "./assets/js/swiper.min.js";

Vue.prototype.$axios = axios

Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
