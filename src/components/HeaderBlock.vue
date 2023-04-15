<template>
  <div class="header">
    <div class="header-aside">
      <div class="header-block">
        <div class="block-home" @click="$router.push ('/')">
          <img src="/icons/Logo.svg">
        </div>
        <div class="header-block__menu" v-if="isWideScreen">

          <div class="header-block__menu-item">
            <div class="header-block__menu-item_animators"
                 @click="$router.push ('/')"
            >
              <p>Главная</p>
            </div>
          </div>
          <div class="header-block__menu-item">
            <div id="rate" class="header-block__menu-item_holiday"
                 @click="openRateBlock()"
            >
              <p>Тарифы</p>
              <img :class="[!hideRateBlock ? 'arrow' : 'arrow-active']" src="/icons/Arrow.svg">
            </div>
            <transition name="ratehide">
              <div v-if="hideRateBlock" class="rate-block">
                <p @click="$router.push('/individual')">Индивидульный</p>
                <p @click="$router.push('/wedding')">Свадебный</p>
                <p @click="$router.push('/family')">Семейный</p>
                <p @click="$router.push('/love')">Love Story</p>
              </div>
            </transition>
          </div>
<!--          <div class="header-block__menu-item">-->
<!--            <div class="header-block__menu-item_show"-->
<!--                 @click="scrollToPartners"-->
<!--            >-->
<!--              <p>Партнеры и Клиенты</p>-->
<!--            </div>-->
<!--          </div>-->
          <div class="header-block__menu-item">
            <div class="header-block__menu-item_about"
                 @click="$router.push ('/request')"
            >
              <p>Запись</p>
            </div>
          </div>
        </div>
        <div class="header-block__menu-item_order"
             @click="scrollToForm">
          <img src="/icons/Inst.svg" alt="">
        </div>
        <div v-if="!isWideScreen" :class= "!showBurgerMenu? 'hamburger hamburger--3dx' : 'hamburger is-active hamburger--3dx'" @click="blockBurgerMenu">
          <div class="hamburger-box">
            <div class="hamburger-inner" >
            </div>
          </div>
        </div>
      </div>
      <transition name="menu">
        <div class="block-menu"
             v-if="showBurgerMenu">
          <div @click="$router.push ('/')"
               class="block-main"
               style="cursor: pointer"
          >
            Главная
          </div>
          <div class="header-block__menu-item">
            <div id="rate" class="header-block__menu-item_holiday"
                 @click="openRateBlock()"
            >
              <p>Тарифы</p>
              <img :class="[!hideRateBlock ? 'arrow' : 'arrow-active']" src="/icons/Arrow.svg">
            </div>
            <transition name="ratehide">
              <div v-if="hideRateBlock" style="position: relative" class="rate-block">
                <p @click="$router.push('/individual')">Индивидульный</p>
                <p @click="$router.push('/wedding')">Свадебный</p>
                <p @click="$router.push('/family')">Семейный</p>
                <p @click="$router.push('/love')">Love Story</p>
              </div>
            </transition>
          </div>
