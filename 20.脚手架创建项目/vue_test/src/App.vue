<template>
  <div>
    <Count/>
    <hr/>
    <Person/>
  </div>
</template>

<script>
  import Count from "./components/Count.vue";
  import Person from './components/Person.vue'
  export default {
    name: "App",
    components: { Count, Person},
  }
</script>

<style scoped>
  .container, .foot {
    /* 横向布局 */
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>