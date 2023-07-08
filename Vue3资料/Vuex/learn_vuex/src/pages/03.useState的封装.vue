<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
    <h2>{{ n1 }}</h2>
    <h2>{{ n2 }}</h2>
  </div>
</template>

<script setup>
  import { useState } from '../hooks/useState'

  // 支持数据写法
  const { counter, name, age, height } = useState(['counter', 'name', 'age', 'height'])
  // 支持对象写法
  const { n1, n2 } = useState({
    n1: state => state.number1,
    n2: state => state.number2,
  })


</script>

<style lang="scss" scoped>

</style>