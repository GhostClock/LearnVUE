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
  <template v-if="showCategory">
    <router-link to="/category">分类</router-link>
  </template>

  <button @click="btnClick">关于</button>

  <router-view v-slot="props">
    <transition name="gc">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>

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

  let showCategory = true
</script>

<style lang="css" scoped>
  .gc-active {
    color: red;
  }

  .gc-enter-from,
  .gc-leave-to {
    opacity: 0;
  }

  .gc-enter-to,
  .gc-leave-from {
    opacity: 1;
  }

  .gc-enter-active,
  .gc-leave-active {
    transition: opacity 1s ease;
  }

</style>
