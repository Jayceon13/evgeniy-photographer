<template>
  <q-page style="min-height: auto">
    <div class="request-page">
      <div class="request-page_block">
        <div class="request-page_block-main">
          <div class="request-page_block-main_title">
            <div class="request-page_block-main_title-content">
              <div class="request-page_block-main_title-content_item">
                <h2>ПОНРАВИЛИСЬ МОИ РАБОТЫ?</h2>
                <p>Напиши мне и обсудим все детали!</p>
              </div>
              <div class="request-page_block-main_title-content_btn">
                <div class="request-page_block-main_title-content_btn-text"
                @click="goToInst()">
                  <p>Написать</p>
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
  padding: calc(10px + 1vw) 0px;
  font-size: calc(8px + 1vw);
  color: #ffffff;
  line-height: normal;
}
h2{
  padding: 10px 0;
  text-transform: uppercase;
  color: white;
  font-size: calc(8px + 2vw);
  line-height: normal;
  text-align: center;
}

.request-page {
  display: flex;
  justify-content: center;
  background-image: url("/img/request-bg.png");
  background-size: cover;
  background-position: center;
  padding: 40px 0;
}
@media screen and (max-width: 1000px) {
  .request-page{
    background-position: left;
  }
}
.request-page_block{
  width: 90%;
}
.request-page_block-main {
  display: flex;
  flex-wrap: wrap;
}
.request-page_block-main_title{
  width: 100%;
  padding: 40px;

}
@media screen and (max-width: 1000px) {
  .request-page_block-main_title{
    width: 100%;
    padding: 20px 0;
  }
}
.request-page_block-main_title-content {
  display: flex;
  flex-direction: column;
  padding: calc(10px + 2vw);
  height: 100%;
  justify-content: space-between;
  text-align: center;
}


.request-page_block-main_title-content_btn{
  padding: 40px 0;
  display: flex;
  justify-content: center;
}
.request-page_block-main_title-content_btn-text{
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: 2px solid #FF9900;
  position: relative;
  align-items: center;
  cursor: pointer;
  background: #090F0F;
  width: 50%;
}
@media screen and (max-width: 1000px) {
  .request-page_block-main_title-content_btn-text{
    width: 100%;
  }
}
.request-page_block-main_title-content_btn-text:hover {
  background: linear-gradient(180deg, #FF9900 -248.53%, #090C0C 89.24%);
}
.request-page_block-main_title-content_btn-text:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FF9900 -118.12%, #090C0C 100%);
}



</style>
