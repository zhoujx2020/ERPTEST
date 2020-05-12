import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import  Element from 'element-ui'

import Home from '@/components/home1'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
        path: '/home1',
        name: 'home1',
        component: Home,
        
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
