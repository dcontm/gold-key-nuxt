<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif mt-10">
      <span class="text-3xl text-teal-700">Контакты</span>
      <p class="text-2xl my-2 text-teal-500">Телефон: <a href="tel:+7-937-377–58–50" class="text-teal-700">+7 (937) 377–58–50</a></p>
      <p class="text-2xl my-2 text-teal-500">Email: <a href="mailto:gold-key21@mail.ru" class="text-teal-700">gold-key21@mail.ru</a></p>
      <p class="flex text-2xl my-2 text-teal-500 justify-center">Мы в соцсетях: 
        <a href="#" class="px-1">
          <img src="@/static/vk-logo.svg" class="w-8 hover:w-10">
        </a>
        <a href="#" class="px-1">
          <img src="@/static/instagram-logo.svg" class="w-8 hover:w-10">
        </a>
      </p>
      <p class="flex text-2xl my-2 text-teal-500 justify-center">Мы в мессенджерах: 
        <a href="#">
          <img src="@/static/whats_app.svg" class="w-8 hover:w-10">
        </a>
        <a href="#">
          <img src="@/static/telegram.svg" class="w-8 hover:w-10">
        </a>
        <a href="#">
          <img src="@/static/viber.svg" class="w-8 hover:w-10">
        </a>
      </p>
      <p class="text-2xl my-2 text-teal-500">Адрес: <span class="text-teal-700">гор.Чебоксары, ул.Хузангая, 22Д</span></p>
      <div class="flex justify-center py-5">
        <iframe class="w-full h-[300px] md:w-[700px] md:h-[400px] lg:w-[800px] lg:h-[400px]" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad2eb8ecb94c20bde80006bf567b8ccfaaae399bb32c6538ab168fa5b574daf92&amp;source=constructor" frameborder="0"></iframe>
      </div>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Navigation from "@/components/Navigation.vue"
import FooterBar from "@/components/FooterBar.vue"
export default {
  components: {
    Banner,
    Navigation,
    FooterBar
  }


}
</script>

<style>

</style>