<template>
  <div>
    <h2> {{ title }}</h2>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  defineProps({
    title: {
      type: String,
      default: '默认标题'
    }
  })

  
</script>

<style lang="css" scoped>

</style>