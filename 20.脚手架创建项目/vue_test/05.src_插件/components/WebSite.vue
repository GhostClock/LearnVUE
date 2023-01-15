
<template>
  <div>
    <h2>网站名称：{{ name | mySlice }}</h2>
    <h2>网站地址：{{ address }}</h2>
    <button @click="show">弹出Hello</button>
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