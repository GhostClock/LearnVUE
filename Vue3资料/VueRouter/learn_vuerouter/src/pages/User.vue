<template>
  <div>
    <h2>User: {{ route.params.username }}</h2>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
  console.log(route.params.username);

</script>

<style scoped>

</style>