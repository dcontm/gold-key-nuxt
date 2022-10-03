<template>
  <div class="max-w-8xl">
    <banner />
    <navigation />
    
    <!-- Баннер -->
    <div class="p-5 mt-4 px-5 bg-sky-100 md:flex md:w-full md:items-center">
      <div class="font-serif text-red-500 text-4xl text-center md:text-6xl md:w-1/2">
        Детский Центр в НЮР гор.Чебоксары
        <div class="italic text-yellow-500 text-xl pt-4 md:text-3xl md:pt-8">Лучшее качество по доступным ценам</div>
      </div>
      <img class="object-fit md:w-1/2" src="@/static/main-img.png">
    </div>
    
    <!-- Услуги -->
    <div class="w-full md:flex md:flex-wrap font-serif text-teal-900 text-xl md:text-2xl"> 
      <nuxt-link to="/detskij-sadik" class="p-4 my-2 w-full md:w-1/2">
        <div>
          <img src="@/static/landing_1.jpg" class="md:float-left md:mr-4 rounded-br-full">
          <button class="my-2 flex text-red-500 mt-4 hover:border-2 hover:border-red-500 hover:p-1 hover:rounded-full items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            Узнать больше
          </button>
        </div>
        <p>Детский сад</p>
        <ul class=" text-teal-700 text-base">
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Группы от 1 до 6 лет
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Доступные цены от 10500 ₽
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Комфортное прибывание
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Система видеонаблюдения
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Собственная площадка для прогулок
          </li>
        </ul>
      </nuxt-link>

      <nuxt-link to="/uslugi" class="p-4 my-2 w-full md:w-1/2">
        <div>
          <img src="@/static/landing_1.jpg" class="w-72 h-48 md:float-left md:mr-4 rounded-br-full">
          <button class="flex text-red-500 mt-4 hover:border-2 hover:border-red-500 hover:p-1 hover:rounded-full items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            Узнать больше
          </button>
        </div>
        <p>Кружки</p>
        <ul class=" text-teal-700 text-base">
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Английский язык
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Подготовка к школе
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Логопед
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Вокал
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-teal-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Карате
          </li>
        </ul>
      </nuxt-link>
    </div>
  
    <!-- Контакты -->
    <div class="bg-sky-100 p-4">
      <p class="italic text-center font-serif text-red-500 text-3xl">Не откладывайте на потом!</p>
      <div class="md:flex justify-around">
        <div class="md:1/2">
          <p class="text-center text-xl text-teal-900 font-serif m-3">Оставьте заявку и мы вам перезвоним</p>
          <request-form />
        </div>
        <div class="md:1/2">
          <p class="text-center text-xl text-teal-900 font-serif m-3">Или напишите нам</p>
          <div class="flex items-center justify-around">
            <a href="https://api.whatsapp.com/send?phone=89613471117">
              <img src="@/static/whats_app.svg" class="w-24 hover:w-28">
            </a>
            <a href="#">
              <img src="@/static/telegram.svg" class="w-24 hover:w-28">
            </a>
            <a href="viber://add?number=89613471117">
              <img src="@/static/viber.svg" class="w-24 hover:w-28">
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Приимущества -->
    <div class="w-full md:flex md:flex-wrap font-serif text-teal-900 text-xl md:text-2xl">      
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing_6.jpeg" class="md:float-left md:mr-4 rounded-br-full">
        <p>Профессионалы</p>
        <p class="italic text-teal-700 text-base">У нас работают только лучшие дипломированные специалисты. Весь персонал проходит тщательный отбор.</p>
      </div>
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing_6.jpeg" class="md:float-left md:mr-4 rounded-br-full">
        <p>Надежность</p>
        <p class="italic text-teal-700 text-base">Мы работаем для вас уже более 10 лет и проявили себя в качетсве надежного помощника в воспитании ваших детей.</p>
      </div>
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing_6.jpeg" class="md:float-left md:mr-4 rounded-br-full">
        <p>Безопасность</p>
        <p class="italic text-teal-700 text-base">Круглосуточное видеонаблюдение всей территории детского сада с длительным периодом хранения видеозаписей.</p>
      </div>
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing_6.jpeg" class="md:float-left md:mr-4 rounded-br-full">
        <p>Забота о питании</p>
        <p class="italic text-teal-700 text-base">Здоровое пятиразовое питание, приготовленное на собственной кухне. Разработанный специалистами рацион.</p>
      </div>
    </div>

    <!-- Подвал -->
    <footer-bar/>

  </div>
    
</template>

<script>
import Banner from "@/components/Banner.vue"
import Navigation from '~/components/Navigation.vue'
import FooterBar from '~/components/FooterBar.vue'
import RequestForm from '~/components/RequestForm.vue'
export default {
  name: 'IndexPage',
  components: {
    Navigation,
    Banner,
    FooterBar,
    RequestForm
  }

}
</script>
