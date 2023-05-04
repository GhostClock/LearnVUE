<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点击+1</button>
  <hr>

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
</template>

<script>
/**
 * readonly: 让一个响应式数据变成只读的 深只读
 * shallowReadonly: 让一个响应式数据变成只读 浅只读
 * 应用场景：不希望数据被修改时使用
 */
import { reactive, toRefs, ref, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 这里的person不能修改
    // person = readonly(person)

    // 这里的person浅层次不能修改，深层次的可以修改
    person = shallowReadonly(person)

    // 这里的sum不能修改
    sum = readonly(sum)

    // 返回一个对象 常用
    return {
      sum,
      ...toRefs(person) // 只返回一层key
    };
  },
};
</script>
