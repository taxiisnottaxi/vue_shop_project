/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/home',
      component: Home,
      redirect: 'welcome',
      children: [{ path: '/welcome', component: Welcome },{ path: '/users', component: Users }]
    }
  ]
})

// 路由导航守卫控制访问权限：
// 如果用户没有登录，但是直接通过URL访问特定页面，需要雄心导航到登录页面
// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to代表将要访问的路径
  // from代表从那个路径跳转而来
  // next是一个函数，表示放行
  //   next() 放行  next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  console.log(tokenStr)
  if (!tokenStr) return next('/login')
  next()
})

export default router
