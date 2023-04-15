<template>
  <q-page>
    <div class="first-block">
      <div class="first-block_items">
        <div class="first-block_items--text">
          <p>Привет!<br/>
            Меня зовут Евгений.<br/>
            Уже более <span style="color: #FF9900">11 лет</span> я занимаюсь фотографией
            и последние несколько лет
            я фотографирую заграницей.</p>

          <p>Когда я спрашиваю,почему меня выбирают
            в качестве своего фотографа, мне говорят, что у моих фотографий есть свой особый стиль -
            это эмоциональные живые добрые фотографии.</p>
        </div>
        <div v-if="isWideScreen" id="all-btn" class="first-block_items--btn"
             @click="() => {$router.push ('request')}">
          <p>Записаться на съемку</p>
        </div>
      </div>
      <div class="first-block_img"></div>
      <div v-if="!isWideScreen" id="all-btn" class="first-block_items--btn"
           @click="() => {$router.push ('request')}">
        <p>Записаться на съемку</p>
      </div>
    </div>
    <div class="second-block">
      <div class="second-block_img">
        <img ref="animateImg" class="animate-img" src="/img/photo-2.png" alt="">
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
            <p>Поэтому мой хозяин лучший в  сфере фотографии! Если хотите такие же яркие фото как мои,
            то пишите ему.</p>
        </div>
      </div>
      <div class="third-block_img"></div>
    </div>
    <div class="block-h">
      Знаменитости выбирают меня :
    </div>
    <div class="fourth-block">
      <div class="fourth-block_i">
        <div class="fourth-block_img">
        </div>
        <div class="fourth-block_items">
          <div class="fourth-block_items--text">
            <div class="block-h">
              Анна бузова
            </div>
            <div class="fourth-block_items--location">
              <img src="/icons/location.svg" alt="">
              <p>Alanya, Cleopatra beach</p>
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

            <p>Огромное спасибо тебе за работу, внимание, настроение и красоту! Очень все чутко и бережно, но в то же время легко и непринужденно! Получилось то, что нужно! Ты очень тонко чувствуешь людей, отобразил всё, что нужно
              и можно было, деликатно так, слегка, но в точку.</p>

              <p>Ещё обязательно увидимся. Работа с тобой зарядила и дала тот самый волшебный толчок,
              а самое главное, это взгляд внутрь себя.
              Ещё раз спасибо.</p>
          </div>
        </div>
        <div class="fifth-block_img"></div>
    </div>
    <div class="sixth-block">
      <div class="sixth-block_img">
        <img ref="animateImg2" class="animate-img-2" src="/img/photo-6.png" alt="">
      </div>
      <div class="sixth-block_items">
        <div class="sixth-block_items--text">
          <div class="block-h" style="justify-content: flex-start">ХОЧЕШЬ НА ФОТОСЕССИЮ?
          </div>
          <p style="font-size: calc(15px + 1.1vw)">но <span style="color: #FF9900">страхи</span> не отпускают?</p>
          <p style="font-size: calc(15px + 1.1vw)">«Я НЕ ФОТОГИЕНИЧНАЯ»</p>

          <p>-Я нахожу в каждой уникальность
            и красоту, вижу выгодные ракурсы
            и знаю как преподнести достоинства
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
              <img src="/icons/location.svg" alt="">
              <p>Alanya, Cleopatra beach</p>
            </div>
            <div id="all-btn" class="first-block_items--btn"
                 @click="() => {$router.push ('rates')}">
              <p>Хочу на съёмку</p>
            </div>
          </div>
        </div>
        <div class="seventh-block_img">
        </div>
      </div>
    </div>
    <div class="eight-block">
      <div class="eight-block_img"></div>
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
          <h4 id="title-block">«С ЖЕНЕЙ ОЧЕНЬ ЛЕГКО РАБОТАТЬ»</h4>

          <p>Мне посчастливилось поработать с Женей<br>
            Хотя слово работать тут не особо подходит,<br>так как это реальный <span style="color: #FF9900">кайф</span>.</p>

            <p>Выбрала его потому что у всех фото, сделанных им какой-то свой стиль и я хотела стать
            частью этого стиля.
            Вы не пожалеете о своём решении, если вашим фотографом будет Женя.</p>
            <p>Спасибо большое, в следующий раз
            обязательно еще напишу !</p>
        </div>
      </div>
      <div class="ninth-block_img">
        <img ref="animateImg3" class="animate-img-3" src="/img/photo-9.png" alt="">
      </div>
    </div>
    <div class="tenth-block">
        <div class="tenth-block_img">
        </div>
        <div class="tenth-block_items">
          <div class="tenth-block_items--text">
            <div class="block-h">
              РЕГИНА ТОДОРЕНКО
            </div>
            <div class="tenth-block_items--location">
              <img src="/icons/location.svg" alt="">
              <p>Belek</p>
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
          <h4 id="title-block">«ЛЕГКО, КАК С ДРУГОМ»</h4>

          <p>Мне кажется, даже смотря на фото Жени можно понять, что он очень крутой.<br>Когда я прилетела в Турцию вопроса «кто же меня пофотографирует?» даже не возникало.<br>Я, находясь в России уже знала, кто это будет.<br>Спасибо тебе!</p>
        </div>
      </div>
      <div class="eleven-block_img"></div>
    </div>
    <div style="text-align: center" class="block-h">
      Если вы это читаете, то уже хочу поблагодарить<br>
      за интерес к моей работе!
    </div>
    <div class="twenty-block">
      <div class="twenty-block_img"></div>
      <div class="twenty-block_items">
        <div class="twenty-block_items--text">
          <p><span style="color: #FF9900">Бронирование</span> фотосессии производится заранее
            с задатком для подтверждения конкретной даты.</p>

          <p>Если наши с вами города различаются,
            но вы желаете попасть ко мне на фотосессию, буду рад <span style="color: #FF9900">приехать к вам</span> или рассказать
            как добраться ко мне.</p>
        </div>
      </div>
    </div>
    <div class="thirty-block">
      <div class="thirty-block_items">
        <div class="thirty-block_items--text">
            <p>Для нашего с вами удобства рекомендую:
              сразу написать даты вашего отдыха, город и отель.</p>
            <p>Я стараюсь сделать фотосессию только для вас, именно поэтому предложу вам <span style="color: #FF9900">уединённые локации</span>
              для лучшего результата.</p>
          <div id="all-btn" class="thirty-block_items--btn"
               @click="() => {$router.push ('request')}">
            <p>Записаться на съёмку</p>
          </div>
        </div>
      </div>
      <div class="thirty-block_img">
      </div>
    </div>
    <rates-block></rates-block>
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
        if (animateImg && animateImg.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg.classList.add('scroll')
        }
        if (animateImg2 && animateImg2.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg2.classList.add('scroll')
        }
        if (animateImg3 && animateImg3.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg3.classList.add('scroll')
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
        if (animateImg && animateImg.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg.classList.add('scroll')
        }
        if (animateImg2 && animateImg2.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg2.classList.add('scroll')
        }
        if (animateImg3 && animateImg3.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg3.classList.add('scroll')
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
}
#title-block {
  font-size: 19px;
  color: #FF9900;
}
.imgb{
  height: 117px;
  width: 117px;
  border-radius: 100%;
}
.first-block{
  padding: 5%;
  color: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
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
  padding: 5%;
  color: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
}
 .first-block_items,
 .third-block_items,
 .fifth-block_items,
 .seventh-block_items,
 .ninth-block_items,
 .eleven-block_items,
 .thirty-block_items{
   display: flex;
   width: 50vw;
   height: 100vh;
   padding-right: 5%;
   flex-flow: column;
   justify-content: space-around;
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
  width: 50vw;
  height: 100vh;
  padding-left: 5%;
  flex-flow: column;
  justify-content: space-around;
}
.first-block_items--text,
.third-block_items--text,
.fifth-block_items--text,
.ninth-block_items--text,
.eleven-block_items--text,
.thirty-block_items--text{
  color: white;
  width: 100%;
  font-size: calc(10px + 1vw);
  padding-right: 5%;
  display: flex;
  flex-flow: column;
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
  font-size: calc(10px + 1vw);
  padding-left: 5%;
  flex-flow: column;
}
.fourth-block_items--text,
.seventh-block_items--text{
  color: white;
  width: 100%;
  font-size: calc(10px + 1vw);
  padding-left: 5%;
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
  font-size: calc(10px + 1vw);
  cursor: pointer;
  background-size: cover;
  transition: 0.5s ease-in-out;
}
#all-btn:hover {
  background: linear-gradient(180deg, #FF9900 -248.53%, #090C0C 89.24%);
}
#all-btn:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FF9900 -118.12%, #090C0C 100%);;
}

