<template>
  <q-page>
    <div class="first-block">
      <div class="first-block_items">
        <div class="first-block_items--text">
          <p>Привет!<br/>
            Меня зовут Евгений.<br/>
            Уже более <span style="color: #FF9900">11 лет</span> я занимаюсь фотографией <br>
            и последние несколько лет <br>
            я фотографирую заграницей.</p>

          <p>Когда я спрашиваю,почему меня выбирают<br>
            в качестве своего фотографа, мне говорят, что у моих
            фотографий есть свой особый стиль
            это эмоциональные живые добрые фотографии.</p>
        </div>
        <div v-if="isWideScreen" id="first-btn" class="first-block_items--btn"
             @click="() => {$router.push ('request')}">
          <p>Записаться на съемку</p>
        </div>
      </div>
      <div class="first-block_img">
        <img class="img-first" src="/img/photo-1.png" alt="">
      </div>
      <div v-if="!isWideScreen" id="all-btn" class="first-block_items--btn"
           @click="() => {$router.push ('request')}">
        <p>Записаться на съемку</p>
      </div>
    </div>
    <div class="second-block">

      <div class="second-block_img">
        <div class="second-block_img-border"></div>
        <img ref="animateImg" class="animate-img-before" src="/img/photo-2.png" alt="">
        <img ref="animateImg" class="animate-img-present animate-img-1-appearance" src="/img/photo-2.png" alt="">
        <img ref="animateImg" class="animate-img-after animate-img" src="/img/photo-2.png" alt="">
      </div>
      <div class="second-block_items">
        <div class="second-block_items--text">
          <p>А уже после проведенной фотосессии нередко пишут, что работать со мной очень <span style="color: #FF9900">легко</span> и фотосессия становится гармоничным дополнением этого отпуска.</p>

            <p>Мне нравится раскрывать в фотографиях <span style="color: #FF9900">характер
            и чувства</span> людей, ловить искренние моменты, создавать снимки с настроением и атмосферой, который будут вас спустя какое-то время заставлять вновь погружаться в воспоминания, переживать моменты счастья, давать вам возможность
            с удивлением и может быть по-новому узнавать себя
            и своих близких.</p>
        </div>
      </div>
    </div>
    <div class="third-block">
      <div class="third-block_items">
        <div class="third-block_items--text">
          <p>А теперь познакомлюсь с вами Я !</p>

            <p>Меня зовут <span style="color: #FF9900">Тео</span> и я пёсик Жени.<br>
            Он делает мне потрясающие фото и порой мне кажется, что если бы существовал Tinder для собак у меня было бы миллион лайков.</p>
            <p>Поэтому мой хозяин лучший в  сфере фотографии! Если хотите такие же яркие фото как мои,
            то пишите ему.</p>
        </div>
      </div>
      <div class="third-block_img">
        <img class="img-third" src="/img/photo-3.png" alt="">
      </div>
    </div>
    <div class="block-h">
      Знаменитости выбирают меня :
    </div>
    <div class="fourth-block">
      <div class="fourth-block_i">
        <div class="fourth-block_img">
          <img class="img-fourth" src="/img/photo-4.png" alt="">
        </div>
        <div class="fourth-block_items">
          <div class="fourth-block_items--text">
            <div class="block-h">
              Анна бузова
            </div>
            <div class="fourth-block_items--location">
              <img style="padding-right: 16px" class="img-location" src="/icons/location.svg" alt="">
              <p style="margin-left: -10px;">Alanya, Cleopatra beach</p>
            </div>
            <div v-if="isWideScreen" id="all-btn" class="first-block_items--btn"
                 @click="() => {$router.push ('rates')}">
              <p>Хочу на съёмку</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!isWideScreen" id="all-btn" class="first-block_items--btn"
           @click="() => {$router.push ('rates')}">
        <p>Хочу на съёмку</p>
      </div>
    </div>
    <div class="fifth-block">
        <div class="fifth-block_items">
          <div class="fifth-block_items--text">
            <img class="imgb" src="/img/imgb.png" alt="">
            <h4 id="title-block">«ОЧЕНЬ ПОНРАВИЛАСЬ ФОТОСЕССИЯ»</h4>

            <p>Огромное спасибо тебе за работу, внимание, настроение и красоту! Очень все чутко и бережно, но в то же время легко и непринужденно! <br>
              Получилось то, что нужно! Ты очень тонко чувствуешь людей, отобразил всё, что нужно
              и можно было, деликатно так, слегка, но в точку.</p>

              <p>Ещё обязательно увидимся. Работа с тобой зарядила и дала тот самый волшебный толчок,
              а самое главное, это взгляд внутрь себя. <br>
              Ещё раз спасибо.</p>
          </div>
        </div>
        <div class="fifth-block_img">
          <img class="img-fifth" src="/img/photo-5.png" alt="">
        </div>
    </div>
    <div class="sixth-block">
      <div class="sixth-block_img">
        <div class="second-block_img-border"></div>
        <img ref="animateImg2" class="animate-img-before" src="/img/photo-6.png" alt="">
        <img ref="animateImg" class="animate-img-present animate-img-2-appearance" src="/img/photo-6.png" alt="">
        <img ref="animateImg" class="animate-img-after animate-img-2" src="/img/photo-6.png" alt="">
      </div>
      <div class="sixth-block_items">
        <div class="sixth-block_items--text">
          <div class="block-h start">ХОЧЕШЬ НА ФОТОСЕССИЮ?
          </div>
          <p style="font-size: calc(11px + 1.1vw)">но <span style="color: #FF9900">страхи</span> не отпускают?</p>
          <p style="font-size: calc(11px + 1.1vw)">«Я НЕ ФОТОГИЕНИЧНАЯ»</p>

          <p>-Я <span style="color: #FF9900">нахожу в каждой уникальность <br>
            и красоту </span>, вижу выгодные ракурсы<br>
            и знаю как преподнести достоинства<br>
            и скрыть недостатки.</p>
        </div>
      </div>
    </div>
    <div class="seventh-block">
      <div class="seventh-block_i">
        <div class="seventh-block_items">
          <div class="seventh-block_items--text">
            <div class="block-h">
              Екатерина Варнава
            </div>
            <div class="seventh-block_items--location">
              <img style="padding-right: 16px" class="img-location" src="/icons/location.svg" alt="">
              <p style="margin-left: -10px;">Alanya, Cleopatra beach</p>
            </div>
            <div id="all-btn" class="first-block_items--btn"
                 @click="() => {$router.push ('rates')}">
              <p>Хочу на съёмку</p>
            </div>
          </div>
        </div>
        <div class="seventh-block_img">
          <img class="img-seventh" src="/img/photo-7.png" alt="">
        </div>
      </div>
    </div>
    <div class="eight-block">
      <div class="eight-block_img">
        <img class="img-eight" src="/img/photo-8.png" alt="">
      </div>
      <div class="eight-block_items">
        <div class="eight-block_items--text">
          <p style="font-size: calc(15px + 1.1vw)">«Я СТЕСНЯЮСЬ»</p>

          <p>- это <span style="color: #FF9900">можно исправить только практикой</span>, чем чаще будешь ходить на съёмки тем более расслабленной будешь cебя чувствовать.</p>
        </div>
      </div>
    </div>
    <div class="ninth-block">
      <div class="ninth-block_items">
        <div class="ninth-block_items--text">
          <img style="align-self: center" class="imgb" src="/img/imgb2.png" alt="">
          <h4 id="title-block" class="start">«С ЖЕНЕЙ ОЧЕНЬ ЛЕГКО РАБОТАТЬ»</h4>

          <p>Мне посчастливилось поработать с Женей
            Хотя слово работать тут не особо подходит,так как это реальный <span style="color: #FF9900">кайф</span>.</p>

            <p>Выбрала его потому что у всех фото, сделанных им какой-то свой стиль и я хотела стать
            частью этого стиля.
            Вы не пожалеете о своём решении, если вашим фотографом будет Женя.</p>
            <p>Спасибо большое, в следующий раз
            обязательно еще напишу !</p>
        </div>
      </div>
      <div class="ninth-block_img">
        <div class="second-block_img-border"></div>
        <img ref="animateImg" class="animate-img-before-2" src="/img/photo-9.png" alt="">
        <img ref="animateImg" class="animate-img-present-2 animate-img-3-appearance" src="/img/photo-9.png" alt="">
        <img ref="animateImg" class="animate-img-after-2 animate-img-3" src="/img/photo-9.png" alt="">
      </div>
    </div>
    <div class="tenth-block">
        <div class="tenth-block_img">
          <img class="img-tenth" src="/img/photo-10.png" alt="">
        </div>
        <div class="tenth-block_items">
          <div class="tenth-block_items--text">
            <div class="block-h">
              РЕГИНА ТОДОРЕНКО
            </div>
            <div class="tenth-block_items--location">
              <img style="padding-right: 16px" class="img-location" src="/icons/location.svg" alt="">
              <p style="margin-left: -10px;">Belek</p>
            </div>
            <div id="all-btn" class="first-block_items--btn"
                 @click="() => {$router.push ('rates')}">
              <p>Хочу на съёмку</p>
            </div>
          </div>
      </div>
    </div>
    <div class="eleven-block">
      <div class="eleven-block_items">
        <div class="eleven-block_items--text">
          <img style="align-self: center" class="imgb" src="/img/imgb3.png" alt="">
          <h4 id="title-block" class="start">«ЛЕГКО, КАК С ДРУГОМ»</h4>

          <p>Мне кажется, даже смотря на фото Жени можно понять, что он очень крутой.<br>Когда я прилетела в Турцию вопроса «кто же меня пофотографирует?» даже не возникало.<br>Я, находясь в России уже знала, кто это будет.<br>Спасибо тебе!</p>
        </div>
      </div>
      <div class="eleven-block_img">
        <img class="img-eleven" src="/img/photo-11.png" alt="">
      </div>
    </div>
    <div style="text-align: center" class="block-h">
      Если вы это читаете, то уже хочу поблагодарить<br>
      за интерес к моей работе!
    </div>
    <div class="twenty-block">
      <div class="twenty-block_img">
        <img class="img-twenty" src="/img/photo-12.png" alt="">
      </div>
      <div class="twenty-block_items">
        <div class="twenty-block_items--text">
          <p style="padding-top: 40px"><span style="color: #FF9900">Бронирование</span> фотосессии производится заранее
            с задатком для подтверждения конкретной даты.</p>

          <p style="padding-bottom: 0">Если наши с вами города различаются,
            но вы желаете попасть ко мне на фотосессию, буду рад <span style="color: #FF9900">приехать к вам</span> или рассказать
            как добраться ко мне.</p>
        </div>
      </div>
    </div>
    <div class="thirty-block">
      <div class="thirty-block_items">
        <div class="thirty-block_items--text">
          <div>
            <p>Для нашего с вами удобства рекомендую:
              сразу написать даты вашего отдыха, город и отель.</p>
            <p style="padding-bottom: 40px">Я стараюсь сделать фотосессию только для вас, именно поэтому предложу вам <span style="color: #FF9900">уединённые локации</span>
              для лучшего результата.</p>
          </div>
          <div id="last-btn" class="thirty-block_items--btn"
               @click="() => {$router.push ('request')}">
            <p>Записаться на съёмку</p>
          </div>
        </div>
      </div>
      <div class="thirty-block_img">
        <img class="img-thirty" src="/img/photo-13.png" alt="">
      </div>
    </div>
    <rates-block></rates-block>
    <div class="request-block-main_title">
      <div class="request-block-main_title-content">
        <div class="request-block-main_title-content_item">
          <h2>ПОНРАВИЛИСЬ МОИ РАБОТЫ?</h2>
          <p>Напиши мне и обсудим все детали!</p>
        </div>
        <div class="request-block-main_title-content_btn">
          <div class="request-block-main_title-content_btn-text"
               @click="goToInst()">
            <p>Написать</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import RatesBlock from "components/RatesBlock";

