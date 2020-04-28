import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/menu',
      name: 'menu',
      component: ()=>import ('@/components/login/menu')
    },*/
    {
      path: '/home',
      name: 'home',
      component: ()=>import ('@/components/login/home'),
      children:[
        {
          path: "/menu",
          component: require('@/components/login/menu')
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
