
<!-- 安装了Vutur插件，就会有提示-->

<template>
  <div>
    <Web></Web>
    <User></User>
  </div>
</template>

<script>
    // 引入组件
    import Web from './Web.vue'
    import User from './User.vue'

    export default {
        name: "App",
        components:{
            Web, User
        }
    }
</script>
