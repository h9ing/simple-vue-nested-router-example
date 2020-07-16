<template>
  <div class="header">
    <router-link to="/member">會員頁面Index</router-link><br>
    <router-link to="/member/page1">會員頁面page1</router-link><br>
    <router-link to="/">一般頁面Index</router-link><br>
    <h1>我是會員頁面的header</h1>
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
  name: 'memberHeader',
}
</script>