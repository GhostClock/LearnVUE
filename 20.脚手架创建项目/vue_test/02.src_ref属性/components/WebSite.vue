
<template>
  <div class="website">
    <h1>网站名称：{{ name }}</h1>
    <h1>网站地址：{{ address }}</h1>
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
    }
</script>

<style>
    .website{
        background-color: gray;
    }
</style>