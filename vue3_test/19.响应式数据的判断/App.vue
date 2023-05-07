<template>
  <div class="app">
    <h3>我是App组件</h3>
  </div>
</template>

<script>
/**
 * isRef: 检查一个值是否为一个ref对象
 * isReactive：检查一个对象是否由isReactive创建的响应式代理
 * isReadonly：检查一个对象是否由readonly创建的只读代理
 * isProxy：检查一个对象是否由reactive或者readonly方法创建的代理
 */
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40W",
    });
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car2)); // true
    console.log(isProxy(sum)); // false

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