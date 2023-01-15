<template>
  <div>
    <UserInfo name="李四" sex="女" :age='20' />

    <hr>
  </div>
</template>

<script>
    import UserInfo from './components/UserInfo'
    export default {
        name:'App',
        components:{ UserInfo },
    }
</script>

<style>

</style>