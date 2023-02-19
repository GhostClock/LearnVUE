# 笔记
## 1.常用命令
- 1.先安装@vue/cli 安装命令：`npm install -g @vue/cli`
- 2.在命令行执行 `vue create project_name`
- 3.进入到project_name中执行 `npm run serve`
- 4.导出默认配置项 `vue inspect > output.js`

## 2.脚手架文件分析:
```
.
├── node_modules: 存放依赖模块
├── public
│	 ├── favicon.ico: 页签图标
│	 └── index.html: 主页面
├── src
│	 ├── App.vue: 汇总所有组件
│	 ├── assets: 存放静态资源
│			└── logo.png
│	 ├── components: 存放组件
│	 │		└── HelloWorld.vue
│	 └── main.js: 入口文件
├── README.md: 应用描述文件
├── babel.config.js: babel的配置文件
├── jsconfig.json
├── package-lock.json: 包版本控制文件
├── package.json: 应用包配置文件
└── vue.config.js: 配置文件
```

## 3.关于不同版本的Vue:
- vue.js与vue.runtime.xxx.js的区别：
    1.vue.js是完整版的Vue，包含：核心功能+模板解析器
    2.vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用templete配置项，需要
    render函数接受到的createELement函数去指定具体内容

## 4.vue.config.js配置文件:
> 使用```vue inspect > output.js```可以查看到Vue脚手架的默认配置
> 使用```vue.config.js```可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh


## 5.ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
    3.使用方式：
        打标识：<h1 ref="xxx">...</h1> 或者<WebSite ref='xxx'/>
        获取：this.$ref.xxx

## 6.配置项porps
    功能：让组件接受外部传过去的数据
        1.传递数据
            <Demo name='xxx' />
        2.接受数据：
            第一种方式(只接受)：
                props:['name']
            第二种方式(限制类型)：
                porps:{
                    name: String
                }
            第三种方式(限制类型，限制必要性，指定默认值):
                props:{
                    name:{
                        type: String,// 类型
                        required: true,// 必要性
                        default: '张三',// 默认值
                    }
                }
    备注：props是只读的，Vue底层会检测对props的修改，如果进行了修改，就会发出警告
        若业务需求确实需要修改，那么需要复制props的内容到data中一份，然后修改data中的数据

## 7.mixin(混入)
    功能：可以把多个组件公用的配置提取成一个混入对象
    使用方法：
        第一步:定义一个混入，例如：
            {
                data() { .... },
                methods: { ... },
                ...
            }
        第二步: 使用混入，例如：
            1.全局混入：Vue.mixin(xxx)
            2.局部混入：mixins:[ xxx ]

## 8.插件
    功能: 用于增强Vue
    本质: 包含install方法的一个对象，install的第一个参与是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install = function(Vue, options) {
            // 1.添加全局过滤器
            Vue.filter(...)

            // 2.添加全局指令
            Vue.directive(...)

            // 3.配置全局混入
            Vue.mixin(...)

            // 4.添加实例方法
            Vue.prototype.$myMethod = function() {...}
            Vue.protoType.$myProperty = xxx
        }
    使用插件：Vue.user(xxx)
    
## 9.scoped样式
    作用：让样式在局部失效，防止冲突
        还可以使用less来定义局部样式，需要使用less-loader包
    写法：<stype scoped>


## 10.组件编码流程(通用)
    1.实现静态组件：抽取组件、使用组件实现静态页面效果
    2.展示动态数据：
        1.数据的类型、名称是什么
        2.数据保存在哪个组件
    3.交互---从绑定事件监听开始

## 11.父组件和子组件进行数据交互
    1.父组件给子组件传递数据
        直接使用porps方式传递即可
    2.子组件给父组件传递数据
        1.父组件先传递一个函数给子组件
        2.子组件使用porps方式接受该函数
        3.子组件调用传递下来的函数即可

## 12.webStorage
    1.存储内容大小一般支持5MB左右(不同浏览器可以还不一样)
    2.浏览器端通过 Window.sessionStorage和Window.localStorage属性来实现本地存储机制
    3.相关API：
        1.xxxStorage.setItem('key', value)
            该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键存在，则更新对应的值
        2.xxxStorage.getItem('key')
            该方法接受一个键名作为参数，返回键名对应的值
        3.xxxStorage.removeItem('key')
            该方法接受一个键名作为参数，并把该键名从存储中删除
        4.xxxStorage.clear()
            该方法会清空存储中的所有数据
    4.备注：
        1.SessionStorage存储的内容会随着浏览器窗口关闭而消失
        2.LocalStorage存储的内容需要手动清除才会消失
        3.xxxStorage.getItem('key')如果key对应的value获取不到，那么getItem的返回值是null
        4.JSON.parse(null)的结果依然是null 

## 13.组件的自定义事件
    1.一种组件间通信的方式，适用于：子组件 ==> 父组件
    2.使用场景：A是父组件，B是子组件，B想给A传递数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)
    3.绑定自定义事件：
        1.第一种方式，在父组件中：`<Demo @userInfo="test">`或者`<Demo v-on:userInfo="text"/>`
        2.第二种方式，在父组件中：
        ```
        <Demo ref='demo'/>
        .....
        mounted() {
            this.$refs.xxx.$on("userInfo", this.test)
        }
        ```
        3.若想让自定义事件只触发一次，可以使用`once`修饰符，或`$once`方法
    4.触发自定义事件: `this.$emit("userInfo", 数据)`
    5.解绑自定义事件: `this.$off('userInfo')`
    6.组件上也可以绑定原生DOM事件，需要使用`native`修饰符
    7.注意：通过 `this.$refs.xxx.$on("userInfo", 回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则thid指向会出问题

## 14.全局事件总线(GlobalEventBus)
    1.一种组件间通信的方式，适用于任意组件间通信
    2.安装全局事件总线：
        ```
        new Vue({
            ...
            beforeCreate() {
                Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm
            }
            ...
        })
        ```
    3.使用事件总线
        1.接受数据：A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
            ```
            methods(){
                demo(data) {...}
            }
            ...
            mounted() {
                this.$bus.$on('xxx', this.demo) // 使用箭头函数也行
            }
            ```
        2.提供数据：``` this.$bus.$emit('xxx', 数据) ```
    4.最好在beforeDestroy钩子中，使用$off去解绑当前组件所用到的事件

## 15.消息订阅与发布(使用pubsub-js库)
    1.一种组件间通信方式，适用于任意组件通信
    2.使用步骤：
        1.安装pubsub： ``` npm i pubsub-js ```
        2.引入：``` import pubsub from 'pubsub-js' ```
        3.接受数据：A组件想接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身
            ```
            methods() {
                demo(data) { ... }
            }
            ...
            mounted() {
                //回调函数要么写在methods里面,要么使用箭头函数
                this.pid = pubsub.subscribe('xxx', this.demo)
            }
            ```
        4.提供数据： ``` pubsub.publish('xxx', 数据) ```
        5.最好在beforeDestroy钩子中，用``` pubsub.unsubscribe(pid) ```去取消订阅

