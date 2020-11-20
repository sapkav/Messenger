<template>
  <div class="add-contact">
      <div class="add-contact-title">
        Добавление Контакта
      </div>
      <div class="add-contact-list">
        <div class="add-contact-list-vvod">
          <p>Введите имя: </p>
          <input type="text" placeholder="Имя..." v-model="nameText">
        </div>
        <div class="add-contact-list-vvod">
          <p>Введите номер телефона: </p>
          <input type="text" placeholder="Номер..." v-model="numberText">
        </div>
      </div>
  </div>
</template>

<script>
export default {
 name: 'add-contact',
 data() {
   return {
     nameText: '',
     numberText: ''
   }
 }
}
</script>

<style lang = "scss">
  .add-contact {
      padding-bottom: 80px;
      padding-top: 80px;

      &-title {
        padding-top: 20px;
        padding-bottom: 20px;
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
          justify-self: center;
          font-size: 24px;
        }

        input {
          justify-self: start;
          border-radius: 10px;
          width: 70%;
        }
        }
      }
  }
</style>