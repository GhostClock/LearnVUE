<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <hr />
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}, y：{{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from '../hooks/usePoint'
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);

    let point = usePoint()

    // 返回一个对象 常用
    return {
      sum,
      point,
    };
  },
  //#region
  // 通过配置项的形式使用生命周期钩子
  /* beforeCreate() {
    console.log("--- beforeCreate ---");
  },
  created() {
    console.log("--- created ---");
  },
  beforeMount() {
    console.log("--- beforeMount ---");
  },
  mounted() {
    console.log("--- mounted ---");
  },
  beforeUpdate() {
    console.log("--- beforeUpdate ---");
  },
  updated() {
    console.log("--- updated ---");
  },
  // 无效
  // beforeDestroy() {
  //   console.log("--- beforeDestroy ---");
  // },
  // destroyed() {
  //   console.log("--- destroyed ---");
  // },
  beforeUnmount() {
    console.log("--- beforeUnmount ---");
  },
  unmounted() {
    console.log("--- unmounted ---");
  }, */
  //#endregion
};
</script>
