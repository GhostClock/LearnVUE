<template>
  <router-link to="/home" active-class="gc-active">首页</router-link>
  <router-link to="/about" active-class="gc-active">关于</router-link>

  <router-view></router-view>
</template>

<script setup>

</script>

<style>
.gc-active {
  color: red;
}
</style>
