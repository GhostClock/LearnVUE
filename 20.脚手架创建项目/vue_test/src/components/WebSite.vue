
<template>
  <div class="school">
    <h2>网站名称：{{ name }}</h2>
    <h2>网站地址：{{ address }}</h2>
    <button @click="sendWebSiteName">点击把学校名给App</button>
  </div>
</template>

<script>
    export default {
        name: "WebSite",
        data() {
            return {
                name: "百度",
                address: "北京",
            }
        },
        props: ["getWebSiteName"],
        methods:{
          sendWebSiteName() {
            this.getWebSiteName(this.name)
          }
        },
    }
</script>

<style scoped>
  .school {
    background-color: aqua;
    padding: 5px;
    margin-top: 30px;
  }
</style>