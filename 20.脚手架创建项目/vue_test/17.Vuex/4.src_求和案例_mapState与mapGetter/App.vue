<template>
  <div>
    <Count/>
  </div>
</template>

<script>
  import Count from "./components/Count.vue";
  export default {
    name: "App",
    components: { Count },
  }
</script>

<style scoped>
  .container, .foot {
    /* 横向布局 */
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>