
<!-- 安装了Vutur插件，就会有提示-->

<template>
  <div>
    <img src="./assets/logo.png" alt="logo"/>
    <WebSite></WebSite>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
    // 引入组件
    import WebSite from './components/WebSite.vue'
    import UserInfo from './components/UserInfo.vue'

    export default {
        name: "App",
        components:{
          WebSite, UserInfo
        }
    }
</script>
