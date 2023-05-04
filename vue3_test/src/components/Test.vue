<template>
    <h1>我是Test组件</h1>
    <h2>x：{{ point.x }}  y：{{ point.y }}</h2>
</template>
<script>
import usePoint from '../hooks/usePoint.js'
export default {
  name: "Test",
  setup() {
    const point = usePoint()
    
    return {
        point
    }
  }
};
</script>