export default defineComponent({
  name: 'IndexPage',
  components: {
    RatesBlock,
  },
  methods: {
    goToInst(){
      window.location.href = 'https://instagram.com/alanya.photographer?igshid=YmMyMTA2M2Y='
    },
  },
  setup () {

    const isWideScreen = ref(window.innerWidth >= 1000)
    const handleResize = () => {
      isWideScreen.value = window.innerWidth >= 1000
    }


    // подписываемся на событие изменения ширины экрана
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })
    // добавляем класс scroll к элементу animate-img при прокрутке страницы
    onMounted(() => {
      window.addEventListener('scroll', () => {
        const animateImg = document.querySelector('.animate-img')
        const animateImg2 = document.querySelector('.animate-img-2')
        const animateImg3 = document.querySelector('.animate-img-3')
        const animateImg1Appearance = document.querySelector('.animate-img-1-appearance')
        const animateImg2Appearance = document.querySelector('.animate-img-2-appearance')
        const animateImg3Appearance = document.querySelector('.animate-img-3-appearance')

        if (animateImg && animateImg.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg.classList.add('scroll')
        }
        if (animateImg2 && animateImg2.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg2.classList.add('scroll')
        }
        if (animateImg3 && animateImg3.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg3.classList.add('scroll')
        }
        if (animateImg1Appearance && animateImg1Appearance.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg1Appearance.classList.add('scroll')
        }
        if (animateImg2Appearance && animateImg2Appearance.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg2Appearance.classList.add('scroll')
        }
        if (animateImg3Appearance && animateImg3Appearance.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg3Appearance.classList.add('scroll')
        }
      })
    })

// отписываемся от событий при удалении компонента
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', () => {
        const animateImg = document.querySelector('.animate-img')
        const animateImg2 = document.querySelector('.animate-img-2')
        const animateImg3 = document.querySelector('.animate-img-3')
        const animateImg1Appearance = document.querySelector('.animate-img-1-appearance')
        const animateImg2Appearance = document.querySelector('.animate-img-2-appearance')
        const animateImg3Appearance = document.querySelector('.animate-img-3-appearance')


        if (animateImg && animateImg.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg.classList.add('scroll')
        }
        if (animateImg2 && animateImg2.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg2.classList.add('scroll')
        }
        if (animateImg3 && animateImg3.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg3.classList.add('scroll')
        }
        if (animateImg1Appearance && animateImg1Appearance.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg1Appearance.classList.add('scroll')
        }
        if (animateImg2Appearance && animateImg2Appearance.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg2Appearance.classList.add('scroll')
        }
        if (animateImg3Appearance && animateImg3Appearance.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg3Appearance.classList.add('scroll')
        }
      })
    })

    return {
      isWideScreen,
    }
  },
})
</script>

