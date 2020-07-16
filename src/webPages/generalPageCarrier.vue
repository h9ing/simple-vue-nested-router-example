<template>
  <div>
    <Header></Header>
    <router-view></router-view>
     <h5>目前是載入一般頁面模板</h5>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/general/header';
import Footer from '@/components/general/footer';
export default {
    components:{
        Header,
        Footer
    }
}
</script>
