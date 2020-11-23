<template>
  <div class="users-chat">
      <div class="users-chat-search" v-if = "isSearch">
          <input type="text" placeholder="Поиск сообщений..." v-model="searchMessage">
           <button @click="searchMessage = ''">Очистить поиск</button>
           <button @click = "closeSearch">Закрыть поиск</button>
      </div>
      <chat-message
      v-for = "message in filteredSearches"
      :key = "message.id"
      :message1 = "message"
      :userId = "user.name">
      </chat-message>
      <div class="users-chat-inputs">
          <span class="material-icons" @click="openSearch">search</span>
          <input type="text"
                 class = "users-chat-inputs-input"  
                 v-model = "textMessage"      
                 @keypress.enter="sendMessage" 
                 placeholder="Введите сообщение..."
          >
          <i class="material-icons" @click = "sendMessage">send</i>
      </div>
  </div>
</template>

<script>
import chatMessage from './chat-message'
import {mapActions, mapState} from'vuex'
 
export default {
 name: 'user-chat',
 components: {
     chatMessage
 },
 data() {
     return {
         textMessage: '',
         isSearch: false,
         searchMessage: ''
     }
 },
 mounted() {
     this.SET_NAME_HEADER(this.user.name) 
     this.scrollToEnd()
     if (!this.chats.length) {
        this.FETCH_CHATS()
    }
 },
 updated() {
     this.scrollToEnd();
 },
 computed: {
     filteredSearches() {
      if (this.searchMessage) {
        return this.messages.filter(item => {
            return item.text.toLowerCase().includes(this.searchMessage.toLowerCase());
        });
      }
      return this.messages
    },
    ...mapState([
     'chats'
   ]),
 },
props: {
    messages: {
        type: Array,
        default() {
            return []
        }
    },
    user: {
        type: Object,
        default() {
            return {}
        }
    }
},
     methods: {
         ...mapActions([
             'SET_MESSAGE_TO_API',
             'SET_NAME_HEADER',
             'FETCH_CHATS'
         ]),
         openSearch() {
             this.isSearch = true
             document.querySelector(".users-chat").style.paddingTop = '130' + "px"
         },
         closeSearch() {
             this.isSearch = false
             document.querySelector(".users-chat").style.paddingTop = '100' + "px"
             this.searchMessage = ''
         },
         scrollToEnd() {
				var container = document.querySelector(".users-chat");
                var scrollHeight = container.scrollHeight;
                console.log(scrollHeight)
                container.scrollTop = scrollHeight;
		},
         sendMessage() {
             if (this.textMessage !== '') {
             let user = {...this.user}
             let chat = {
                 id: this.messages.length + 1,
                 time: new Date().toLocaleTimeString('en-US', {
                     hour12: false,
                     hour: 'numeric',
                     minute: 'numeric'
                 }),
                 text: this.textMessage,
                 type: 'own'
             }

             user.chat.push(chat);

             this.SET_MESSAGE_TO_API({userId: user.id, chat: user})
             .then(() => {
                 this.textMessage = ''
             })
             }
         }
     }
}
</script>

<style lang = "scss">
  .users-chat {
      color: black;
      padding-top: 100px;
      padding-bottom: 130px;
      height: auto;

      &-search {
          margin-top: 5px;
          margin-bottom: 5px;
          height: 40px;
          display: grid;
          grid-template-columns: 6fr 2fr 2fr;
          position: fixed;
          top: 80px;
          width: 60%;
          grid-gap: 20px;

          button {
              border-radius: 10px;
              background-color: black;
              color: white;
          }

          input {
              border-radius: 10px;
          }
      }

      &-inputs {
          display: grid;
          grid-template-columns: 1fr 9fr 1fr;
          background-color: rgb(165, 196, 197);
          position: fixed;
          bottom: 80px;
          min-width: 60%;
          height: 60px;
          align-items: center;
          padding-bottom: 5px;
          padding-top: 5px;

          span {
              font-size: 48px;
              justify-self: center;
              cursor: pointer;
          }

          input {
              padding-left: 20px;
              border-radius: 10px;
              height: 80%;
              margin-left: 30px;
          }

          i {
              font-size: 36px;
              align-self: center;
              justify-self: center;
              cursor: pointer;
          }
      }
  }

</style>