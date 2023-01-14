
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>网站名称：{{ name }}</h1>
        <h1>网站地址：{{ address }}</h1>
        <button @click='showName'>点击提示网站名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
    // 创建web组件
    export default {
        name: "Web", // 和文件名保持一致
        data() { 
            return {
                name: '百度',
                address: '北京',
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }
</script>

<style>
/* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>
