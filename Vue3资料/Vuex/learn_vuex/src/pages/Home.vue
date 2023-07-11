<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <hr>
      <button @click="increment">+1</button>
    <hr>
      <button @click="homeModuleAdd">home模块+1</button>
      <h2>home当前计数： {{ doubleCounter }}</h2>
    <hr>
  </div>
</template>

<script setup>
  import { useStore } from "vuex";
  import { useState } from '../hooks'
  const { counter } = useState(['counter'])

  const store = useStore()
  const increment = () => {
    store.dispatch('incrementAction')
  }

  const homeModuleAdd = () => {
    store.dispatch('home/incrementAction')
  }
  const doubleCounter = store.getters['home/doubleCounter']
  console.log(doubleCounter);

</script>

<style lang="scss" scoped>

</style>