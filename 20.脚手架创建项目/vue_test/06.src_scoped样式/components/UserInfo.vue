
<template>
  <div class="test">
    <h2>用户姓名：{{ name }}</h2>
    <h2>用户性别：{{ sex }}</h2>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                name: "张三",
                sex: "男生",
            }
        },
    }
</script>

<style scoped>
  .test {
    background-color: blueviolet;
  }
</style>