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
        <div v-if="isWideScreen" id="all-btn" class="first-block_items--btn">
          <p>Записаться на съемку</p>
        </div>
      </div>
      <div class="first-block_img"></div>
      <div v-if="!isWideScreen" id="all-btn" class="first-block_items--btn">
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
            <div v-if="isWideScreen" id="all-btn" class="first-block_items--btn">
              <p>Хочу на съёмку</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!isWideScreen" id="all-btn" class="first-block_items--btn">
        <p>Хочу на съёмку</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'IndexPage',
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
        if (animateImg && animateImg.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg.classList.add('scroll')
        }
      })
    })

// отписываемся от событий при удалении компонента
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', () => {
        const animateImg = document.querySelector('.animate-img')
        if (animateImg && animateImg.getBoundingClientRect().top < window.innerHeight / 2) {
          animateImg.classList.add('scroll')
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
  font-family: Montserrat;
}
.first-block{
  margin-top: 130px;
  padding: 5%;
  color: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
}
.second-block,
.third-block,
.fourth-block{
  padding: 5%;
  color: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
}
 .first-block_items,
 .third-block_items {
   display: flex;
   width: 50vw;
   height: 100vh;
   padding-right: 5%;
   flex-flow: column;
   justify-content: space-around;
 }
 .fourth-block_i{
   display: flex;
   width: 100%;
 }
.second-block_items,
.fourth-block_items{
  display: flex;
  width: 50vw;
  height: 100vh;
  padding-left: 5%;
  flex-flow: column;
  justify-content: space-around;
}
.first-block_items--text,
.third-block_items--text{
  color: white;
  width: 100%;
  font-size: 20px;
  padding-right: 5%;
  display: flex;
  flex-flow: column;
}
.second-block_items--text{
  color: white;
  width: 100%;
  font-size: 20px;
  padding-left: 5%;
  flex-flow: column;
}
.fourth-block_items--text{
  color: white;
  width: 100%;
  font-size: 20px;
  padding-left: 5%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.fourth-block_items--location{
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
  font-size: 20px;
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
.second-block_img{
  border: #FF9900 2px solid;
  width: 50vw;
  background-size: cover;
  height: 100vh;
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
.animate-img {
  width: 65%;
  top: 0;
  left: 0;
  transform: translate(-5%, -5%);
  transition: all 0.5s ease-in-out;
  scale: 1.2;
  z-index: -2;
  opacity: 0.5;
}

.animate-img.scroll {
  animation: zoom 1.5s forwards;
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
  font-size: 35px;
  text-transform: uppercase;
  color: #FF9900;
}
@media screen and (max-width: 1000px){
  .first-block,
  .second-block,
  .third-block{
    flex-flow: column;
  }
  .first-block_img,
  .third-block_img{
    width: 100%;
    height: 48vh;
    margin: 0;
  }
  .second-block_img{
    width: 100%;
    height: 50vh;
    margin: 0 0 40px 0;
  }
  .animate-img{
    height: 75%;
    width: auto;
  }
  .first-block_items,
  .second-block_items,
  .third-block_items{
    width: 100%;
    height: auto;
  }
  #all-btn{
    margin-top: 5%;
  }
  .first-block_items--text,
  .second-block_items--text,
  .third-block_items--text {
    padding: 0;
  }
}
</style>
