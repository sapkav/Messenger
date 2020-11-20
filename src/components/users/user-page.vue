<template>
  <div class="user-page" @click = "toChat">
     <div class="user-page-avatar"></div>
     <div class="user-page-info">
         <p class = "user-page-info-name">{{user_data.name}}</p>
         <p class = "user-page-info-message">{{user_data.chat[user_data.chat.length - 1].text}}</p>
     </div>
     <div class="user-page-time">{{user_data.chat[user_data.chat.length - 1].time}}</div>
  </div>
</template>

<script>
export default {
 name: 'user-page',
 props: {
     user_data: {
         type: Object,
         default() {
             return {}
         }
     }
 },
 methods: {
     toChat() {
         this.$router.push({
             name: 'chat',
             params: {
                 'messages': this.user_data.chat,
                 'user' : this.user_data
             }
     })
     }
 }
}
</script>

<style lang = "scss">
.user-page {
   padding-top: 20px;
   display: grid;
   grid-template-columns: 1fr 2fr 1fr;
   justify-items: center;
   align-items: center;
   padding-bottom: 20px;
   border-bottom: 1px solid black;

    &:last-child {
      border-bottom: none;
    }

   &-avatar {
        background-color: rgb(142, 163, 129);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        justify-self: center;
   }

   &-info {
       word-break: break-all;
       width: 100%;
       justify-self: start;

       &-name {
        justify-self: start;
        font-size: 28px;
        font-weight: 700;
        padding-bottom: 15px;
       }

       &-message {
           height: 29px;
           font-size: 24px;
           overflow: hidden;
       }
   }

   &-time {
       font-size: 28px;
   }
}
</style>