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
import $ from 'jquery'

export default {
  name: 'mainWrapper',
  components: {
    vHeader,
    vFooter
  },
  mounted() {
            if (localStorage.colors === 'Два') {
            $('.header, .footer').css('background-color', '#52dc92')
            $('.main-wrapper-info').css('background-color', '#427dc3')
            $('.main-wrapper').css('color', 'black')
            }
           else if (localStorage.colors === 'Три') {
            $('.header, .footer').css('background-color', '#a54cae')
            $('.main-wrapper-info').css('background-color', '#efe53a')
            $('.main-wrapper').css('color', '#002654')
        } else if (localStorage.colors === 'Четыре') {
            $('.header, .footer').css('background-color', 'white')
            $('.main-wrapper-info').css('background-color', 'black')
            $('.main-wrapper').css('color', '#6cce8b')
        } else if (localStorage.colors === 'Пять') {
            $('.header, .footer').css('background-color', '#99994f')
            $('.main-wrapper-info').css('background-color', 'pink')
            $('.main-wrapper').css('color', 'black')
        } else if (localStorage.colors === 'Шесть') {
            $('.header, .footer').css('background-color', '#30fffd')
            $('.main-wrapper-info').css('background-color', '#b9d66e')
            $('.main-wrapper').css('color', 'black')
        } else {
            $('.header, .footer').css('background-color', ' rgb(186, 189, 221)')
            $('.main-wrapper-info').css('background-color', 'white')
            $('.main-wrapper').css('color', 'black')    
        }

        if (localStorage.fonts === 'Два') {
            $('.main-wrapper-info').css({"font-family": '"Lobster", cursive'})
            $('.details-main-color-pick p').css('font-size', '28px')
            }
           else if (localStorage.fonts === 'Три') {
            $('.main-wrapper-info').css({"font-family": '"openSans", sans-serif'})
            $('.details-main-color-pick p').css('font-size', '28px')
        } else if (localStorage.fonts === 'Четыре') {
             $('.main-wrapper-info').css({"font-family": '"Amatic SC", cursive'})
             $('.details-main-color-pick p').css('font-size', '28px')
        } else if (localStorage.fonts === 'Пять') {
            $('.main-wrapper-info').css({"font-family": '"Caveat", cursive'})
            $('.details-main-color-pick p').css('font-size', '28px')
        } else if (localStorage.fonts === 'Шесть') {
            $('.main-wrapper-info').css({"font-family": '"Press Start 2P", cursive'})
            $('.details-main-color-pick p').css('font-size', '10px')
        } else {
            $('.main-wrapper-info').css({"font-family": '"Balsamiq Sans", cursive'})  
            $('.details-main-color-pick p').css('font-size', '28px')
        }
  }   
}
</script>


<style scoped lang="scss">
 .main-wrapper {
   width: 100%;
   background-color: rgb(233, 227, 227);  
   min-height: 100vh;

   
   &-info { 
     @include Stalin;
     background-color: white;
     width: 60%;
     margin: 0 auto;
     min-height: 100vh;
   }
 }

</style>
