<!-- 具体中间Item -->
<template>
  <!-- <transition name="todo" appear> 这是给li加动画 -->
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <!-- 如下代码也能实现功能，但是不太推荐，因为优点违反规则，因为修改了props -->
        <!-- <input type="checkbox" 
        :v-model="todo.done" 
      /> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="handleEdit(todo)"
      >
        编辑
      </button>
    </li>
  <!-- </transition> -->
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: "MyItem",
        // 声明接受todo对象
        props: ['todo',],
        methods: {
          // 勾选&取消勾选
          handleCheck(id) {
      // 通知App组件将对应的done改变状态
      // this.checkTodo(id)
            this.$bus.$emit("checkTodo", id)
          },
          // 删除
          handleDelete(id) {
            if(confirm("确定删除吗？？")) {
              console.log(id);
              // this.deleteTodo(id)
              // this.$bus.$emit('deleteTodo', id)
              pubsub.publish('deleteTodo', id)
            }
          },
          // 编辑
          handleEdit(todo) {
            // 判todo上面是否有isEdit字段
            if(todo.hasOwnProperty("isEdit")) {
              todo.isEdit = true
            } else {
              console.log("todo上面没有isEdit,需要添加该字段");
              this.$set(todo, "isEdit", true)
            }
            // nextTick指定的函数，会在DOM更新完之后再执行
            this.$nextTick(function() {
              this.$refs.inputTitle.focus()
            })
          },
          // 输入框失去焦点，编辑完成 真正执行修改逻辑
          handleBlur(todo, event) {
            todo.isEdit = false
            let title = event.target.value
            if (!title.trim()) return alert("⚠️输入不能为空")
            this.$bus.$emit("updateTodo", todo.id, title)
          }
        }
    }
</script>

<style scoped>
/* item */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover {
    /* 鼠标悬浮背景色 */
    background-color: beige;
  }
  li:hover button {
    display: block;
  }
  /*  这是给li加动画
  .todo-enter-active {
    animation: todoAnimation 0.5s linear;
  }
  .todo-leave-active {
    animation: todoAnimation 0.5s linear reverse;
  }
  @keyframes todoAnimation {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0px);
    }
  } 
  */

</style>