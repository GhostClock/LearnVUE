<template>
  <div>
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
   <transition name="hello" appear>
    <h1 v-show="isShow">你好啊</h1>
   </transition>
  </div>
</template>

<script>
export default {
  name:"TestAction",
  data() {
    return {
      isShow: true
    }
  },
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  /* 进场 */
  .hello-enter-active {
    animation: TestAnimation 0.5s linear;
  }
  /* 离场 */
  .hello-leave-active {
    animation: TestAnimation 0.5s linear reverse;
  }
  /* 关键帧动画 */
  @keyframes TestAnimation {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>