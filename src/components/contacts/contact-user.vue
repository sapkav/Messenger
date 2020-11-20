<template>
  <div class="contact-user" @click="toContactInfo">
     <div class="contact-user-img"></div>
     <div class="contact-user-name">
         {{contact_data.name}}
     </div>
     <div
      class="contact-user-status"
      :class="contact_data.status"></div>
  </div>
</template>

<script>
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
    toContactInfo() {
        this.$emit('to-contact-info')
    }
}
}
</script>

<style lang = "scss">
.contact-user {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid black;

    &:last-child {
      border-bottom: none;
    }


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
</style>