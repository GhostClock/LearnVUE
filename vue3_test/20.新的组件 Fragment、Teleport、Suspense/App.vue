<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
       <template v-slot:default>
          <Child />
       </template>
       <template v-slot:fallback>
          <h3>请稍等, 加载中...</h3>
       </template>
    </Suspense>
    <Son />
  </div>
</template>

<script>
/**
 * Fragment
 * Vue3中：组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中
 * 好处：减少标签层级，减少内存占用
 * 
 * Teleport
 *  是一种能够将我们的组件html结构移动到指定的位置的技术 见Dialog.vue组件案例
 * 
 * Suspense
 *   等待异步组件时渲染一些额外内容，让应用更好的用户体验
 *   使用步骤见App.vue案例
 *      1.引入异步组件
 *      2.使用Suspense包裹组件，并配置好 default和fallback
 * 
 */
// 静态引入
// import Child from './components/Child'
import { defineAsyncComponent } from "vue";
// 动态引入 异步引入
const Child = defineAsyncComponent(() => import('./components/Child'))
import Son from './components/Son.vue'


export default {
  name: "App",
  components: { 
    Child, 
    Son 
  },
};
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>