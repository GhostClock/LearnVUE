<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <hr>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="incrementN">+10</button>
    <hr> 
  </div>
</template>

<script setup>
  import { mapMutations } from "vuex";
  import { useState } from "../hooks";
  // import { INCREMENT_N } from "../store/mutation-typs";

  const { counter } = useState(['counter'])
  
  const { increment } = mapMutations(['increment'])

</script>

<style lang="scss" scoped>

</style>