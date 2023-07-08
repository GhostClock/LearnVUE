<template>
  <div>
    <!-- <h2>总价值: {{ totalPrice }}</h2>
    <h2>总价值: {{ totalPriceCountGreaterN(2) }}</h2> -->
    <hr/>
    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2>
  </div>
</template>

<script setup>
  // import { computed } from "vue";
  // import { useStore, mapGetters} from 'vuex';
  // const store = useStore()
  // const totalPrice = computed(() => store.getters.totalPrice)
  // const totalPriceCountGreaterN = computed(() => store.getters.totalPriceCountGreaterN)
  // const storeGetterFns = mapGetters(['nameInfo', 'ageInfo', 'heightInfo'])

  import { useGetters } from "../hooks/useGetters";
  const { nameInfo, ageInfo, heightInfo } = useGetters(['nameInfo', 'ageInfo', 'heightInfo'])


</script>

<style lang="scss" scoped>

</style>