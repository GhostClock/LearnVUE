<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>Home的内容1</li>
      <li>Home的内容2</li>
      <li>Home的内容3</li>
      <li>Home的内容4</li>
      <li>Home的内容5</li>
    </ul>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">动态</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>

</style>