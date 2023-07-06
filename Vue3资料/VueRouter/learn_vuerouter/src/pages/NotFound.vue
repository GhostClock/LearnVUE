<template>
  <div>
    <h3>Page Not Found</h3>
    <p>打开路径不存在</p>
    <h1>错误的路由路径: {{ pachMatch }} </h1>
  </div>
</template>

<script setup>

  import { useRoute } from "vue-router";
  const pachMatch = useRoute().params.pachMatch
  
</script>

<style lang="less" scoped>

</style>