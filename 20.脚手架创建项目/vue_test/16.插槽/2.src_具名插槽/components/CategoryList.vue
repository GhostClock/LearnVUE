<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽(挖个坑，等待组件的使用者来填充) -->
    <slot name="center">这是默认值，没有传递时会显示出来1</slot>
    <slot name="footer">这是默认值，没有传递时会显示出来2</slot>
  </div>
</template>

<script>
    export default {
      name: "CategoryList",
      props: [ "title", "listData"]
    }
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    text-align: center;
    background-color: rgb(249, 168, 19);
  }
  
</style>