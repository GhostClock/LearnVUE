
/**
 * 什么是hook？
 *  本质是一个函数，把setup函数中使用的Composition API(组合式API)进行了封装
 *  类似于vue2.x中的mixin
 *  自定义hook的优势：复用代码，让setup中的逻辑更清晰易懂
 **/

import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
    // 实现鼠标打点的数据
    let point = reactive({
        x: 0.0,
        y: 0.0,
    })

    // // 实现鼠标打点的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(point.x, point.y);
    }

    // 实现鼠标打点的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}