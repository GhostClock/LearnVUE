
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
//引入store
import store from './store/index'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
     el: "#app",
     store,
     render: h => h(App)
})
