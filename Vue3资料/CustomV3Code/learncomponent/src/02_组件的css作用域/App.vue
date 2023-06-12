<template>
  <h2 class="title">App</h2>
  <HelloWord />
</template>

<script>
  import HelloWord from './HelloWorld.vue'
  export default {
    components: {
      HelloWord
    }
  }
</script>

<style lang="less" scoped>
  h2 {
    color: red;
  }
  .title {
    color: blue;
  }
</style>