<style scoped>
*{
  font-family: Montserrat-Regular;
  margin: 0;
}
p {
  font-family: Montserrat-Light;
}
#title-block {
  font-size: calc(10px + 0.8vw);
  padding-bottom: 20px;
  color: #FF9900;
  text-align: left;
  display: flex;
  width: 100%;
}
.imgb{
  height: calc(20px + 6vw);
  width: calc(20px + 6vw);
  border-radius: 100%;
  margin-bottom: 65px;
}
@media screen and (max-width: 1000px) {
  .imgb{
    margin-bottom: 20px;
  }
}
.img-location{
  width: calc(25px + 1vw);
}
.first-block{
  padding: 45px 75px 100px;
  color: white;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .first-block{
    padding: 20px;
  }
}
.second-block,
.third-block,
.fourth-block,
.fifth-block,
.sixth-block,
.seventh-block,
.eight-block,
.ninth-block,
.tenth-block,
.eleven-block,
.twenty-block,
.thirty-block{
  padding: 100px 75px;
  color: white;
  display: flex;
  align-items: center;
}
.fifth-block,
.eight-block,
.eleven-block,
.thirty-block{
  padding: 0px 75px 100px;

}
.eleven-block{
  padding: 0px 75px 0px;

}
@media screen and (max-width: 1000px) {
  .second-block,
  .third-block,
  .fourth-block,
  .fifth-block,
  .sixth-block,
  .seventh-block,
  .eight-block,
  .ninth-block,
  .tenth-block,
  .eleven-block,
  .twenty-block,
  .thirty-block{
    padding: 20px;;
  }
}
.thirty-block{
  position: relative;
}
 .first-block_items,
 .third-block_items,
 .fifth-block_items,
 .seventh-block_items,
 .ninth-block_items,
 .eleven-block_items,
 .thirty-block_items{
   display: flex;
   width: 50%;
   padding-right: 100px;
   flex-flow: column;
   justify-content: space-around;
 }