#all-btn p{
  margin: 0;
}
.first-block_img{
  background-image: url("/img/photo-1.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-left: 5%;
}
.second-block_img,
.sixth-block_img,
.ninth-block_img{
  border: #FF9900 2px solid;
  width: 50vw;
  background-size: cover;
  height: 700px;
  margin-right: 5%;
}
.third-block_img{
  background-image: url("/img/photo-3.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-left: 5%;
}
.fourth-block_img{
  background-image: url("/img/photo-4.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-right: 5%;
}
.fifth-block_img{
  background-image: url("/img/photo-5.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-left: 5%;
}
.seventh-block_img{
  background-image: url("/img/photo-7.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-left: 5%;
}
.eight-block_img{
  background-image: url("/img/photo-8.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-right: 5%;
}
.tenth-block_img{
  background-image: url("/img/photo-10.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-right: 5%;
}
.eleven-block_img{
  background-image: url("/img/photo-11.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-left: 5%;
}
.twenty-block_img{
  background-image: url("/img/photo-12.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-right: 5%;
}
.thirty-block_img{
  background-image: url("/img/photo-13.png");
  width: 50vw;
  background-size: cover;
  height: 100vh;
  margin-left: 5%;
}

.animate-img,
.animate-img-2
{
  width: 65%;
  top: 0;
  left: 0;
  transform: translate(-5%, -5%);
  transition: all 0.5s ease-in-out;
  scale: 1.2;
  z-index: -2;
  opacity: 0.5;
}
.animate-img-3 {
  width: 65%;
  top: 0;
  left: 0;
  transform: translate(45%, 25%);
  transition: all 0.5s ease-in-out;
  scale: 1.2;
  z-index: -2;
  opacity: 0.5;
}

.animate-img.scroll {
  animation: zoom 1.5s forwards;
}
.animate-img-2.scroll {
  animation: zoom 1.5s forwards;
}
.animate-img-3.scroll {
  animation: zoom-3 1.5s forwards;
}
@keyframes zoom-3 {
  0% {
    transform: scale(1.2);
    transform: translate(45%, 25%);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform: translate(-5%, -5%);
  }
}

@keyframes zoom {
  0% {
    transform: scale(1.2);
    transform: translate(-10%, -10%);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform: translate(45%, 25%);
  }
}
.block-h{
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: calc(8px + 2vw);
  text-transform: uppercase;
  color: #FF9900;
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
    height: 48vh;
    margin: 0;
  }
  .second-block_img,
  .sixth-block_img{
    width: 310px;
    height: 400px;
    margin: 0 0 40px 0;
  }
  .ninth-block_img{
    width: 310px;
    height: 400px;
    margin: 40px 0 40px 0;
  }
  .animate-img,
  .animate-img-2,
  .animate-img-3{
    height: 75%;
    width: auto;
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
    padding: 5%;
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


}
</style>
