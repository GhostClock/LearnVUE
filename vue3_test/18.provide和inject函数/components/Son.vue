<template>
  <div class="son">
    <h3>我是Son组件(孙), {{ car.name }} : {{ car.price }}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("Car");

    return {
      car,
    };
  },
};
</script>

<style>
.son {
  background: orange;
  padding: 10px;
}
</style>