
<template>
    <div>
        <h1>用户姓名：{{ name }}</h1>
        <h1>用户年龄：{{ age }}</h1>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() { 
            return {
                name: '张三',
                age: 18,
            }
        },
    }
</script>

