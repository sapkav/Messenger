<template>
  <div class="contact-list">
      <div class="contact-list-buttons">
          <i class="material-icons" @click = "addContact">contact_page</i>
          <input type="text" placeholder="Поиск контактов..." v-model="inputContact">
          <button @click = "clearInput">Очистить поиск</button>
      </div>
      <div v-if = "!listHas">
      <contact-user
      v-for = "contact in filteredMovies"
      :key = "contact.id"
      :contact_data="contact"
      class="contact-list-user"
      @to-contact-info = "toContactInfo(contact)">
      </contact-user>
      </div>
      <p v-else class="contact-list-not">Ничего не найдено...</p>
  </div>
</template>

<script>
import contactUser from './contact-user.vue'
import {mapActions, mapState} from 'vuex'

export default {
 name: "contact-list",
 components: {
     contactUser
 },
 data() {
     return {
         inputContact: ''
     }
 },
 methods: {
     ...mapActions([
         'FETCH_CONTACTS',
         'SET_NAME_HEADER'
     ]),
     addContact() {
        this.$router.push({
             name: 'contactAdd'
         })
     },
     toContactInfo(contact) {
         this.$router.push({
             name: 'contact',
             query: { 'id' : contact.id}
         })
         this.SET_NAME_HEADER(contact.name)
     },
     sortСontacts() {
      this.contactList = this.contacts.filter(item => {
      item.name.includes(this.inputContact);
    });
     },
     clearInput() {
         this.inputContact = ''
     }
 },
 mounted() {
     this.FETCH_CONTACTS()
 },
  computed: {
    ...mapState([
     'contacts'
   ]),
       filteredMovies() {
      if (this.inputContact) {
        return this.contacts.filter(item => {
            return item.name.toLowerCase().includes(this.inputContact.toLowerCase());
        });
      }
      return this.contacts
    },
      listHas() {
      return (this.inputContact && !this.filteredMovies.length)
  }
 },
}
</script>

<style lang = "scss">
.contact-list {
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
        grid-template-columns: 1fr 3fr 1fr;
        border-bottom: 1px solid black;
        padding-bottom: 20px;
        padding-top: 20px;

        i {
            cursor: pointer;
            font-size: 48px;
            align-self: center;
            justify-self: center;
        }

        input {
            cursor: pointer;
            padding-left: 10px;
            border-radius: 10px;
        }

        button {
            cursor: pointer;
            width: 90%;
            align-self: center;
            justify-self: center;
            height: 80%;
            border-radius: 10px;
            background-color: black;
            color: white;
        }
    }
}
</style>