<template>
  <div class="app">
    <h3>我是App组件(祖先), {{ name }} : {{ price }}</h3>
    <Child />
  </div>
</template>

<script>

/**
 * provide和inject
 * 作用：实现祖与后代组件间通信
 * 套路：父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据
 */

import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40W",
    });

    // 给自己的后代组件传递数据
    provide("Car", car);

    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>