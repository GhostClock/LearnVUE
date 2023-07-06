<template>
  <div>
    <h2>About</h2>
    <h3>name: {{ name }}, age: {{ age }}</h3>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const { name, age } = useRoute().query

</script>

<style lang="less" scoped>

</style>