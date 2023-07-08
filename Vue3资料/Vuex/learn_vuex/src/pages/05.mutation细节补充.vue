<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <hr>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="addTen">+10</button>
    <hr> 
  </div>
</template>

<script setup>
  import { useStore } from "vuex";
  import { useState } from '../hooks'
  import { INCREMENT_N } from "../store/mutation-typs";
  const { counter } = useState(['counter'])

  const store = useStore()
  const increment = () => store.commit('increment')
  const decrement = () => store.commit('decrement')
  const addTen = () => store.commit(INCREMENT_N, {num: 10, name: 'gc', age: 10}) // 传参
  // 另一种风格
  // const addTen = () => store.commit({
  //   type: INCREMENT_N,
  //   num: 10, 
  //   name: 'gc', 
  //   age: 10
  // })

</script>

<style lang="scss" scoped>

</style>