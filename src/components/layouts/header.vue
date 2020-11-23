<template>
  <div class="header">
      <div class="header-back" @click="$router.go(-1)">
          <i class="material-icons">keyboard_arrow_left</i>
          <span>Back</span>
      </div>
      <div class="header-user-info">
          <span v-if = "!isCoreRoute">{{currentUserChat}}</span>
          <span v-else>Messenger</span>
      </div>
      <div class="header-right-side"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
 name: 'header-nav',
 computed: {
     ...mapState([
         'currentUserChat'
     ]),
     isCoreRoute() {
         if (this.$route.path === '/'){
             return true
         } else if (this.$route.path === '/chats') {
             return true
         } else {
             return false
         }
     }
 }
}
</script>

<style lang = "scss">
.header {
  color: black;
  background-color: rgb(186, 189, 221);
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

    &-back {
        justify-self: start;
        display: flex;
        align-content: center;

        span {
            font-size: 24px;
        }
    }

    &-user-info {
        font-size: 36px;
    }

    &-right-side {

    }
}
</style>