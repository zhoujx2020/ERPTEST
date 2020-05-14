// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'

//自己写的样式

// 注册element-ui
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://127.0.0.1:8081/api/user/login';
axios.interceptors.request.use(config =>{
  console.info(config);
  return config
}),
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
