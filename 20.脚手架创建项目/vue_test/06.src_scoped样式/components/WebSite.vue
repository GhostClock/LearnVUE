
<template>
  <div class="demo">
    <h2>网站名称：{{ name}}</h2>
    <h2 class="qwe">网站地址：{{ address }}</h2>
  </div>
</template>

<script>
    export default {
        name: "WebSite",
        data() {
            return {
                name: "百度baidu.com",
                address: "北京",
            }
        },
        methods:{
          show(){
            this.hello()
          }
        },
    }
</script>

<style lang="less" scoped>
  .demo {
    background-color: aqua;
    .qwe{
      font-size: 40px;
    }
  }
</style>