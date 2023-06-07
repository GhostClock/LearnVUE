<template>
  <h2>我是Vue渲染出来的</h2>
  <hello-vue />
</template>

<script>
import HelloVue from './HelloVue'
export default {
  components: {
    HelloVue
  },
  data() {
    return {
      msg: 'Hello'
    }
  },
}
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>