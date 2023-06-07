import { sum } from '@/js/math'
const { priceFormat } = require('@/js/format')
import { createApp } from 'vue'
import axios from 'axios'

import "@/js/element"

import App from '@/vue/App'

console.log(sum(20, 30))
console.log(priceFormat())

// Vue代码
const app = createApp(App)
app.mount('#app')

axios.get('/get').then(response => {
  console.log(response.data);
}).catch(error => {
  console.log(error);
})
