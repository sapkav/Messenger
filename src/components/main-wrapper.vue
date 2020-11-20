<template>
  <div class="main-wrapper">
    <vHeader></vHeader>
    <div  class="main-wrapper-info">
    <router-view></router-view>
  </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from './layouts/header'
import vFooter from './layouts/footer'

export default {
  name: 'mainWrapper',
  components: {
    vHeader,
    vFooter
  }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main-wrapper {
   width: 100%;
   background-color: rgb(233, 227, 227);  
   min-height: 100vh;

   
   &-info { 
     background-color: white;
     width: 60%;
     margin: 0 auto;
     min-height: 100vh;
   }
 }

</style>
