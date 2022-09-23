<template>
  <div class="max-w-8xl">
    <banner />
    <navigation />
    
    <div class="p-5 mt-4 px-5 bg-purple-100 md:flex md:w-full md:items-center">
      <div class="font-serif text-red-500 text-4xl text-center md:text-6xl md:w-1/2">
        Детский Центр в НЮР гор.Чебоксары
        <div class="italic text-yellow-500 text-xl pt-4 md:text-3xl md:pt-8">Лучшее качество по доступным ценам</div>
      </div>
      <img class="object-fit md:w-1/2" src="@/static/main-img.png">
    </div>

    <div class="w-full md:flex md:flex-wrap font-serif text-teal-600 text-xl md:text-2xl"> 
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing1.jpeg" class="md:float-left md:mr-4 ">
        <p>Детский сад</p>
        <ul class=" text-teal-500 text-base">
          <li class="flex">
            Группы от 1 до 6 лет
          </li>
          <li>Доступные цены от 10500 ₽</li>
          <li>Комфортное прибывание</li>
          <li>Бесопасность</li>
          <li>Собственная площадка для прогулок</li>
        </ul>
      </div>

      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing1.jpeg" class="md:float-left md:mr-4 ">
        <p>Кружки</p>
        <ul class=" text-teal-500 text-base">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
            Английский язык
          </li>
          <li>
            Подготовка к школе
          </li>
          <li>Логопед</li>
          <li>Вокал</li>
          <li>Карате</li>
          <li>Фортепиано</li>
        </ul>
      </div>

    </div>

    <div class="w-full md:flex md:flex-wrap font-serif text-purple-700 text-xl md:text-2xl">      
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing1.jpeg" class="md:float-left md:mr-4 ">
        <p>Профессионалы</p>
        <p class="italic text-purple-500 text-base">У нас работают только лучшие дипломированные специалисты. Весь персонал проходит тщательный отбор.</p>
      </div>
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing1.jpeg" class="md:float-left md:mr-4">
        <p>Надежность</p>
        <p class="italic text-purple-500 text-base">Мы работаем для вас уже более 10 лет и проявили себя в качетсве надежного помощника в воспитании ваших детей.</p>
      </div>
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing1.jpeg" class="md:float-left md:mr-4">
        <p>Безопасность</p>
        <p class="italic text-purple-500 text-base">Круглосуточное видеонаблюдение всей территории детского сада с длительным периодом хранения видеозаписей.</p>
      </div>
      <div class="p-4 my-2 w-full md:w-1/2">
        <img src="@/static/landing1.jpeg" class="md:float-left md:mr-4">
        <p>Забота о питании</p>
        <p class="italic text-purple-500 text-base">Здоровое пятиразовое питание, приготовленное на собственной кухне. Разработанный специалистами рацион.</p>
      </div>
    </div>

  </div>
    
</template>

<script>
import Banner from "@/components/Banner.vue"
import Navigation from '~/components/Navigation.vue'
export default {
  name: 'IndexPage',
  components: {
    Navigation,
    Banner
  }

}
</script>
