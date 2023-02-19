
<template>
  <div class="school">
    <h2>网站名称：{{ name }}</h2>
    <h2>网站地址：{{ address }}</h2>
  </div>
</template>

<script>
    import  pubsub  from "pubsub-js";
    export default {
        name: "WebSite",
        data() {
            return {
                name: "百度",
                address: "北京",
            }
        },
        mounted() {
          // 订阅消息，注意：回调函数要么使用箭头函数，要么写在methods里面
          this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            console.log("有人发布了hello消息, hello消息的回调执行了", msgName, data);
          })
        },
        beforeDestroy() {
          // 取消订阅
          pubsub.unsubscribe(this.pubId)
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