<template>
  <div class="details-main">
      <h1>Выборка стилей</h1>
      <h2>Виды шрифтов</h2>
      <div class="details-main-font">
          <div class="details-main-font-pick">
          <input type="radio" id="fontOne" value="Один" v-model="fonts">
          <label for="fontOne"><span class="details-main-font-pick-11">ТЕкст - Пример!145).</span></label>
          </div>
          <div class="details-main-font-pick">
         <input type="radio" id="fontTwo" value="Два" v-model="fonts">
          <label for="fontTwo"><span class="details-main-font-pick-12">ТЕкст - Пример!145).</span>.</label>
          </div>
          <div class="details-main-font-pick">
         <input type="radio" id="fontThree" value="Три" v-model="fonts">
          <label for="fontThree"><span class="details-main-font-pick-13">ТЕкст - Пример!145).</span></label>
          </div>
          <div class="details-main-font-pick">
         <input type="radio" id="fontFour" value="Четыре" v-model="fonts">
          <label for="fontFour"><span class="details-main-font-pick-14">ТЕкст - Пример!145).</span>.</label>
          </div>
          <div class="details-main-font-pick">
         <input type="radio" id="fontFive" value="Пять" v-model="fonts">
          <label for="fontFive"><span class="details-main-font-pick-15">ТЕкст - Пример!145).</span></label>
          </div>
          <div class="details-main-font-pick">
         <input type="radio" id="fontSix" value="Шесть" v-model="fonts">
          <label for="fontSix"><span class="details-main-font-pick-16">ТЕкст - Пример!145).</span></label>
          </div>
      </div>
      <h2>Цветовая гамма</h2>
      <div class="details-main-color">
          <label for="colorOne" class="details-main-color-pick">
          <input type="radio" id="colorOne" value="Один" v-model="colors">
          <div class="details-main-color-pick-style1_11"></div>
          <div class="details-main-color-pick-style2_21"></div>
          <p>(Cтандарт).</p>
          </label>
         <label for="colorTwo" class="details-main-color-pick">
          <input type="radio" id="colorTwo" value="Два" v-model="colors">
          <div class="details-main-color-pick-style1_12"></div>
          <div class="details-main-color-pick-style2_22"></div>
          <p>(Сине-зеленый).</p>
          </label>
         <label for="colorThree" class="details-main-color-pick">
          <input type="radio" id="colorThree" value="Три" v-model="colors">
          <div class="details-main-color-pick-style1_13"></div>
          <div class="details-main-color-pick-style2_23"></div>
          <p>(Желто-пурпурный).</p>
          </label>
         <label for="colorFour" class="details-main-color-pick">
          <input type="radio" id="colorFour" value="Четыре" v-model="colors">
          <div class="details-main-color-pick-style1_14"></div>
          <div class="details-main-color-pick-style2_24"></div>
          <p>(Черно-белый).</p>
          </label>
         <label for="colorFive" class="details-main-color-pick">
          <input type="radio" id="colorFive" value="Пять" v-model="colors">
          <div class="details-main-color-pick-style1_15"></div>
          <div class="details-main-color-pick-style2_25"></div>
          <p>(Розово-болотный).</p>
          </label>
         <label for="colorSix" class="details-main-color-pick">
          <input type="radio" id="colorSix" value="Шесть" v-model="colors">
          <div class="details-main-color-pick-style1_16"></div>
          <div class="details-main-color-pick-style2_26"></div>
          <p>(Коричнево-голубой).</p>
          </label>
      </div>
      <h2>Скрывать отображение последнего сообщения</h2>
      <div class="details-main-mes">
          <div>
          <input type="radio" v-model = "mesView" id="mesTrue" value="один">
          <label for="mesTrue">Да</label>
          </div>
          <div>
          <input type="radio" v-model = "mesView" id="mesFalse" value="два">
          <label for="mesFalse">Нет</label>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "details-main",
    data() {
        return {
            fonts: '',
            colors: '',
            mesView: ''
        }
    },
    watch: {
        fonts: function() {
            localStorage.fonts = this.fonts;
            if (this.fonts === 'Два') {
            $('.main-wrapper-info').css({"font-family": '"Lobster", cursive'})
            $('.details-main-color-pick p').css('font-size', '28px')
            }
           else if (this.fonts === 'Три') {
            $('.main-wrapper-info').css({"font-family": '"openSans", sans-serif'})
            $('.details-main-color-pick p').css('font-size', '28px')
        } else if (this.fonts === 'Четыре') {
             $('.main-wrapper-info').css({"font-family": '"Amatic SC", cursive'})
             $('.details-main-color-pick p').css('font-size', '28px')
        } else if (this.fonts === 'Пять') {
            $('.main-wrapper-info').css({"font-family": '"Caveat", cursive'})
            $('.details-main-color-pick p').css('font-size', '28px')
        } else if (this.fonts === 'Шесть') {
            $('.main-wrapper-info').css({"font-family": '"Press Start 2P", cursive'})
            $('.details-main-color-pick p').css('font-size', '10px')
        } else {
            $('.main-wrapper-info').css({"font-family": '"Balsamiq Sans", cursive'})  
            $('.details-main-color-pick p').css('font-size', '28px')
        }
        },
        colors: function() {
            localStorage.colors = this.colors;
            if (this.colors === 'Два') {
            $('.header, .footer').css('background-color', '#52dc92')
            $('.main-wrapper-info').css('background-color', '#427dc3')
            $('.main-wrapper').css('color', 'black')
            }
           else if (this.colors === 'Три') {
            $('.header, .footer').css('background-color', '#a54cae')
            $('.main-wrapper-info').css('background-color', '#efe53a')
            $('.main-wrapper').css('color', '#002654')
        } else if (this.colors === 'Четыре') {
            $('.header, .footer').css('background-color', 'white')
            $('.main-wrapper-info').css('background-color', 'black')
            $('.main-wrapper').css('color', '#6cce8b')  
        } else if (this.colors === 'Пять') {
            $('.header, .footer').css('background-color', '#99994f')
            $('.main-wrapper-info').css('background-color', 'pink')
            $('.main-wrapper').css('color', 'black')
        } else if (this.colors === 'Шесть') {
            $('.header, .footer').css('background-color', '#30fffd')
            $('.main-wrapper-info').css('background-color', '#b9d66e')
            $('.main-wrapper').css('color', 'black')
        } else {
            $('.header, .footer').css('background-color', ' rgb(186, 189, 221)')
            $('.main-wrapper-info').css('background-color', 'white')
            $('.main-wrapper').css('color', 'black')    
        }
        },
        mesView: 
            function() {
              localStorage.mes = this.mesView;
        }
    },
    methods: {
        changeFonts() {
        }
    },
    mounted() {
        if (localStorage.colors) {
            this.colors = localStorage.colors
        }
        if (localStorage.fonts) {
            this.fonts = localStorage.fonts
        }
        if (localStorage.mes) {
            this.mesView = localStorage.mes
        }
    }
}
</script>

