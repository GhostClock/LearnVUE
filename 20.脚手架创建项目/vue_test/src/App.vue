<template>
  <div >
    <TestAction />
    <TestAction2 />
    <TestAction3 />
  </div>
</template>

<script>
  import TestAction from "./components/TestAction.vue"
  import TestAction2 from "./components/TestAction2.vue"
  import TestAction3 from "./components/TestAction3.vue"
  export default {
    name: "App",
    components: { TestAction, TestAction2, TestAction3 },
    data() {
      return {
        msg: "你好啊!!!",
      }
    },
  }
</script>