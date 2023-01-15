
<template>
  <div>
    <h2 @click="showName">用户姓名：{{ name }}</h2>
    <h2>用户性别：{{ sex }}</h2>
  </div>
</template>

<script>
    // 引入一个混入
    import { mixin, mixin2 } from "../mixin.js";
    
    export default {
        name: "UserInfo",
        data() {
            //【注意】：再准备data数据
            return {
                name: "张三",
                sex: "男生",
            }
        },
        mixins: [ mixin, mixin2]
    }
</script>