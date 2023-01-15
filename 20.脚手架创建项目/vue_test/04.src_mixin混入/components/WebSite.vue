
<template>
  <div>
    <h2 @click="showName">网站名称：{{ name }}</h2>
    <h2>网站地址：{{ address }}</h2>
  </div>
</template>

<script>
    // 局部混入
    // import { mixin } from "../mixin.js";

    export default {
        name: "WebSite",
        data() {
            //【注意】：再准备data数据
            return {
                name: "百度",
                address: "北京",
            }
        },
        // mixins:[ mixin ]
    }
</script>