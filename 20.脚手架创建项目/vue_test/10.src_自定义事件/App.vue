<template>
  <div class="app">
    <h1>{{ msg }}, 用户名为：{{ userName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递函数 -->
    <WebSite :getWebSiteName="getWebSiteName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递函数 (第一种写法,使用@或v-on)-->
    <!-- <UserInfo v-on:userInfoAction="getUserInfoName"/> -->
    <!-- 上面的简写形式 -->
    <!-- <UserInfo @userInfoAction="getUserInfoName"/> -->

     <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递函数 (第二种写法：使用ref)-->
    <UserInfo ref="userInfo" @click.native="show"/>
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
        userName: ""
      }
    },
    methods: {
      getWebSiteName(name) {
        console.log("App收到了网站名: ", name);
      },
      getUserInfoName(name, ...params) {
        console.log("App收到了用户名", name, params);
        this.userName = name
      },
      m1() {
        console.log("demo事件被调用了");
      },
      show() {
        alert(123)
      }
    },
    mounted() {
      // 绑定自定义事件 - 原始写法
      // this.$refs.userInfo.$on('userInfoAction', this.getUserInfoName)
      // 注意点1
      /*this.$refs.userInfo.$on('userInfoAction', function() {
        console.log(this);// 这里的this是UserInfo组件
      })*/
      // 注意点2
      this.$refs.userInfo.$on('userInfoAction', (name, ...params) => {
        console.log("App收到了用户名", name, params);
        this.userName = name // 这里this往外面找就是当前的VC
      })

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