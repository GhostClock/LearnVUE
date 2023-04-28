<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: 'Web',
      salary: '25K'
    })

    // 方法
    function changeInfo() {
      name.value = '李四'
      age.value = 20
      job.value.type = 'iOS'
    }

    // 1.返回一个对象，可以在模板里面直接使用 常用
    return {
      name,
      age,
      changeInfo,
      job,
    }
  }
}
</script>
