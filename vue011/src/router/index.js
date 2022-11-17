import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
// 导入全局样式表
import '../assets/CSS/global.css'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({

  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users }]
    }
  ]

})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径 
  // from 代表从哪个路径跳转而来
  // next 是一个函数 表示放行
  // next() 放行 next('/login') 强制跳转到该路径


  if (to.path === '/login') return next()
  // 是否访问登录页面 是的话直接放行
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()

})

export default router
