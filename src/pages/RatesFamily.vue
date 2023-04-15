<template>
  <q-page>
    <div class="family-page">
      <div class="family-page_block">
        <div class="family-page_block-main">
          <div class="family-page_block-main_title">
            <div class="family-page_block-main_title-content">
              <div class="family-page_block-main_title-content_one">
                <h2>Семейный</h2>
                <p>Часовая фотосессия</p>
                <p>Предварительный подбор удобной и красивой локации</p>
                <p>По запросу помогу организовать транспорт</p>
              </div>
              <div class="family-page_block-main_title-content_two">
                <h2>Вы получаете</h2>
                <p>25 фотографий в ретуши</p>
                <p>Исходные фотографии</p>
                <p>Все фотографии вы получаете на портале с удобным пользованием</p>
              </div>
              <div class="family-page_block-main_title-content_three">
                <h2>Стоимость</h2>
                <div class="text-block">
                  <p>
                    <span class="gold">
                      Алания
                    </span>
                    250 евро
                  </p>
                </div>
                <div class="text-block">
                  <p>
                    <span class="gold">
                      Анталия/Сиде/Кемер
                    </span>
                    320 евро
                  </p>
                </div>
                <div class="text-block">
                  <p>
                    <span class="gold">
                      Стамбул/Фетхие/Мармарис/Бодрум
                    </span>
                    450 евро
                  </p>
                </div>
              </div>
              <div class="family-page_block-main_title-content_btn">
                <div class="family-page_block-main_title-content_btn-text"
                     @click="goToInst()">
                  <p>Смотреть портфолио</p>
                </div>
              </div>
            </div>
          </div>
          <div class="family-page_block-main_img">
            <div class="family-page_block-main_img-block">
              <img class="img-family" src="/img/rates/family/family-1.png" alt="">
            </div>
          </div>
        </div>
        <div class="family-page_block-aside">
          <div class="family-page_block-aside-img">
            <div class="family-page_block-aside-img-block">
              <img class="img-family" src="/img/rates/family/family-2.png" alt="">
            </div>
          </div>
          <div class="family-page_block-aside-img">
            <div class="family-page_block-aside-img-block">
              <img class="img-family" src="/img/rates/family/family-3.png" alt="">
            </div>
          </div>
          <div class="family-page_block-aside-img">
            <div class="family-page_block-aside-img-block">
              <img class="img-family" src="/img/rates/family/family-4.png" alt="">
            </div>
          </div>
          <div class="family-page_block-aside-img">
            <div class="family-page_block-aside-img-block">
              <img class="img-family" src="/img/rates/family/family-5.png" alt="">
            </div>
          </div>
          <div class="family-page_block-aside-img">
            <div class="family-page_block-aside-img-block">
              <img class="img-family" src="/img/rates/family/family-6.png" alt="">
            </div>
          </div>
          <div class="family-page_block-aside-img">
            <div class="family-page_block-aside-img-block">
              <img class="img-family" src="/img/rates/family/family-7.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  components: {
  },
  methods: {
    goToInst(){
      window.location.href = 'https://instagram.com/alanya.photographer?igshid=YmMyMTA2M2Y='
    },
  }
})

</script>

<style scoped>
*{
  font-family: Montserrat-Regular;
  margin: 0;
  padding: 0;
}
p {
  padding: calc(5px + 1vw) 0px;
  font-size: calc(10px + 1vw);
  color: #ffffff;
  line-height: normal;
}
h2{
  padding: 10px 0;
  text-transform: uppercase;
  color: #FF9900;
  font-size: calc(8px + 2vw);
  line-height: normal;
}
.gold {
  color: #FF9900;
  padding-right: 4px;
}
.family-page {
  display: flex;
  justify-content: center;
}
.family-page_block{
  width: 90%;
}
.family-page_block-main {
  display: flex;
  flex-wrap: wrap;
}
.family-page_block-main_img{
  width: 50%;
  padding: 40px;
  display: flex;
  align-items: center;
}
.family-page_block-main_img-block {
  height: 100%;
  width: 100%;
}
.family-page_block-main_title{
  width: 50%;
  padding: 40px;
}
@media screen and (max-width: 1000px) {
  .family-page_block-main_title,
  .family-page_block-main_img{
    width: 100%;
    padding: 20px 0;
  }
}
.family-page_block-main_title-content {
  display: flex;
  flex-direction: column;
  border: 2px solid #FF9900;
  padding: calc(10px + 2vw);
  height: 100%;
  justify-content: space-between;
}
@media screen and (max-width: 1000px) {
  .family-page_block-main_title-content{
    text-align: center;
  }
}
.family-page_block-main_title-content_three{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
@media screen and (max-width: 1000px) {
  .family-page_block-main_title-content_three{
    align-items: center;

  }
}
.family-page_block-main_title-content_btn{
  padding: 40px 0;
}
.family-page_block-main_title-content_btn-text{
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: 2px solid #FF9900;
  cursor: pointer;
}
.family-page_block-main_title-content_btn-text:hover {
  background: linear-gradient(180deg, #FF9900 -248.53%, #090C0C 89.24%);
}
.family-page_block-main_title-content_btn-text:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FF9900 -118.12%, #090C0C 100%);
}
.text-block {
  display: flex;
}
.family-page_block-aside{
  display: flex;
  flex-wrap: wrap;
}

.family-page_block-aside-img {
  width: 50%;
  padding: 40px;
}
@media screen and (max-width: 1000px) {
  .family-page_block-aside-img {
    width: 100%;
    padding: 20px 0;
  }
}
.img-family {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
