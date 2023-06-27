
<script>
// Facciamo l'import dei componenti che utilizzaremo all'interno del template
import Header from "./components/Header.vue"
// import Main from "./components/Main.vue"
// import Footer from "./components/Footer.vue"

export default {
  name:'App',
  components:{
    Header,
    // Main,
    // Footer
  }
}
</script>
<template>
  <!-- <h1>APP</h1> -->
  
  <div class="container">
    <Header />
    <router-view></router-view>
    
  </div>

  <!-- <Main /> -->

  <!-- <Footer /> -->

  
</template>


<style lang="scss">

  @use './scss/main.scss' as *;

</style>