@media screen and (max-width: 1000px) {
  .first-block_items,
  .third-block_items,
  .fifth-block_items,
  .seventh-block_items,
  .ninth-block_items,
  .eleven-block_items,
  .thirty-block_items{

    padding-right: 0;
  }
}
@media screen and (max-width: 1000px) {
  .third-block_items{
padding-top: 30px;
  }
}
 .fourth-block_i,
 .seventh-block_i{
   display: flex;
   width: 100%;
 }
.second-block_items,
.fourth-block_items,
.sixth-block_items,
.eight-block_items,
.tenth-block_items,
.twenty-block_items{
  display: flex;
  width: 50%;
  flex-flow: column;
  justify-content: space-around;
  padding-left: 100px;
}
@media screen and (max-width: 1000px) {
  .second-block_items,
  .fourth-block_items,
  .sixth-block_items,
  .eight-block_items,
  .tenth-block_items,
  .twenty-block_items{
    padding-left: 0;
    padding-bottom: 60px;
  }
  .eight-block_items{
    padding-bottom: 20px;
  }
  .tenth-block_items,
  .twenty-block_items {
    padding-bottom: 0;
  }
}
.second-block_items,
.sixth-block_items,
.ninth-block_items {
  width: 60%;
}
.first-block_items--text,
.third-block_items--text,
.fifth-block_items--text,
.ninth-block_items--text,
.eleven-block_items--text,
.thirty-block_items--text{
  color: white;
  width: 100%;
  font-size: calc(10px + 0.6vw);
  display: flex;
  flex-flow: column;
}
.first-block_items--text p,
.third-block_items--text p,
.fifth-block_items--text p,
.ninth-block_items--text p,
.eleven-block_items--text p,
.thirty-block_items--text p,
.fifth-block_items--text p,
.tenth-block_items--text p,
.second-block_items--text p,
.sixth-block_items--text p,
.eight-block_items--text p,
.tenth-block_items--text p,
.twenty-block_items--text p{
  padding-bottom: 20px;
}

