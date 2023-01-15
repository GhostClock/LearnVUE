<template>
  <div>
    <WebSite />
    <hr />
    <UserInfo />
  </div>
</template>

<script>
  import WebSite from './components/WebSite'
  import UserInfo from "./components/UserInfo";

  export default {
    name: "App",
    components: { WebSite, UserInfo },
  };
</script>

<style>
</style>