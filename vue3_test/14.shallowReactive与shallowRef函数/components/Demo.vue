<template>
  <h4>X的值是：{{ x.y }}</h4>
  <button @click="x.y++">点击x+1</button>
  <hr>
  <h4>{{ person }}</h4>

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
</template>

<script>
/**
 * shallowReactive：只处理对象最外层属性的响应式 浅响应式
 * shallowRef：只处理基本数据类型的响应式，不就行对象的响应式处理
 * 什么时候使用：
 *  1.如果有一个对象数据，结构比较深，但变化时只是最外层属性变化 ===》shallowReactive
 *  2.如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===》shallowRef
 */
import { reactive, toRefs, ref, shallowReactive, shallowRef} from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    // let person = shallowReactive({ // 只考虑第一层数据的响应式
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    
    // let x = shallowRef({ // 浅层的，y没有响应式
    let x = ref({
      y: 0
    })

    // 返回一个对象 常用
    return {
      x,
      person,
      ...toRefs(person) // 只返回一层key
    };
  },
};
</script>
