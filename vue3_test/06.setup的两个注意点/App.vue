<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="学校">
    <template v-slot:qwe>
      <span>Hello qwe:123</span>
    </template>
    <template v-slot:qaz>
      <span>Hello qaz:456</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    function showHelloMsg(value) {
      alert(`得到子组件回调过来的数据：${value}`);
    }

    return {
      showHelloMsg,
    };
  },
};
</script>
