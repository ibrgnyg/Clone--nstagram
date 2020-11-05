<template>
  <div id="app">
    <Header/>

    <div class="main">
    <div class="container">
    <router-view />
    </div>

      
    </div>
    
  </div>
</template>
<script>
import Header from "../src/components/Header.vue";
export default {
  name:"App",
  components:{
    Header
  }

}
</script>
<style scoped>
.main{
  padding-top: 40px;
 
}
.container{
   max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}
</style>


