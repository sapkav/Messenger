<template>
  <div class="contact">
  <div class="contact-user" @click="toContactInfo">
     <div class="contact-user-img"></div>
     <div class="contact-user-name">
         {{contact_data.name}}
     </div>
     <div
      class="contact-user-status"
      :class="contact_data.status"></div>
  </div>
  <span class="material-icons" @click="deleteContact">
   delete_forever
  </span> 
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
name: "contact-user",
props: {
    contact_data: {
        type: Object,
        default() {
            return {}
        }
    }
},
methods: {
    ...mapActions([
        'DELETE_CONTACT',
        'DELETE_CONTACT_CHAT'
    ]),
    toContactInfo() {
        this.$emit('to-contact-info')
    },
    deleteContact() {
        this.DELETE_CONTACT({userId: this.contact_data.id})
        this.DELETE_CONTACT_CHAT({userId: this.contact_data.id})
        .then(this.$emit('deleteAll'))
    }
}
}
</script>

<style lang = "scss">
.contact {
    display: grid;
    grid-template-columns: 12fr 1fr;
    border-bottom: 1px solid black;
    &:last-child {
      border-bottom: none;
    }

  &-user {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;

    &-img {
        background-color: rgb(142, 163, 129);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        justify-self: center;
    }

    &-name {
        justify-self: start;
        font-size: 28px;
        font-weight: 700;
    }

    &-status {
        justify-self: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    &-status.online {
      background: green;
    }
    &-status.offline {
      background: red;
    }
}

span {
    font-size: 40px;
    align-self: center;
    cursor: pointer;
}
}
</style>