<template>
  <div class="add-contact">
      <div class="add-contact-title">
        Добавление Контакта
      </div>
      <div class="add-contact-list">
        <p class="add-contact-warning" v-show="!isName">Введите имя!!!!!</p>
        <div class="add-contact-list-vvod">
          <p>Введите имя: </p>
          <input type="text" placeholder="Имя..." v-model="nameText">
        </div>
        <p class="add-contact-warning" v-show = "!isCorrectNumber">Введите корректный номер телефона!!!</p>
        <div class="add-contact-list-vvod">
          <p>Введите номер телефона: </p>
          <input type="text" placeholder="Номер..." v-model="numberText">
        </div>
          <div class="add-contact-list-vvod">
          <p>Введите кличку(необязательно): </p>
          <input type="text" placeholder="Кличка..." v-model="nicknameText">
        </div>
      </div>
      <p class="add-contact-parag" v-show="contactsHasName">Контакт с таким именем уже существует...</p>
      <p class="add-contact-parag" v-show="contactsHasNumber">Контакт с таким <b>номером</b> уже существует...</p>
      <div class="add-contact-buttons" v-show = "!contactsHasName && !contactsHasNumber" v-if = "!contactSuccesful">
        <button class="btn add-contact-buttons-plus" @click = "addToContact">Добавить в контакты</button>
      </div>
      <div v-if = "contactSuccesful" class="add-contact-change">
        <p>Аккаунт успешно создан!!!</p>
        <div class="add-contact-change-pages">
          <p>Добавить еще один аккаунт</p>
          <button class="btn" @click = newAcc>Добавить аккаунт</button>
          <p>Вернуться в главное меню</p>
          <button class="btn" @click = toMenu>Главное меню</button>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
 name: 'add-contact',
 data() {
   return {
     nameText: '',
     numberText: '',
     nicknameText: '',
     isCorrectNumber: true,
     isName: true,
     contactSuccesful: false
    }
   },
   methods: {
      ...mapActions([
         'FETCH_CONTACTS',
         'SET_NAME_HEADER',
         'SET_CONTACT_TO_CONTACTS',
         'SET_CONTACT_TO_CHATS'
     ]),
     addToContact() {
       console.log(this.numberText.length)
       if (this.numberText.length !== 11 && this.nameText.length <= 3) {
         this.isName = false
         this.isCorrectNumber = false
       } else if (this.numberText.length !== 11) {
         this.isName = true
         this.isCorrectNumber = false
       } else if (this.nameText.length <= 3) {
         this.isName = false
         this.isCorrectNumber = true
       } else {
         this.isName = true
         this.isCorrectNumber = true
         this.contactSuccesful = true
        /* this.SET_CONTACT_TO_CONTACTS({name : this.nameText, nickname: this.nicknameText, phone: this.numberText, status: 'offline'})
             .then(() => {
                 this.textMessage = ''
             })
          this.SET_CONTACT_TO_CHATS({name : this.nameText, chat: []}) */
         this.nameText = ''
         this.numberText = ''
         this.nicknameText = ''
       }
     },
     newAcc() {
       this.contactSuccesful = false
     },
     toMenu() {
      this.$router.push({
             name: 'contacts'
     })
     }
   },
   mounted() {
     if (!this.contacts.length) {
       this.FETCH_CONTACTS()
     }
   },
   computed: {
     ...mapState([
       'contacts'
     ]),
     contactsHasName() {
       let isHas = false
       for (let contact of this.contacts) {
         if (contact.name.toLowerCase() == this.nameText.toLowerCase()) {
           isHas = true
         } 
       }
       return isHas
     },
      contactsHasNumber() {
       let isHas = false
       for (let contact of this.contacts) {
         if (contact.phone === this.numberText) {
           isHas = true
         } 
       }
       return isHas
     }
   }
}
</script>

<style lang = "scss">
  .add-contact {
      padding-bottom: 80px;
      padding-top: 80px;

      &-warning {
        color: red;
        text-align: center;
        padding-left: 40px;
      }

      &-title {
        padding-top: 20px;
        padding-bottom: 40px;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
      }

      &-list {

        &-vvod {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-bottom: 40px;

        p {
          padding-bottom: 10px;
          padding-top: 10px;
          justify-self: start;
          font-size: 24px;
          padding-left: 30px;
        }

        input {
          padding-left: 20px;
          justify-self: start;
          border-radius: 10px;
          width: 70%;
        }
        }
      }

      &-parag {
        color: red;
        padding-bottom: 30px;
        text-align: center;
        font-size: 24px;
      }

      &-buttons {
        display: grid;
        justify-items: center;

        &-plus {
          width: 50%;
          font-size: 24px;
        }
      }

      &-change {
        
        p {
          text-align: center;
          font-size: 24px;
        }

        &-pages {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 30px;
          height: 40px;

          p {
            margin-bottom: 20px;
          }

          button {
            padding: 7px 0;
            width: 60%;
            margin-bottom: 20px;
          }
        }
      }
  }
</style>