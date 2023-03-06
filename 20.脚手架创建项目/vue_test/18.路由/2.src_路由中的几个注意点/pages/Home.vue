<template>
  <div>
    <h2>我是Home的内容</h2>
  </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
          console.log("Home组件挂载完毕", this);
        },
        beforeDestroy() {
          console.log("Home组件即将被销毁");
        },
    }
</script>
