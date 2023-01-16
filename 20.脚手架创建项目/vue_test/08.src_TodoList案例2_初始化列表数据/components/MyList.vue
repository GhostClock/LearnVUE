<!-- 中间内容组件 -->
<template>
    <ul class="todo-main">
        <MyItem v-for ="todoObj in todos" 
        :key="todoObj.id" :todo="todoObj"/>
    </ul>
</template>

<script>
    import MyItem from "./MyItem";

    export default {
        name: "MyList",
        components: { MyItem },
        data() {
            return {
                todos:[
                    {id: '001', title: "吃饭", done: true},
                    {id: '002', title: "抽烟", done: false},
                    {id: '003', title: "喝酒", done: false},
                    {id: '004', title: "洗脚", done: true},
                ]
            }
        },
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
</style>