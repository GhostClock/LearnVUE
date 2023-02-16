<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递函数 -->
    <WebSite :getWebSiteName="getWebSiteName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递函数 (第一种写法,使用@或v-on)-->
    <!-- <UserInfo v-on:userInfoAction="getUserInfoName"/> -->
    <!-- 上面的简写形式 -->
    <!-- <UserInfo @userInfoAction="getUserInfoName"/> -->

     <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递函数 (第二种写法：使用ref)-->
    <UserInfo ref="userInfo" @demo="m1"/>
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
        msg: "你好啊!!!"
      }
    },
    methods: {
      getWebSiteName(name) {
        console.log("App收到了网站名: ", name);
      },
      getUserInfoName(name, ...params) {
        console.log("App收到了用户名", name, params);
      },
      m1() {
        console.log("demo事件被调用了");
      }
    },
    mounted() {
      // 绑定自定义事件
      this.$refs.userInfo.$on('userInfoAction', this.getUserInfoName)
      // 绑定自定义事件 一次性事件
      // this.$refs.userInfo.$once('userInfoAction', this.getUserInfoName)
    },
  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>