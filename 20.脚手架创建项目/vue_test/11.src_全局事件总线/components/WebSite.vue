
<template>
  <div class="school">
    <h2>网站名称：{{ name }}</h2>
    <h2>网站地址：{{ address }}</h2>
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
        mounted() {
          this.$bus.$on("hello", (data) => {
            console.log("我是WebSite组件,收到了数据", data);
          })
        },
        beforeDestroy() {
          this.$bus.$off("hello") // 解绑事件总线
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