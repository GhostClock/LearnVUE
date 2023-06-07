
import "../css/style.css"
import '../css/title.less'
import '../css/image.css'
import '../font/iconfont.css'

import gif from "../img/lolita.gif"

const divEl = document.createElement("div")
console.log(divEl);
divEl.className = "title"
divEl.innerHTML = "Hello, GhostClock"

// 设置背景图片
const bgDivEl = document.createElement('div')
bgDivEl.className = 'image-bg'

// 设置img元素的src
const imgEl = document.createElement('img')
imgEl.src = gif

// 字体
const iEl = document.createElement('i')
iEl.className = "iconfont icon-ashbin"


document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)

const message = ['Hello World']
message.forEach(item => console.log(item));