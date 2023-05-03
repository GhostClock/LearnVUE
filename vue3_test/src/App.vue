<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <h2>测试数据：{{ person.job.a.b.c }}</h2>
  <button @click="changeInfo">修改信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 作用：定义一个对象类型的响应式数据 基本数据不要用他，要用ref
    // 语法： conse 代理对象 = reactive(源对象)接受一个对象或者数组 返回一个代理对象 Proxy的实例对象
    // eactive定义的响应式数据是深层次的
    // 内部基于ES6的Proxy实现，通过代理对象操作对象内部数据进行操作
   
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "Web",
        salary: "25K",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 20;
      person.job.type = "iOS";
      person.job.salary = "30K";
      person.job.a.b.c = 999;
      person.hobby[0] = "开车";
    }

    function addSex() {
      person.sex = '男'
    }
    function deleteName() {
      delete person.name
    }

    return {
      person,
      changeInfo,
      addSex,
      deleteName,
    };
  },
};
</script>
