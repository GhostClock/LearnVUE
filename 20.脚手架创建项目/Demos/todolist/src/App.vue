<template>
    <div class="todu-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList :todos="todos" 
        />
        <MyFooter :todos="todos" 
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </template>
  
  <script>
    import pubsub from "pubsub-js";
    import MyHeader from "./components/MyHeader";
    import MyList from "./components/MyList";
    import MyFooter from "./components/MyFooter";
  
    export default {
      name: "App",
      components: { MyHeader, MyList, MyFooter },
      data() {
            return {
                todos: JSON.parse(localStorage.getItem("todos")) || []
            }
        },
        methods: {
            // 添加todo
            addTodo(todo) {
                this.todos.unshift(todo)
            },
            // 勾选&取消勾选
            checkTodo(id) {
                this.todos.forEach((todo) => {
                    if (todo.id == id) {
                        todo.done = !todo.done
                        return
                    }
                })
            },
            // 删除todo
            deleteTodo(_, id) {
              this.todos = this.todos.filter((todo) => {
                return todo.id !== id
              })
            },
            // 更新一个todo
            updateTodo(id, title) {
                this.todos.forEach((todo) => {
                    if (todo.id == id) {
                        todo.title = title
                        return
                    }
                })
            },
            // 全选，取消全选
            checkAllTodo(done) {
              this.todos.forEach((todo) => {
                todo.done = done
              })
            },
            // 清除所有已完成的todo
            clearAllTodo() {
              this.todos = this.todos.filter((todo) => {
                return !todo.done
              })
            }
        },
        watch: {
          // 需要开启深度监视
          todos: {
            deep:true,
            handler(value) {
              localStorage.setItem("todos", JSON.stringify(value))
            }
          }
        },
        mounted() {
          this.$bus.$on("checkTodo", this.checkTodo)
          this.$bus.$on("updateTodo", this.updateTodo)
          this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
        },
        beforeDestroy() {
          this.$bus.$off("checkTodo")
          this.$bus.$off("updateTodo")
          pubsub.unsubscribe(this.pubId)
        },
    };
  </script>
  
  <style>
    /* base */
    body {
      background: #fff;
    }
    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
    .btn-danger {
      color:#fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }
    .btn-edit {
      color:#fff;
      background-color: skyblue;
      border: 1px solid rgb(103, 159, 180);
      margin-right: 5px;
    }
    .btn-danger:hover {
      color:#fff;
      background-color: #bd362f;
    }
    .btn:focus {
      outline: none;
    }
    .todu-container {
      width: 600px;
      margin: 0 auto;
    }
    .todu-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  
  </style>