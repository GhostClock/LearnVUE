<!-- 顶部输入框组件 -->
<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务，按回车确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid"; // 轻量级得UUID生成器
export default {
  name: "MyHeader",
  data(){
    return {
        title: ''
    }
  },
  // props: ['addTodo'],
  methods: {
    add() {
        // 校验数据
        if (!this.title.trim()) { return alert("输入不能为空") }
        // 将用户得输入包装成一个对象
        const todoObj = { id: nanoid(), title: this.title, done: false };
        console.log(todoObj);
        // this.addTodo(todoObj)
        // 通知App组件去添加一个todo对象
        this.$emit("addTodo", todoObj)
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