.fifth-block_items--text,
.tenth-block_items--text{
  align-items: center;
}
.second-block_items--text,
.sixth-block_items--text,
.eight-block_items--text,
.tenth-block_items--text,
.twenty-block_items--text{
  color: white;
  width: 100%;
  font-size: calc(10px + 0.6vw);
  flex-flow: column;
}
.fourth-block_items--text,
.seventh-block_items--text{
  color: white;
  width: 100%;
  font-size: calc(6px + 1vw);
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.fourth-block_items--location,
.seventh-block_items--location,
.tenth-block_items--location{
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 15px;
}
#all-btn {
  width: 100%;
  border: #FF9900 2px solid;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 0.6vw);
  cursor: pointer;
  background-size: cover;
  transition: 0.5s ease-in-out;
  margin-top: 75px;
}

#first-btn {
  width: 100%;
  border: #FF9900 2px solid;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 0.6vw);
  cursor: pointer;
  background-size: cover;
  transition: 0.5s ease-in-out;
  margin-top: 115px;
}
#last-btn {
  border: #FF9900 2px solid;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 0.6vw);
  cursor: pointer;
  background-size: cover;
  transition: 0.5s ease-in-out;
  margin-top: 115px;
  position: absolute;
  bottom: 106px;
  width: 36%;
}
@media screen and (max-width: 1000px) {
  #all-btn,
  #first-btn,
  #last-btn{
    height: 52px;
  }
}
@media screen and (max-width: 1000px) {
  #last-btn {
   position: relative;
    width: 100%;
    margin-top: 0;
    bottom: 0;
  }
}
#all-btn:hover,
#first-btn:hover,
#last-btn:hover{
  background: linear-gradient(180deg, #FF9900 -248.53%, #090C0C 89.24%);
}
#all-btn:active,
#first-btn:active,
#last-btn:active{
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FF9900 -118.12%, #090C0C 100%);;
}

#all-btn p,
#first-btn p,
#last-btn p{
  margin: 0;
  padding: 0;
}

.second-block_img,
.sixth-block_img,
.ninth-block_img {

  width: 40%;
  background-size: cover;
  margin-left: 100px;
  position: relative;
}

