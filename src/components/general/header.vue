<template>
  <div class="header">
    <router-link to="/">一般頁面Index</router-link><br>
    <router-link to="/page1">一般頁面page1</router-link><br>
    <router-link to="/member">會員頁面Index</router-link><br>
    <h1>我是一般頁面的header</h1>
  </div>
</template>
<style scoped>
  h1{
    background-color:yellow;
    margin:0;
  }
</style>
<script>
export default {
  name: 'generalHeader',
}
</script>