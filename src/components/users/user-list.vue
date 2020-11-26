<template>
   <div class="user-list">
       <div class="user-list-buttons">
           <input type="text" placeholder="Поиск по имени..." v-model = "inputMessages">
            <button @click = "clearInputMessages">Очистить</button>
       </div>
       <div v-if = "!messageHas">
       <user-page
       v-for = "chat in filteredMessages"
       :key = "chat.id"
       :user_data = "chat"
       @deleteChat = "deleteChat">
       </user-page>
       </div>
       <p v-else class="user-list-not">Диалоги не найдены...</p>
   </div>
</template>

<script>
import userPage from './user-page'
import {mapActions, mapState, mapGetters} from 'vuex'

export default {
 name: 'user-list',
 components: {
     userPage
 },
 data() {
     return {
         inputMessages: '',
         bla: false
     }
 },
 methods: {
     ...mapActions([
         'FETCH_CHATS',
         'SET_NAME_HEADER'
     ]),
     clearInputMessages() {
         this.inputMessages = ''
     },
     deleteChat() {
         this.FETCH_CHATS()
     }
 },
 computed: {
     ...mapState([
         'chats'
     ]),
     ...mapGetters([
        'СHATS1'
      ]),
     messageHas() {
      return (this.inputMessages && !this.filteredMessages.length)
    },
     filteredMessages() {
      if (this.inputMessages) {
        return this.chats.filter(item => {
            return item.name.toLowerCase().includes(this.inputMessages.toLowerCase());
        });
      } else {
          let arr = []
          for (let item of this.chats) {
              if (item.chat.length) {
                  arr.push(item)
              }
          }
         return arr
      }
    }
 },
 mounted() {
     this.FETCH_CHATS()
     this.SET_NAME_HEADER()
 }
}
</script>

<style lang = "scss">
.user-list {
    padding-top: 80px;
    padding-bottom: 80px;

    &-not {
        text-align: center;
        padding-top: 40px;
        font-weight: 700;
        font-size: 36px;
    }

    &-buttons {
        display: grid;
        grid-template-columns:  11fr 2fr;
        border-bottom: 1px solid black;
        padding-bottom: 20px;
        padding-top: 20px;
        height: 90%;

        input {
            cursor: pointer;
            border-radius: 10px;
            height: 48px;
            margin-left: 20px;
            margin-right: 10px;
            padding-left: 20px;
        }

        button {
            cursor: pointer;
            height: 48px;
            width: 90%;
            align-self: center;
            justify-self: center;
            border-radius: 10px;
            background-color: black;
            color: white;
        }
    }
}
</style>