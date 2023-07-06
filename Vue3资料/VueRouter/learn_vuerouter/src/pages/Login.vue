<template>
  <div>
    <h2>这是登录页面</h2>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const login = () => {
    localStorage.setItem('token', 'token-gc')
    router.push({
      path: '/home',

    })
  }
</script>

<style lang="scss" scoped>

</style>