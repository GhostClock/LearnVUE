
<!-- 顶部输入框组件 -->
<template>
    <div class="todo-header">
      <input
        type="text"
        placeholder="请输入你的任务，按回车确认"
        v-model="title"
        @keyup.enter="add"
      />
    </div>
  </template>
  
  <script>
  import { nanoid } from 'nanoid' // 生成uuid
  export default {
    name: "MyHeader",
    props: ["addTodo"],
    data() {
      return {
          title: '',
      }
    },
    methods: {
      add() {
          // 校验空数据
          if(!this.title.trim()) return alert("输入不能为空")
          // 将用户输入得数据包装成对象
          const todoObj = { id: nanoid(), title: this.title, done: false };
          // 回调数据给App组件，添加一个数据
          this.addTodo(todoObj)
          // 清空输入框
          this.title = ''
      },
    },
  };
  </script>
  
  <style scoped>
  /* header */
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(82, 168, 236, 0.6);
  }
  </style>