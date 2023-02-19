<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <WebSite />
    <UserInfo />
  </div>
</template>

<script>
  import UserInfo from "./components/UserInfo.vue"
  import WebSite from "./components/WebSite.vue"

  export default {
    name: "App",
    components: { WebSite, UserInfo },
    data() {
      return {
        msg: "你好啊!!!",
      }
    },
  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>