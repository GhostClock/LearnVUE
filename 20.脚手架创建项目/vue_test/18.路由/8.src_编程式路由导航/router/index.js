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
export default new VueRouter({
    routes: [
        {   
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name: "detail",
                            // path: 'detail/:id/:title', // 配置params参数
                            path: 'detail',//使用query传参时不带参数
                            component: Detail,
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
