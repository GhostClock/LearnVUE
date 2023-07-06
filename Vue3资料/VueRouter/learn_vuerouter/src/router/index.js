
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
    name: 'home',
    component: () => import(/* webpackChunkName:"home-chunk" */'../pages/Home.vue'),
    meta: {

    },
    children: [
      // 二级路由重定向
      {
        path: '',
        redirect: '/home/message'
      },
      {
        path: 'message',
        component: () => import('../pages/HomeMessage.vue')
      },
      {
        path: 'shops',
        component: () => import('../pages/HomeShops.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/user/:username/id/:id',
    name: 'user',
    component: () => import('../pages/User.vue')
  },
  {
    // 不存在的路由页面
    path: '/:pachMatch(.*)', // 后面加*，可以自动分隔成数组
    component: () => import('../pages/NotFound.vue')
  }
]

// 配置路由对象 router
const router = createRouter({
  routes,
  history: createWebHistory(),
})

// 动态添加一级路由
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category.vue')
}
router.addRoute(categoryRoute)

// 动态添加二级路由
router.addRoute('home', {
  path: 'moment',
  component: () => import('../pages/HomeMoment.vue')
})

export default router




