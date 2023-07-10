<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <hr>
      <button @click="increment">+1</button>
    <hr> 
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useStore } from "vuex";
  import { useState } from '../hooks'
  const { counter } = useState(['counter'])

  const store = useStore()
  const increment = () => {
    store.dispatch('incrementAction')
  }

  onMounted(() => {
    store.dispatch('getHomeMultidata').then (state => {
      console.log(state);
    }).catch(error => {
      console.log(error);
    })
  })

</script>

<style lang="scss" scoped>

</style>