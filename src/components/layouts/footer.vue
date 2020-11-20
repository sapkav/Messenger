<template>
   <div class="footer">
       <router-link to = "/">
           <i class="material-icons md-36">person_pin</i>
       </router-link>
       <router-link to = "chats">
           <i class="material-icons">chat</i>
       </router-link>
       <router-link to = "details">
           <i class="material-icons">settings</i>
       </router-link>
       <router-link to = "contacts">
           <i class="material-icons">call</i>
       </router-link>
       <router-link to = "contacts">
           <i class="material-icons">home</i>
       </router-link>
   </div>
</template>

<script>
export default {
 name: 'footer-nav'
}
</script>

<style lang = "scss" scoped>
.material-icons {
font-size: 36px;
}

.footer {
  background-color: rgb(186, 189, 221);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  height: 80px;
}
</style>