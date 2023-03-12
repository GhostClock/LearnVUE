
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 全部引入ElementUI
// import ElementUI from 'element-ui'
// 全部引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

// 关闭Vue生产提示
Vue.config.productionTip = false
// 使用ElementUI
// Vue.use(ElementUI)

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)

// 创建vm
new Vue({
     el: "#app",
     render: h => h(App),
})
