<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition只能包裹一个元素 -->
    <!-- transition-group可以包裹多个元素 -->
    <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" :key="1">你好啊！！！</h1>
      <h1 v-show="isShow" :key="2">Hello!!!</h1>
    </transition-group>

  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "TestAction3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
  /* transition: 0.5s linear; 这样写也行 */
}

</style>