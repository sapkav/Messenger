<template>
   <div class="chat-message" :class="className">
        <div class="chat-message-content">
           <p class="chat-message-content-name" v-if="messageType">{{userId}}</p>
           <p class="chat-message-content-name" v-else>Me</p>
           <p class="chat-message-content-parag">{{message1.text}}</p>
           <p class="chat-message-content-time">{{message1.time}}</p>
        </div>
   </div>
</template>

<script>
export default {
 name: 'chat-message',
 props: {
    message1:{
       type: Object,
       default() {
          return {}
       }
    },
    userId: {
       type: String,
       default() {
          return ''
       }
    }
 },
 computed: {
    className() {
       return {
          'chat_own': this.message1.type === 'own',
          'chat_others': this.message1.type === 'others'
       }
    },
    messageType() {
       if (this.message1.type === 'others') {
          return true
       } else {
          return false
       }
    }
 }
}
</script>

<style lang = "scss">
.chat-message {
   color: black;
   word-break: break-all;
   border: 1px black solid;
   border-radius: 10px;
   padding-top: 5px;
   padding-bottom: 5px;
   margin-bottom: 30px;
   background-color: rgb(233, 227, 227);


 &-content {
    &-name {
       padding-bottom: 7px;
       font-weight: 700;
       font-size: 24px;
    }

    &-parag {
       
       letter-spacing: 1.2px;
       line-height: 25px;
       font-size: 20px;
    }

   &-time {
    padding-top: 12px;
    font-size: 15px;
 }
 }
   
}
   .chat_others {
      padding-left: 10px;
      text-align: left;
      width: 50%;
      background-color: rgb(245, 245, 245);
      display: flex;
    justify-content: flex-start;
   }

  .chat_own {
     padding-right: 10px;
     text-align: right;
   width: 50%;
     margin-left: auto;
  margin-right: 0em;
    background-color: rgb(211, 237, 255);
    display: grid;
    justify-items: end;
 }
</style>