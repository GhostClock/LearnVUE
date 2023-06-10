import _ from 'lodash-es'
import { createApp } from 'vue'

import { sum } from './js/math'
import mul from './ts/mul'

import './css/style.css'
import './css/title.less'
import App from './vue/App.vue'

console.log("Hello Vite");
console.log(sum(10 ,20));
console.log(mul(10, 10));

console.log(_.join(['abc', 'cba'], ' + '));

const titleEl = document.createElement('div');
titleEl.className = 'title'
titleEl.innerHTML = "Hello Vite"
document.body.appendChild(titleEl)

createApp(App).mount('#app')