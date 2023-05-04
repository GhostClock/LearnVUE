// 引入的不再是Vue的构造函数了
// 引入的是一个createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 成绩应用实例对象 app 类似于Vue2中的vm，但是比vm轻
const app =  createApp(App)
// 挂载
app.mount('#app')

// 146