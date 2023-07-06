<template>
  <!-- 
    props: href 跳转的链接
    props: route对象
    props: navigate导航函数
    props: isActive 当前是否处于活跃状态
    props: isExactActive 当前是否处于精确的活跃状态
   -->
  <router-link to="/home" v-slot="props" custom>
    <NavBar title="首页" />
    <button @click="props.navigate">测试文本</button>
    <span>{{ props.href }}</span>
    <!-- <span>{{ props.route }}</span> -->
    <!-- <span>{{ props.navigate }}</span> -->
    <span :class="{'active': props.isActive}">{{ props.isActive }}</span>
    <span :class="{'active': props.isExactActive}">{{ props.isExactActive }}</span>

  </router-link>

  <router-link to="/about">关于</router-link>
  <router-link :to="'/user/' + name + '/id/' + 11" >用户</router-link>

  <button @click="btnClick">关于</button>

  <router-view></router-view>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  import NavBar from './components/NavBar.vue';

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
