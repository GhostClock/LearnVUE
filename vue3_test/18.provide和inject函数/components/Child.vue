<template>
  <div class="child">
    <h3>我是Child组件(子)</h3>
    <Son />
  </div>
</template>

<script>
// import { inject } from "vue";
import Son from "./Son";
export default {
  name: "Child",
  components: {
    Son,
  },
  setup() {
    // let car = inject('Car')
    // return { car }
  }
};
</script>

<style>
.child {
  background: skyblue;
  padding: 10px;
}
</style>