import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import  Element from 'element-ui'
import Welcome from '@/components/routes/Welcome'
import Home from '@/components/home1'
import User from '@/components/routes/user'

Vue.use(Router)
Vue.use(Element)

const router =  new Router({
  routes: [
    {
        path: '/home1',
        name: 'home1',
        component: Home,
        redirect : '/welcome',
        children : [
          {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
          },
          {
            path: '/users',
            name: 'users',
            component: User
          }
        ],
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    
  ]
})

//挂在路由导航守卫
router.beforeEach((to,from,next) =>{
  //to 需要访问的路径
  //from 从哪个路径跳转
  //next 是一个函数 表示放行
  //1、next（）直接放行
  //2、next（路径path） 强制跳转
  if(to.path === '/') return next();
  //通过token判断是否放行
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/');
  next();
})

export default router