<style lang = "scss">

.details-main {
    padding-top: 80px;
    padding-bottom: 80px;

    h1 {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 36px;
        text-align: center;
    }

    h2 {
            text-align: center;
            font-size: 24px;
            padding-bottom: 30px;
    }

    &-font {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: start;

        &-pick {
            padding-left: 30px;
            padding-bottom: 15px;
            
            label {
                padding-left: 10px;
                font-size: 30px;
            }
                 
                 &-11 {
                     @include Stalin;
                 }

                 &-12 {
                    @include Lobster;
                }

                &-13 {
                    @include openSans;
                }

                &-14 {
                    @include Amatic;
                }

                &-15 {
                    @include Caveat
                }

                &-16 {
                    @include PressStart
                }
        }
    }

    &-color {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: start;


        &-pick {
            padding-bottom: 20px;
            padding-left: 30px;
            align-items: center;
            display: flex;

            input {
                margin-right: 10px;
            }

            &-style1 {
                &_11, &_12, &_13, &_14, &_15, &_16 {
                margin-right: 10px;
                width: 50px;
                height: 50px;
                }

                &_11 {
                    background-color: white;
                }
                &_12 {
                    background-color: #427dc3;
                }
                &_13 {
                    background-color:#efe53a;
                }
                &_14 {
                    background-color:black;
                }
                &_15 {
                    background-color: pink;
                }
                &_16 {
                    background-color: #b9d66e;
                }
                
            }


            &-style2 {

                &_21, &_22, &_23, &_24, &_25, &_26 {
                margin-right: 10px;
                width: 50px;
                height: 50px;
                }
                
                &_21 {
                    background-color: rgb(186, 189, 221);
                }
                &_22 {
                    background-color:#52dc92;
                }
                &_23 {
                    background-color:#a54cae;
                }
                &_24 {
                    background-color:  #e6e6e6;
                }
                &_25 {
                    background-color: #99994f;
                }
                &_26 {
                    background-color: #30fffd;
                }
            }

            p {
                font-size: 24px;
            }
        }
    }

    &-mes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        padding-bottom: 20px;

        label {
            padding-left: 20px;
            font-size: 28px;
        }
    }
}
</style>