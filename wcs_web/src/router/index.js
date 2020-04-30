import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'

import Page1 from '@/components/pag1'
import Page2 from '@/components/pag2'
import Page3 from '@/components/pag3'

import Home from '@/components/home1'

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
          path: '/home1',
          name: 'home1',
          component: Home,
    　　　 redirect:"Page1",//重定向，第一次进入就进入Page1，不添加的话第一次进入右侧是空白
          children:[
            {
              path: '/Page1',
              name: 'Page1',
              component: Page1
            },
            {
              path: '/Page2',
              name: 'Page2',
              component: Page2
            },
            {
              path: '/Page3',
              name: 'Page3',
              component: Page3
            }
          ]
        },
    {
      path: '/Layout',
      name: 'layout',
      component: ()=>import ('@/components/Layout'),
      children:[
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3
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
