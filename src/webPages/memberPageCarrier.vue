<template>
  <div>
    <Header></Header>
    <router-view></router-view>
     <h5>目前是載入會員頁面模板</h5>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/member/header';
import Footer from '@/components/member/footer';
export default {
    components:{
        Header,
        Footer
    }
}
</script>
