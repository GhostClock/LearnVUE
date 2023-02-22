<!-- 中间内容组件 -->
<template>
    <ul class="todo-main">
        <!-- 给ul加动画 -->
        <transition-group name="todo">
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj"
            />
        </transition-group> 
    </ul>
</template>

<script>
    import MyItem from "./MyItem";

    export default {
        name: "MyList",
        components: { MyItem },
        props: ['todos']
    }
</script>

<style scoped>
    /* List */
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top:10px;
    }
    /* 给ul加动画 */
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
</style>