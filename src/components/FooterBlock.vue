<template>
  <div class="footer">
    <div class="footer-aside">
      <div class="footer-block">
        <div class="block-home" @click="$router.push ('/')">
          <img src="/icons/Logo.svg">
        </div>
        <div class="footer-block__menu-item_order">
          <img @click="goToInst" src="/icons/Inst.svg" alt="">
        </div>
        <div class="footer-block__menu">
          <div class="footer-block__menu-item">
            <div class="footer-block__menu-item_start"
                 @click="scrollToTop()">
              <p>Вернуться в начало</p>
            </div>
          </div>
          <div class="footer-block__menu-item">
            <div class="footer-block__menu-item_main">
              <p @click="$router.push('/')">Главная</p>
            </div>
          </div>
          <div class="footer-block__menu-item">
            <div id="rate" class="footer-block__menu-item_rates"
                 @click="openRateBlock()"
            >
              <p>Тарифы</p>
              <img class=hideRateBlock:arrow-active src="/icons/Arrow.svg">
            </div>
            <transition name="ratehide">
              <div v-if="hideRateBlock" class="rate-block">
                <p @click="()=>{$router.push('/individual'); hideRateBlock =false}">Индивидульный</p>
                <p @click="()=>{$router.push('/wedding'); hideRateBlock =false}">Свадебный</p>
                <p @click="()=>{$router.push('/family'); hideRateBlock =false}">Семейный</p>
                <p @click="()=>{$router.push('/love'); hideRateBlock =false}">Love Story</p>
              </div>
            </transition>
          </div>
          <div class="footer-block__menu-item">
            <div @click="$router.push ('/request')" class="footer-block__menu-item_request">
              <p>Запись</p>
            </div>
          </div>
          <div class="footer-block__menu-item">
            <div class="footer-block__menu-item_produced"
            @click="goToDesign()">
              <p>Разработка сайта © rimari.design</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { ref} from 'vue'

export default {
  name: "footerBlock",
  setup () {
    const hideRateBlock = ref(false)

    return {
      hideRateBlock,
      openRateBlock() {
        this.hideRateBlock = !this.hideRateBlock;
      },
    }
  },
  methods: {
    goToInst(){
      window.location.href = 'https://instagram.com/alanya.photographer?igshid=YmMyMTA2M2Y='
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    goToDesign(){
      window.location.href = 'https://taplink.cc/rimari.design'
    },

  }
}
</script>

<style scoped>
*{
  font-family: Montserrat-Regular;
  margin: 0;
  padding: 0;
}
#rate{
  display: flex;
}
.rate-block{
  display: flex;
  justify-content: center;
  text-align: center;
  transition: transform 0.5s;
}
.rate-block p{
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.rate-block p:hover{
  color: #FF9900;
}
.ratehide-leave-active {
  z-index: 999;
  animation: rate-up 0.5s ease-in-out;
}
@keyframes rate-up {
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX(100%);
    opacity: 0;
  }
}
.ratehide-enter-active{
  z-index: 999;
  animation: ratehide-down 0.5s ease-in-out;
}
@keyframes ratehide-down {
  0%{
    transform: translateX(-100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}

.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #0C0F0F;

}
.footer-block{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.footer-aside {
  display: flex;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 70;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
}
.footer-aside p{
  font-size: 20px;
  padding: 6px;
}
.footer-block__menu-item_order{
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 20px;
  justify-content: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.block-home{
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: center;
}
.block-home img {
  height: 100%;
  width: 200px;
}


.block-home{
  z-index: 999;
  cursor: pointer;
  padding-bottom: 40px;
}

.footer-block__menu {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  flex-direction: column;
}
.footer-block__menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.footer-block__menu-item_main,
.footer-block__menu-item_rates,
.footer-block__menu-item_request,
.footer-block__menu-item_start,
.footer-block__menu-item_produced{
  cursor: pointer;
  transition: 1s ease-in-out;
  text-align: center;
}

.footer-block__menu-item_main:hover,
.footer-block__menu-item_rates:hover,
.footer-block__menu-item_request:hover,
.footer-block__menu-item_start:hover,
.footer-block__menu-item_produced:hover {
  cursor: pointer;
  color: #FF9900;
}
@media screen and (max-width: 1000px) {
  .rate-block{
    flex-flow: column;
  }
}

</style>
