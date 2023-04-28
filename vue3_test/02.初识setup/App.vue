<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话(Vue3所配置的sayHello)</button>
  <br>
  <button @click="sayWelcome">说话(Vue2所配置的sayWelcome)</button>
  <h2></h2>
</template>

<script>
// import { h } from "vue";

// Vue2的配置能读取Vue3的配置
// Vue3的配置不能读取Vue2的配置
// Vue2的配置和Vue3的配置不建议混用

export default {
  name: 'App',
  // Vue2里面的配置项，可以向下兼容
  data() {
    return {
      sex: '女'
    }
  },
  methods: {
    sayWelcome() {
      alert('Hello World')
    }
  },

  // 此处只是测试setup 不考虑响应式
  setup() {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello() {
      alert(`我叫${name}, ${age}岁了, 你好啊`)
    }
    // 1.返回一个对象，可以在模板里面直接使用 常用
    return {
      name,
      age,
      sayHello
    }

    // 2.返回一个渲染函数  了解
    // return () => h('button', 'GhostClock')
  }
}
</script>
