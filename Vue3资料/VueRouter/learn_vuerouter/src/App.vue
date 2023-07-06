<template>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-link :to="'/user/' + name + '/id/' + 11" >用户</router-link>

  <button @click="btnClick">关于</button>

  <router-view></router-view>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const name = 'cg'
  
  const router = useRouter()

  const btnClick = () => {
    // router.push('/about')
    router.push({
      path: '/about',
      query: {
        name: 'cg',
        age: 18
      }
    })

    // router.replace()
    // router.go()
    // router.forward()
    // router.back()
  }

</script>

<style>
.gc-active {
  color: red;
}
</style>
