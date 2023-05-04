<template>
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
 * toRef
 *  作用：创建一个ref对象，其value值指向另一个对象中的某个属性
 *  语法：conse name = toRef(person, 'name')
 *  应用：要将响应式对象中的某个属性单独提供给外部使用时
 *  扩展：toRefs与toRef功能一致，但可以批量创建多个ref对象，语法：toRef(person)
 */
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // 返回一个对象 常用
    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary'),

      ...toRefs(person) // 只返回一层key
    };
  },
};
</script>
