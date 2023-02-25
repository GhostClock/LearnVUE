
<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
  import Search from './components/SearchCom'
  import List from './components/ListCom'

  export default {
    name: 'App',
    components: { Search, List }
  }
</script>