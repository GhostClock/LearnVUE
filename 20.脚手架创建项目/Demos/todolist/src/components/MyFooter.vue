<!-- 底部组件 -->
<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" 
                :checked="isAll" 
                @change="checkAll"
            /> -->
            <!-- 使用v-model和计算属性完整写法 -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }} 
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        props: ['todos',/* 'checkAllTodo', 'clearAllTodo'*/],
        computed: {
            total(){
                return this.todos.length
            },
            doneTotal() {
                // let total = this.todos.reduce((pre, current) =>{
                //     return pre + (current.done ? 1 : 0)
                // }, 0)
                // return total
                // 简写
               return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
            },
            // isAll() {
            //     return this.total > 0 && this.doneTotal == this.total
            // }
            
            // 使用v-model
            isAll: {
                get() {
                    return this.total > 0 && this.doneTotal == this.total
                },
                set(value) {
                    console.log(value);
                    // this.checkAllTodo(value)
                    this.$emit("checkAllTodo", value)
                }
            }
        },
        methods: {
            // 全选或全不选
            // checkAll(event) {
            //     this.checkAllTodo(event.target.checked)
            // }
            
            // 清除已完成任务
            clearAll() {
                // this.clearAllTodo()
                this.$emit('clearAllTodo')
            }
        }
    }
</script>
    
<style scoped>
    /* footer */
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>