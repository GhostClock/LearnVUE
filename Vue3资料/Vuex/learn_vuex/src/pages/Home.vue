<template>
  <div>
    <h2>{{ sConter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { mapState, useStore } from 'vuex';

  const store = useStore()
  const sConter = computed(() => store.state.counter)

  const storeStateFns = mapState(['name', 'age', 'height'])
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  const { name, age, height } = storeState

</script>

<style lang="scss" scoped>

</style>