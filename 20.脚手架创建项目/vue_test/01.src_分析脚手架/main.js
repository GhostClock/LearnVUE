/* 该文件是整个项目的入口文件 */

// 引入Vue
import Vue from 'vue' // 这里引入的是残缺版的Vue，不包含模板解析器
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
// new Vue({
//   // 将App组件放入组件容器中
//   render: h => h(App),
// }).$mount('#app')

/* 
     关于不同版本的Vue：
          1.vue.js与vue.runtime.xxx.js的区别：
               1.vue.js是完整版的Vue，包含：核心功能+模板解析器
               2.vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器
          2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用templete配置项，需要
            render函数接受到的createELement函数去指定具体内容
*/

new Vue({
     el: "#app",
     // template:"<h1>Hello</h1>", // 需要使用完整版的JS  vue/dtis/vue.js
     // components:{ App }

     // 将App组件放入组件容器中
     // render: h => h(App),

     // 原始写法
     // render:(createElement) => {
     //      return createElement('h1', "Hello")
     // },
     
     // 精简1
     // render: createElement => {
     //      return createElement('h1', "Hello")
     // }
     
     // 精简2
     // render: createElement => createElement('h1', "Hello")
     
     // 精简3
     // render: q => q('h1', "Hello"),
     
     // 精简4 使用组件，依赖App组件的引入
     render: h => h(App),
     
})
