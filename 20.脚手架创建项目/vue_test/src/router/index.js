// 该文件专门用于创建整个应用的路由器

// 引入vuerouter
import VueRouter from "vue-router"

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {   
            name: 'about',
            path: '/about',
            component: About,
            meta: {
                title: "关于"
            }
        },
        {
            name:  "zhuye",
            path: '/home',
            component: Home,
            meta: {
                title: "主页"
            },
            children:[
                {   
                    name: "news",
                    path: 'news',
                    component: News,
                    meta:{ 
                        isAuth: true,
                        title: "新闻"
                    },
                },
                {
                    name: "xiaoxi",
                    path: 'message',
                    component: Message,
                    meta:{ 
                        isAuth: true,
                        title: "消息"
                    },
                    children:[
                        {
                            name: "detail",
                            // path: 'detail/:id/:title', // 配置params参数
                            path: 'detail',//使用query传参时不带参数
                            component: Detail,
                            meta:{ 
                                isAuth: true,
                                title: "详情"
                            },
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
                            // props: { a: 111, b: "Hello" }

                            // props的第二种写法，值为布尔值,若布尔值为ture，就会把该路由组件收到的所有params参数，以props的形式传递给Detail组件
                            // props: true

                            // props的第三种写法，值为函数
                            props($router) { // 原始写法
                                return {
                                    id: $router.query.id,
                                    title: $router.query.title,
                                }
                            },
                            // props({query:{id, title}}) { // 结构赋值
                            //     return {id, title}
                            // },
                        }
                    ]
                },
            ],
        },
    ]
})

/* 全局前置路由守卫
    调用时机:
        初始化的时候被调用
        每次路由切换之前被调用
*/    
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    // 用路径做判断
    // if (to.path === '/home/news' || to.path == '/home/message') {
    
    // 用name做判断
    // if (to.name === 'news' || to.name == 'xiaoxi') {
    
    // 用meta里面的数据进行判断，是否需要鉴权
    if(to.meta.isAuth){
        if (localStorage.getItem('auth') === 'xyz123') {
            next()
        } else {
            alert("鉴权不过，不能查看相关内容!!!")
        }
    } else {
        next()
    }
})

/* 全局后置路由守卫
    调用时机:
        初始化的时候被调用
        每次路由切换之后被调用
*/
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title || "硅谷系统"
})

export default router