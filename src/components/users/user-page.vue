<template>
  <div class="user">
  <div class="user-page" @click = "toChat">
     <div class="user-page-avatar"></div>
     <div class="user-page-info">
         <p class = "user-page-info-name">{{user_data.name}}</p>
         <p class = "user-page-info-message" v-if = "messView === 'два'">{{user_data.chat[user_data.chat.length - 1].text}}</p>
         <p class = "user-page-info-message" v-else>********************</p>
     </div>
     <div class="user-page-time">{{user_data.chat[user_data.chat.length - 1].time}}</div>
  </div>
  <span class="material-icons" @click = "deleteAllMessages">
   delete_forever
  </span> 
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
 name: 'user-page',
 data() {
     return {
         messView: ''
     }
 },
 props: {
     user_data: {
         type: Object,
         default() {
             return {}
         }
     }
 },
 mounted() {
       if (localStorage.mes) {
            this.messView = localStorage.mes
        }
 },
 methods: {
     ...mapActions([
         'DELETE_MESSAGES_FROM_CHAT'
     ]),
     toChat() {
         this.$router.push({
             name: 'chat',
             params: {
                 'messages': this.user_data.chat,
                 'user' : this.user_data
             }
     })
     },
     deleteAllMessages() {
         this.DELETE_MESSAGES_FROM_CHAT({userId : this.user_data.id, chat: {name: this.user_data.name, chat: []}})
         .then( this.$emit('deleteChat'))
     }
 }
}
</script>

<style lang = "scss">
.user {
    border-bottom: 1px solid black;
    display: grid;
    grid-template-columns: 12fr 1fr;
  &-page {
   padding-top: 20px;
   display: grid;
   grid-template-columns: 1fr 2fr 1fr;
   justify-items: center;
   align-items: center;
   padding-bottom: 20px;

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
       justify-self: end;
   }
}

span {
    align-self: center;
    justify-self: center;
    font-size: 36px;
    cursor: pointer;
}
}
</style>