.ninth-block_img {
  margin-left: 0;
  margin-right: 100px;
}
@media screen and (max-width: 1000px) {
  .second-block_img,
  .sixth-block_img,
  .ninth-block_img {
    width: 80%;
    margin-left: 0;
    margin-right: 0;
  }
}
.animate-img-before {
position: relative;
  top: -100px;
  left: -100px;
  width: 100%;
  z-index: 0;
  opacity: 0.6;
  z-index: 0;
}
@media screen and (max-width: 1000px) {
  .animate-img-before {
    top: -40px;
    left: -40px;
  }
}
.animate-img-present{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  scale: 0.9;
  z-index: 0;
  opacity: 0;
  z-index: 0;
}
.animate-img-after{
  position: absolute;
  transition: all 0.5s ease-in-out;
  width: 100%;
  bottom: 100px;
  right: 100px;
  z-index: 2;
}
@media screen and (max-width: 1000px) {
  .animate-img-after{
    bottom: 40px;
    right: 40px;
  }
}
.animate-img-after.scroll{
  animation: zoom 2s forwards;
}
@media screen and (max-width: 1000px) {
  .animate-img-after.scroll{
    animation: zoom-mobile 2s forwards;
  }
}
.animate-img-2.scroll {
  animation: zoom 2s forwards;
}
@media screen and (max-width: 1000px) {
  .animate-img-2.scroll {
    animation: zoom-mobile 2s forwards;
  }
}
.animate-img-present.scroll{
  animation: appearance 0.5s forwards;
}



@keyframes zoom {
  0% {
    bottom: 100px;
    right: 100px;
  }
  100% {
    bottom: -40px;
    right: -40px;
    width: 80%;
  }
}
@keyframes zoom-mobile {
  0% {
    bottom: 40px;
    right: 40px;
  }
  100% {
    bottom: -20px;
    right: -20px;
    width: 80%;
  }
}
@keyframes appearance {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0
  }
  100% {
    opacity: 0.8;
  }
}





.animate-img-before-2 {
  position: relative;
  top: 100px;
  left: 100px;
  width: 100%;
  z-index: 0;
  opacity: 0.6;
  z-index: 0;
}
@media screen and (max-width: 1000px) {
  .animate-img-before-2 {
    top: 40px;
    left: 40px;
  }
}
.animate-img-present-2{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  scale: 0.9;
  z-index: 0;
  opacity: 0;
  z-index: 0;
}
.animate-img-after-2{
  position: absolute;
  transition: all 0.5s ease-in-out;
  width: 100%;
  top: 100px;
  left: 100px;
  z-index: 2;
}
@media screen and (max-width: 1000px) {
  .animate-img-after-2{
    top: 40px;
    left: 40px;
  }
}
.animate-img-after-2.scroll{
  animation: zoom-2 2s forwards;
}
@media screen and (max-width: 1000px) {
  .animate-img-after-2.scroll{
    animation: zoom-mobile-2 2s forwards;
  }
}
.animate-img-3.scroll {
  animation: zoom-2 2s forwards;
}
@media screen and (max-width: 1000px) {
  .animate-img-3.scroll {
    animation: zoom-mobile-2 2s forwards;
  }
}
.animate-img-present-2.scroll{
  animation: appearance 0.5s forwards;
}

@keyframes zoom-2 {
  0% {
    top: 100px;
    left: 100px;
  }
  100% {
    top: -40px;
    left: -40px;
    width: 80%;
  }
}
@keyframes zoom-mobile-2 {
  0% {
    top: 40px;
    left: 40px;
  }
  100% {
    top: -20px;
    left: -30px;
    width: 80%;
  }
}








