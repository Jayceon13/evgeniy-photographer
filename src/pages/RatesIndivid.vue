<template>
  <q-page>
    <div class="individual-page">
      <div class="individual-page_block">
        <div class="individual-page_block-main">
          <div class="individual-page_block-main_title">
            <div class="individual-page_block-main_title-content">
              <div class="individual-page_block-main_title-content_one">
                <h2>Индивидуальный</h2>
                <p>Часовая фотосессия</p>
                <p>Предварительный подбор удобной и красивой локации</p>
                <p>По запросу помогу организовать транспорт</p>
              </div>
              <div class="individual-page_block-main_title-content_two">
                <h2>Вы получаете</h2>
                <p>25 фотографий в ретуши</p>
                <p>Исходные фотографии</p>
                <p>Все фотографии вы получаете на портале с удобным пользованием</p>
              </div>
              <div class="individual-page_block-main_title-content_three">
                <h2>Стоимость</h2>
                <div class="text-block">
                  <p class="gold">
                    Алания
                  </p>
                  <p>
                    250 евро
                  </p>
                </div>
                <div class="text-block">
                  <p class="gold">
                    Анталия/Сиде/Кемер
                  </p>
                  <p>
                    320 евро
                  </p>
                </div>
                <div class="text-block">
                  <p class="gold">
                    Стамбул/Фетхие/Мармарис/Бодрум
                  </p>
                  <p>
                    450 евро
                  </p>
                </div>
              </div>
              <div class="individual-page_block-main_title-content_btn">
                <div class="individual-page_block-main_title-content_btn-text">
                  <p>Смотреть портфолио</p>
                </div>
              </div>
            </div>
          </div>
          <div class="individual-page_block-main_img">
            <div class="individual-page_block-main_img-block">
              <img class="img-individual" src="/img/rates/individual/individual-1.png" alt="">
            </div>
          </div>
        </div>
        <div class="individual-page_block-aside">
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-2.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-3.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-4.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-5.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-6.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-7.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-8.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-9.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-10.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-11.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-12.png" alt="">
            </div>
          </div>
          <div class="individual-page_block-aside-img">
            <div class="individual-page_block-aside-img-block">
              <img class="img-individual" src="/img/rates/individual/individual-13.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
</script>

<style scoped>
*{
  font-family: Montserrat;
  margin: 0;
  padding: 0;
}
p {
  padding: calc(5px + 1vw) 0px;
  font-size: calc(5px + 1vw);
  color: #ffffff;
  line-height: normal;
}
h2{
  padding: 10px 0;
  text-transform: uppercase;
  color: #FF9900;
  font-size: calc(4px + 2vw);
  line-height: normal;
}
.gold {
  color: #FF9900;
  padding-right: 4px;
}
.individual-page {
  display: flex;
  justify-content: center;
}
.individual-page_block{
  width: 90%;
}
.individual-page_block-main {
  display: flex;
  flex-wrap: wrap;
}
.individual-page_block-main_img{
  width: 50%;
  padding: 40px;
  display: flex;
  align-items: center;
}
.individual-page_block-main_img-block {
  height: 100%;
  width: 100%;
}
.individual-page_block-main_title{
  width: 50%;
  padding: 40px;
}
@media screen and (max-width: 1000px) {
  .individual-page_block-main_title,
  .individual-page_block-main_img{
    width: 100%;
    padding: 20px 0;
  }
}
.individual-page_block-main_title-content {
  display: flex;
  flex-direction: column;
  border: 2px solid #FF9900;
  padding: calc(10px + 2vw);
  height: 100%;
  justify-content: space-between;
}
@media screen and (max-width: 1000px) {
  .individual-page_block-main_title-content{
    text-align: center;
  }
}
.individual-page_block-main_title-content_three{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
@media screen and (max-width: 1000px) {
  .individual-page_block-main_title-content_three{
    align-items: center;

  }
}
.individual-page_block-main_title-content_btn{
  padding: 40px 0;
}
.individual-page_block-main_title-content_btn-text{
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: 2px solid #FF9900;
}
.text-block {
  display: flex;
}
.individual-page_block-aside{
  display: flex;
  flex-wrap: wrap;
}

.individual-page_block-aside-img {
  width: 50%;
  padding: 40px;
}
@media screen and (max-width: 1000px) {
  .individual-page_block-aside-img {
    width: 100%;
    padding: 20px 0;
  }
}
.img-individual {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
