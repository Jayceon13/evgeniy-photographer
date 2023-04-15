<template>
  <q-page style="min-height: auto">
    <div class="selection-page">
      <div class="selection-page_block">
        <div class="selection-page_block-main">
          <div class="selection-page_block-main_title">
            <div class="selection-page_block-main_title-content">
              <div class="selection-page_block-main_title-content_item">
                <h2>Индивидуальный</h2>
              </div>
              <div class="selection-page_block-main_title-content_btn">
                <div class="selection-page_block-main_title-content_btn-text">
                  <p>Подробнее</p>
                  <img class="btn-arrow" src="/icons/arrow-btn.svg" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="selection-page_block-main_title">
            <div class="selection-page_block-main_title-content">
              <div class="selection-page_block-main_title-content_item">
                <h2>Свадебный</h2>
              </div>
              <div class="selection-page_block-main_title-content_btn">
                <div class="selection-page_block-main_title-content_btn-text">
                  <p>Подробнее</p>
                  <img class="btn-arrow" src="/icons/arrow-btn.svg" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="selection-page_block-main_title">
            <div class="selection-page_block-main_title-content">
              <div class="selection-page_block-main_title-content_item">
                <h2>Семейный</h2>
              </div>
              <div class="selection-page_block-main_title-content_btn">
                <div class="selection-page_block-main_title-content_btn-text">
                  <p>Подробнее</p>
                  <img class="btn-arrow" src="/icons/arrow-btn.svg" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="selection-page_block-main_title">
            <div class="selection-page_block-main_title-content">
              <div class="selection-page_block-main_title-content_item">
                <h2>Love Story</h2>
              </div>
              <div class="selection-page_block-main_title-content_btn">
                <div class="selection-page_block-main_title-content_btn-text">
                  <p>Подробнее</p>
                  <img class="btn-arrow" src="/icons/arrow-btn.svg" alt="">
                </div>
              </div>
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
  font-family: Montserrat-Light;
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
  color: white;
  font-size: calc(8px + 1vw);
  line-height: normal;
  text-align: center;
}

.selection-page {
  display: flex;
  justify-content: center;
  background-image: url("/img/rates-bg.png");
  background-size: cover;
  background-position: center;
  padding: 40px 0;
}
@media screen and (max-width: 1000px) {
  .selection-page{
    background-position: left;
  }
}
.selection-page_block{
  width: 90%;
}
.selection-page_block-main {
  display: flex;
  flex-wrap: wrap;
}
.selection-page_block-main_title{
  width: 50%;
  padding: 40px;

}
@media screen and (max-width: 1000px) {
  .selection-page_block-main_title{
    width: 100%;
    padding: 20px 0;
  }
}
.selection-page_block-main_title-content {
  display: flex;
  flex-direction: column;
  border: 2px solid #FF9900;
  padding: calc(10px + 2vw);
  height: 100%;
  justify-content: space-between;
  background: #090F0F;
}
@media screen and (max-width: 1000px) {
  .selection-page_block-main_title-content{
    text-align: center;
  }
}

.selection-page_block-main_title-content_btn{
  padding: 40px 0;
}
.selection-page_block-main_title-content_btn-text{
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: 2px solid #FF9900;
  position: relative;
  align-items: center;
  cursor: pointer;
}
.selection-page_block-main_title-content_btn-text:hover {
  background: linear-gradient(180deg, #FF9900 -248.53%, #090C0C 89.24%);
}
.selection-page_block-main_title-content_btn-text:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FF9900 -118.12%, #090C0C 100%);
}
.btn-arrow {
  position: absolute;
  right: -20px;
  display: flex;
  align-items: center;
  width: 36%;
}
@media screen and (max-width: 1000px) {
  .btn-arrow{
    display: none;
  }
}

</style>
