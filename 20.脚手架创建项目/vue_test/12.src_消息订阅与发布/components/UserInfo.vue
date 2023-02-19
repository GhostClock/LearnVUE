
<template>
  <div class="userInfo">
    <h2>用户姓名：{{ name }}</h2>
    <h2>用户性别：{{ sex }}</h2>
    <button @click="sendUserInfoName">把用户名传递给WebSite组件</button>
  </div>
</template>

<script>
    import pubsub from "pubsub-js";
    export default {
        name: "UserInfo",
        data() {
            return {
                name: "张三",
                sex: "男生",
            }
        },
        methods: {
          sendUserInfoName() {
            // 发送消息
            pubsub.publish("hello", this.name)
          }
        },
    }
</script>

<style scoped>
  .userInfo {
    background-color: blueviolet;
    padding: 5px;
    margin-top: 30px;
  }
</style>