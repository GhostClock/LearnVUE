
import { 
  createRouter, 
  createWebHistory, 
  // createWebHashHistory 
} from 'vue-router'

// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

// 配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName:"home-chunk" */'../pages/Home.vue')
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about-chunk" */'../pages/About.vue')
  }
]

// 配置路由对象 router
const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router




