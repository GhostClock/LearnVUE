<template>
  <div >
    <h1>当前求和为：{{ $store.state.sum }} </h1>
    <h3>放大10倍后为：{{ $store.getters.bigSum }} </h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Count",
    data() {
      return {
        number: 1, //用户选择的数字
      }
    },
    methods: {
      // +
      increment() {
        // Vuex：第一步
        // this.$store.dispatch('add', this.number)
        // 无重要处理逻辑，可以直接向mutations发送数据
        this.$store.commit('ADD', this.number)
      },

      // -
      decrement() {
        // this.$store.dispatch('sub', this.number)
        this.$store.commit('SUB', this.number)
      },

      // 当前求和为奇数再加
      incrementOdd() {
        this.$store.dispatch('addOdd', this.number)
      },

      // 等一等再加
      incrementWait() {
        this.$store.dispatch('addWait', this.number)    
      },
    },
    mounted() {
      console.log("Count组件", this);
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
  
</style>