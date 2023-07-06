<template>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-link :to="'/user/' + name + '/id/' + 11" >用户</router-link>

  <router-view></router-view>
</template>

<script setup>
  const name = 'cg'
</script>

<style>
.gc-active {
  color: red;
}
</style>
