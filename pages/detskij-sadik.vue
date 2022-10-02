<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Детский сад</span>
    </div>
    <!-- Акция -->
    <div class="md:flex justify-around items-center  bg-yellow-300 p-4">
      <div class="py-4 font-serif text-4xl text-red-500 text-center justify-center">
        <p>Внимание действует акция!</p>
        <p class="text-2xl m-3">Первый месяц посещения <span class="line-through">12 500 руб.</span> всего 10 500 руб.*</p>
        <p class="bg-gray-300 text-gray-600 text-lg my-3 -px-5">*Акция действует до 15.09.2022г.</p>
      </div>
      <div class="md:flex justify-around border-2 border-red-500 rounded-3xl p-5 m-5 bg-white">
        <div class="md:1/2">
          <p class="text-center text-2xl text-red-500 font-serif m-3">Оставте заявку и мы вам перезвоним</p>
          <request-form />
        </div>
      </div>
    </div>
    <!-- Контент -->
    <div class="font-serif p-5 md:p-10 text-bold text-lg text-teal-700">
      <p class="indent-2 text-bold text-lg">Частный детский садик «Золотой Ключик» был основан 1 сентября 2012 г. 
        Ориентирован на сохранение и поддержание здоровья ребенка. 
        В помещениях поддерживается оптимальная температура, в меню присутствуют безопасные, одобренные специалистами блюда. 
        В «Золотой Ключик» принимают детей от 1,0 года до 7 лет. 
      </p>
      <!--
      <div class="flex md:block justify-start md:float-right">
        <img class="object-cover w-[300px] h-[300px] rounded-3xl" src="http://gold-key21.ru/wp-content/uploads/2014/06/zdanie-22d.jpg">
      </div>
      -->
      <p class="underline py-3 text-xl text-teal-900">Группы в «Золотом ключике» расположены по разным этажам:</p>
      <ul class="indent-2">
        <li>I- группа дети от 1 года до 2 лет.</li>
        <li>II- группа дети от 2 до 3 лет.</li>
        <li>III- группа дети от 3 до 4 лет.</li>
        <li>IV- группа дети от 4 до 6 лет.</li>
      </ul>
      <p class="underline py-3 text-xl text-teal-900">Преимущества частного сада:</p>

      <ul class="text-lg">
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Малочисленные группы (до 12 детей)
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Высококвалифицированный персонал
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Здоровое питание (пятиразовое)
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Удобный график работы с 07:00 до 18:00 (можно оставлять ребенка на дополнительное время за доплату)
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Безопасность (круглосуточное видеонаблюдение всей территории детского сада с длительным периодом хранения видеозаписей)
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Профилактика простудных заболеваний (ежедневное кварцевание, влажная уборка, спальная и игровая комната расположены отдельно)
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Прогулки на огороженной территории с оборудованными детскими площадками
        </li>
        <li class="flex my-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-1 text-bold text-red-700 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Качество услуг контролируются родителями и руководством детской студии
        </li>
      </ul>
    </div>

    <gallery-with-form :gallery="gallery"/>

    <!-- Цены -->
    <div class="font-serif text-center mr- md:flex md:justify-around">
      <div class="m-5 md:w-80">
        <div class="text-white bg-red-500 text-2xl text-bold rounded-t-3xl h-20 pt-3">
          <p>Неполный день</p>
          <p>07:00 - 12:00</p>
        </div>
        <div class="border-red-500 border-2 rounded-b-3xl text-teal-700">
          <p class="mt-5 text-4xl text-bold text-teal-900">от 9000 руб.
          <p class="text-sm text-teal-900">Месяц</p>
          <p class="mt-3">- присмотр и уход</p>
          <p>- 3-х разовое питание</p>
          <p>- прогулка</p>
          <p>- развитие</p>
          <p class="my-4 text-bold underline underline-offset-4 decoration-dashed hover:text-teal-900  hover:decoration-red-500">узнать подробности</p>
          <button class="py-2 px-8 my-8 text-white text-2xl bg-red-500 rounded-3xl hover:border-2">Подать заявку</button>
        </div>
      </div>

      <div class="m-5 md:w-80">
        <div class="text-white bg-red-500 text-2xl text-bold rounded-t-3xl h-20 pt-3">
          <p>Полный день</p>
          <p>07:00 - 18:00</p>
        </div>
        <div class="border-red-500 border-2 rounded-b-3xl text-teal-700">
          <p class="mt-5 text-4xl text-bold text-teal-900">от 12500 руб.
          <p class="text-sm text-teal-900">Месяц</p>
          <p class="mt-3">- присмотр и уход</p>
          <p>- 5-х разовое питание</p>
          <p>- прогулка</p>
          <p>- сон</p>
          <p>- развитие</p>
          <p class="my-4 text-bold underline underline-offset-4 decoration-dashed hover:text-teal-900  hover:decoration-red-500">узнать подробности</p>
          <button class="py-2 px-8 my-8 text-white text-2xl bg-red-500 rounded-3xl hover:border-2">Подать заявку</button>
        </div>
      </div>

      <div class="m-5 md:w-80">
        <div class="text-white bg-red-500 text-2xl text-bold rounded-t-3xl h-20 pt-7">
          <p>Разовое посещение</p>
        </div>
        <div class="border-red-500 border-2 rounded-b-3xl text-teal-700">
          <p class="mt-5 text-4xl text-bold text-teal-900">от 1000 руб.
          <p class="text-sm text-teal-900">Месяц</p>
          <p class="mt-3">- присмотр и уход</p>
          <p>- питание</p>
          <p>- развитие</p>
          <p class="my-4 py-4 text-bold underline underline-offset-4 decoration-dashed hover:text-teal-900  hover:decoration-red-500">узнать подробности</p>
          <button class="py-2 px-8 my-8 text-white text-2xl bg-red-500 rounded-3xl hover:border-2">Подать заявку</button>
        </div>
      </div>
    </div>


    <div class="bg-purple-100 md:px-5 my-5 text-bold text-teal-900 text-xl font-serif text-center">
      <p>Количество мест ограничено.</p>
      <p><a href="tel:89373775850">тел. 8-937-377-58-50</a></p>
    </div>
    
    <!-- Галерея -->
    <div class="text-center font-serif my-10">
      <div class="grid grid-cols-3 gap-1 md:grid-cols-8">
        <a href="/detskij-sadik/originals/zapisi_v_detskij_sad.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/zapisi_v_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/zanjatija_v_sadu.jpg" data-fancybox="gallery1" data-caption='Детский сад  "Золотой ключик"'>
          <img src="@/static/detskij-sadik/zanjatija_v_sadu-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/zanjatija_v_dou.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/zanjatija_v_dou-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/zanjatija_rechju.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/zanjatija_rechju-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/zanjatie_v_podgotovitelnoj_gruppe.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/zanjatie_v_podgotovitelnoj_gruppe-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/vtoraja_mladshaja_gruppa_zanjatie.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/vtoraja_mladshaja_gruppa_zanjatie-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/v_detskom_sadu_srednjaja_gruppa.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img  src="@/static/detskij-sadik/v_detskom_sadu_srednjaja_gruppa-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/sajt_detskogo_sada.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/sajt_detskogo_sada-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/risovanie_v_detskom_sadu.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/risovanie_v_detskom_sadu-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/razvivajushhie_zanjatija_dlja_detej.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/razvivajushhie_zanjatija_dlja_detej-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/prazdniki_v_detskom_sadu.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/prazdniki_v_detskom_sadu-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/portal_detskij_sad.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/portal_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/oficialnyj_sajt_detskogo_sada.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/oficialnyj_sajt_detskogo_sada-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/ochered_v_detskij_sad.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/ochered_v_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/gruppy_v_detskom_sadu.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/gruppy_v_detskom_sadu-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/igry_detskij_sad.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/igry_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/igry_zanjatija.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/igry_zanjatija-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/jelektronnaja_ochered_v_detskij_sad.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/jelektronnaja_ochered_v_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/mladshaja_gruppa_detskogo_sada.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/mladshaja_gruppa_detskogo_sada-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/gruppa_dou.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/gruppa_dou-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/gruppa_dou.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/foto_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/detskij_sad_goda.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/detskij_sad_goda-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/detskij_razvivajushhij_portal.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/detskij_razvivajushhij_portal-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/detskij_portal.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/detskij_portal-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/detskie_zanjatija.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/detskie_zanjatija-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/chastnye_detskie_sady.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/chastnye_detskie_sady-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/chastnyj_detskij_sad.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/chastnyj_detskij_sad-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/dejatelnost_v_dou.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/dejatelnost_v_dou-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/deti_v_detskom_sadu.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/deti_v_detskom_sadu-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/deti_v_dou.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/deti_v_dou-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/detskie_tancy_v_detskom_sadu.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/detskie_tancy_v_detskom_sadu-150x150.jpg">
        </a>
        <a href="/detskij-sadik/originals/23_fevralja_v_detskom_sadu.jpg" data-fancybox="gallery" data-caption='Детский сад "Золотой ключик"'>
          <img src="@/static/detskij-sadik/23_fevralja_v_detskom_sadu-150x150.jpg">
        </a>
      </div>
    </div>

    <footer-bar />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Navigation from "@/components/Navigation.vue"
import FooterBar from "@/components/FooterBar.vue"
import RequestForm from '~/components/RequestForm.vue'
export default {
  components: {
    Banner,
    Navigation,
    FooterBar,
    RequestForm
  },
  head() {
    return {
      script: [
        {
          src: "https://code.jquery.com/jquery-3.4.1.min.js",
          body: true
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
          body: true
        },

      ]
    }
  },
  data () {
    return {
      gallery:[
        {uri: require("@/static/detskij-sadik/gallery/1.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/2.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/3.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/4.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/5.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/6.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/7.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/8.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/9.jpg")},
        {uri: require("@/static/detskij-sadik/gallery/10.jpg")},
      ]
    }
  }


}
</script>

<style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css");

</style>