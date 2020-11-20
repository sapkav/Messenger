<template>
  <div class="contact-user-info">
      <div class="contact-user-info-avatar"></div>
      <div class="contact-user-info-content">
       <p class="contact-user-info-content-number">{{currentContact.phone}}</p>
       <div class="contact-user-info-content-tools">
          <button class="start-call">Call</button>
          <button class="start-chat" @click = "checkChats">Start chat</button>
      </div>
      </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
name: "contact-user-info",
computed: {
    ...mapState([
        'contacts',
        'chats'
    ])
},
data() {
  return {
      currentContact: {}
  }
},
methods: {
    ...mapActions([
        'FETCH_CHATS',
        'FETCH_CONTACTS'
    ]),
    checkChats() {
        if (!this.chats.length) {
            this.FETCH_CHATS()
            .then(() => {
                this.toChat()
            })
        } else {
            this.toChat()
        }
    },
    toChat() {
        this.chats.map((chat) => {
            if (chat.id === this.currentContact.id) {
                this.$router.push({
                    name: 'chat',
                    params: {'messages': chat.chat, 'user' : chat},
                    query : {'id' : this.currentContact.id}
                })
            }
        })
    }
},
mounted() {
    if (!this.contacts.length) {
        this.FETCH_CONTACTS()
        .then(() => {
            this.contacts.find(contact => {
            if (contact.id == this.$route.query.id){
            this.currentContact = contact
        }
    })
        })
    } else {
    this.contacts.find(contact => {
        if (contact.id == this.$route.query.id){
            this.currentContact = contact
        }
    })
 }
}
}
</script>

<style lang = "scss">
.contact-user-info {
    margin: 0;
    position: absolute;
    bottom: 80px;
    right: 0;
    left: 0;
    margin: auto;
    top: 80px;
    grid-template-columns: 1fr 1fr;
    display: grid;
    align-items: center;
    justify-items: center;
    width: 60%;

    &-avatar {
        background-color: grey;
        width: 70%;
        height: 70%;
    }

    &-content {
        display: grid;

        &-number {
            font-size: 40px;
            padding-bottom: 20px;
            text-align: center;
        }

        &-tools {

            .start-call {
                border: none;
                border-radius: 10px; 
                padding: 7px 15px;
                font-size: 28px;
                margin-right: 20px;
                background-color: palegreen;
                color: black;
            }

            .start-chat {
                background-color: rgb(21, 21, 139);
                color: rgb(255, 34, 45);
                border: none;
                border-radius: 10px; 
                padding: 7px 15px;
                font-size: 28px;
            }
        }
    }
}

</style>