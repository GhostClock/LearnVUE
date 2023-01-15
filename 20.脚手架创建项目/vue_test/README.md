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