<!--          <div @click="() => { !showBurgerMenu; scrollToPartners() }"-->
<!--               class="block-holidays">-->
<!--            ПАРТНЕРЫ И КЛИЕНТЫ-->
<!--          </div>-->
          <div @click="$router.push ('/request')"
               class="block-shows"
               style="cursor: pointer"
          >
            Запись
          </div>
        </div>
      </transition>
      <transition name="bg-block">
        <div class="block-background" v-if="showBurgerMenu" @click="blockBurgerMenu">
        </div>
      </transition>
    </div>

  </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: "HeaderBlock",
  setup () {
    const hideRateBlock = ref(false)

    const showBurgerMenu = ref(false)

    const isWideScreen = ref(window.innerWidth >= 1000)

    // обработчик события изменения ширины экрана
    const handleResize = () => {
      isWideScreen.value = window.innerWidth >= 1000
    }

    // подписываемся на событие изменения ширины экрана
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    // отписываемся от события при удалении компонента
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      hideRateBlock,
      openRateBlock() {
        this.hideRateBlock = !this.hideRateBlock;
      },
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      },
      isWideScreen,
    }
  },
  methods: {

    scrollToServices() {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToCatalog() {
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToPartners() {
      document.getElementById('partners').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToContacts() {
      document.getElementById('contacts-1').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToForm() {
      document.getElementById('contacts-1').scrollIntoView({ behavior: 'smooth' });
    },
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#rate{
  display: flex;
}
.rate-block{
  position: absolute;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  margin-left: -25px;
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
    transform: translateY(0);
    opacity: 1;
  }
  100%{
    transform: translateY(100%);
    opacity: 0;
  }
}
.ratehide-enter-active{
  z-index: 999;
  animation: ratehide-down 0.5s ease-in-out;
}
@keyframes ratehide-down {
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
.arrow{
  margin-left: 5px;
  transition: 0.5s ease-in-out;
}
.arrow-active{
  rotate: -180deg;
  transition: 0.5s ease-in-out;
  margin-left: 5px;
}
.header {
  display: flex;
  justify-content: center;
  flex-flow: column;
  height: 130px;
}
.header-block{
  align-items: center;
}

.header-aside {
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 130px;
  background-color: #0C0F0F;
  padding: 5px 5%;
  color: white;
  z-index: 999;
}
.header-aside p{
  font-size: 20px;
  font-family: Montserrat;
}
.header-block__menu-item_order{
  position: fixed;
  right: 5%;
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 20px;
  justify-content: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 999;
}
.block-home{
  display: flex;
  height: 100%;
  width: 200px;
  align-items: center;
  justify-content: center;
}
.block-home img {
  height: 100%;
  width: 200px;
}
.block-background{
  position: fixed;
  top: 130px;
  left: 0;
  width: 100vw;
  height: 50vh;
  z-index: 90;
  background: rgba(0, 0, 0, 0.3);
}

.router-animation-leave-active,
.router-animation-enter-active{
  transition: opacity 0.5s ease-in-out;
}
.bg-block-leave-active,
.bg-block-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.bg-block-enter-from,
.bg-block-leave-to {
  opacity: 0;
}
.menu-leave-active {
  z-index: 999;
  animation: slide-up 0.5s ease-in-out;
}
@keyframes slide-up {
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-100%);
  }
}
.menu-enter-active{
  z-index: 999;
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
}
.block-menu{
  width: 100vw;
  height: 50vh;
  position: fixed;
  z-index: 99;
  text-align: center;
  top: 130px;
  background-color: #0C0F0F;
}
.header-block{
  width: 100%;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 1000px) {
  .header-block{
    width: 100%;
    z-index: 999;
  }

  .block-menu{
    display: flex;
    justify-content: flex-end;
  }
  .block-about{
    cursor: pointer;
    height: 100%;
    width: 80%;
    background: hsla(0,0%,100%,.2);
    box-shadow: 0 4px 5px rgb(0 0 0 / 10%);
    backdrop-filter: blur(15px);

    position: absolute;
    font-weight: 300;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 30px;
  }
  @media only screen and (max-height: 500px) {
    .block-about {
      padding: 60px;
    }
  }
  .block-about:hover{
    color: #FF9900;
  }
  .block-examples{
    height: 66%;
    width: 50%;
    border: black 1px solid;
    position: absolute;
    font-weight: 300;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 30px;
    background: hsla(0,0%,100%,.2);
    box-shadow: 0 4px 5px rgb(0 0 0 / 10%);
    backdrop-filter: blur(15px);
  }
  @media only screen and (max-height: 500px) {
    .block-examples {
      padding: 40px;
    }
  }
  .block-examples:hover{
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s ease;
    color: white;
  }
  .block-contacts{
    height: 33%;
    width: 25%;
    border: black 1px solid;
    position: absolute;
    font-weight: 300;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 30px;
    background: hsla(0,0%,100%,.2);
    box-shadow: 0 4px 5px rgb(0 0 0 / 10%);
    backdrop-filter: blur(15px);
  }
  @media only screen and (max-height: 500px) {
    .block-contacts {
      padding: 20px;
    }
  }
  .block-contacts:hover{
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s ease;
    color: white;
  }
  .block-home{
    z-index: 999;
    cursor: pointer;
  }
}
.hamburger {
  left: 1%;
  position: fixed;
  top: 40px;
  z-index: 9999;
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}

@media only screen and (max-height: 700px) {
  .hamburger {
    display: block;
  }
}
.hamburger:hover {
  opacity: 0.7; }
.hamburger.is-active:hover {
  opacity: 0.7; }
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #FF9900; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #FF9900;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; }
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; }
.hamburger-inner::before {
  top: -10px; }
.hamburger-inner::after {
  bottom: -10px; }
.hamburger--3dx .hamburger-box {
  perspective: 80px; }

.hamburger--3dx .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
.hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dx.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(180deg); }
.hamburger--3dx.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg); }
.hamburger--3dx.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg); }

.header-block__menu {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 0 40px;
}
.header-block__menu-item {
  padding: 0 20px;
  width: max-content;
}

.header-block__menu-item_animators,
.header-block__menu-item_holiday,
.header-block__menu-item_show,
.header-block__menu-item_about {
  cursor: pointer;
  transition: 1s ease-in-out;
}

.header-block__menu-item_animators:hover,
.header-block__menu-item_holiday:hover,
.header-block__menu-item_show:hover,
.header-block__menu-item_about:hover {
  cursor: pointer;
  color: #FF9900;
}
.header-block__request {
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 999;
}
.header-block__request-item {
  border-bottom: 5px solid #FDAB5F;
}
@media only screen and (max-width: 1000px) {
  .header-aside{
    padding: 0;
  }
  .block-menu .block-home{
    height: 60px;
    cursor: pointer;
  }
  .block-menu .block-home img{
    height: 60px;
  }
  .block-main {
    font-size: 30px;
    margin: 30px;
  }
  .block-about{
    font-size: 30px;
    margin: 30px;
  }
  .block-holidays{
    font-size: 30px;
    margin: 30px;
  }
  .block-shows{
    font-size: 30px;
    margin: 30px;
  }
}
</style>