.second-block_img-border {
  border: #FF9900 2px solid;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.first-block_img,
.third-block_img,
.fourth-block_img,
.fifth-block_img,
.seventh-block_img,
.eight-block_img,
.tenth-block_img,
.eleven-block_img,
.twenty-block_img,
.thirty-block_img{
  width: 50%;
}
.img-first,
.img-third,
.img-fourth,
.img-fifth,
.img-seventh,
.img-eight,
.img-ninth,
.img-tenth,
.img-eleven,
.img-twenty,
.img-thirty{
  width: 100%;
}




.block-h{
  line-height: normal;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: calc(8px + 2vw);
  text-transform: uppercase;
  color: #FF9900;
  font-family: Forum;
  padding: 100px 0 0;
}
@media screen and (max-width: 1000px) {
  .block-h{
    padding:30px 0 0;
    justify-content: center;
  }
}
.start{
  justify-content: flex-start;
}
@media screen and (max-width: 1000px) {
  .start{
    justify-content: center;
  }
}
@media screen and (max-width: 1000px){
  .first-block,
  .third-block,
  .fourth-block,
  .fifth-block,
  .seventh-block,
  .seventh-block_i,
  .tenth-block,
  .eleven-block{
    flex-flow: column;
    min-height: auto;
  }
  .second-block,
  .fourth-block_i,
  .sixth-block,
  .eight-block,
  .ninth-block,
  .twenty-block,
  .thirty-block{
    flex-flow: column-reverse;
    min-height: auto;
  }
  .twenty-block {
    flex-flow: column;
    padding-top: 60px;
  }
  .first-block_img,
  .third-block_img,
  .fourth-block_img,
  .fifth-block_img,
  .seventh-block_img,
  .eight-block_img,
  .tenth-block_img,
  .eleven-block_img,
  .twenty-block_img,
  .thirty-block_img{
    width: 100%;
    margin: 0;
  }
  .eight-block_img{
    display: none;
  }
  .seventh-block_img{
    padding-top: 40px;
  }
  .first-block_items,
  .second-block_items,
  .third-block_items,
  .fourth-block_items,
  .fifth-block_items,
  .sixth-block_items,
  .seventh-block_items,
  .eight-block_items,
  .ninth-block_items,
  .tenth-block_items,
  .eleven-block_items,
  .twenty-block_items,
  .thirty-block_items{
    width: 100%;
    height: auto;
  }
  .ninth-block_items{
    padding-top: 80px;
  }
  #all-btn{
    margin-top: 7%;
  }
  .first-block_items--text,
  .second-block_items--text,
  .third-block_items--text,
  .sixth-block_items--text,
  .fifth-block_items--text,
  .seventh-block_items--text,
  .eight-block_items--text,
  .ninth-block_items--text,
  .tenth-block_items--text,
  .eleven-block_items--text,
  .twenty-block_items--text,
  .thirty-block_items--text{
    padding: 0;
    margin: 0;
  }
  .thirty-block_items--text {
    padding-top: 40px;
  }
}
@media screen and (max-width: 1000px) {
  .sixth-block_items--text,
  .eight-block_items--text{
    text-align: center;
  }
}
@media screen and (max-width: 1000px) {
  .eight-block_items--text{
    padding: 0 40px;
  }
}
.request-block-main_title-content_item p {
  padding: calc(10px + 1vw) 0px;
  font-size: calc(8px + 1vw);
  color: #ffffff;
  line-height: normal;
}
.request-block-main_title-content_item h2{
  padding: 10px 0;
  text-transform: uppercase;
  color: #FF9900;
  font-size: calc(8px + 2vw);
  line-height: normal;
  text-align: center;
  font-family: Forum;

}
.request-block-main  {
  display: flex;
  flex-wrap: wrap;
}
.request-block-main_title{
  width: 100%;
  padding: 0 40px;

}
.request-block-main_title-content {
  display: flex;
  flex-direction: column;
  padding: 160px calc(10px + 2vw) 0;
  height: 100%;
  justify-content: space-between;
  text-align: center;
}
@media screen and (max-width: 1000px) {
  .request-block-main_title-content {

    padding: 0 calc(10px + 2vw);
  }
}

.request-block-main_title-content_btn{
  padding: 40px 0 200px;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  .request-block-main_title-content_btn{
    padding: 40px 0 100px;
  }
}
.request-block-main_title-content_btn-text{
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: 2px solid #FF9900;
  position: relative;
  align-items: center;
  cursor: pointer;
  width: 50%;
}
.request-block-main_title-content_btn-text p{
  font-family: Montserrat-Light;
  padding: calc(10px + 1vw) 0px;
  font-size: calc(8px + 1vw);
  color: #ffffff;
  line-height: normal;
}
@media screen and (max-width: 1000px) {
  .request-block-main_title-content_btn-text{
    width: 100%;
  }
}
.request-block-main_title-content_btn-text:hover {
  background: linear-gradient(180deg, #FF9900 -248.53%, #090C0C 89.24%);
}
.request-block-main_title-content_btn-text:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FF9900 -118.12%, #090C0C 100%);
}


</style>
