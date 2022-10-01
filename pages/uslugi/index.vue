<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Список кружков</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 place-items-center text-center">
      <router-link :to="item.uri" v-for="item in items" :key="item.name" class="p-3 m-3 border-yellow-500 hover:border-yellow-800 rounded-3xl border-2">
        <p class="text-teal-600 font-serif text-center text-2xl my-2 hover:border-teal-900 hover:border-b-2">{{item.name}}</p>
        <img :src="item.img" class="object-cover h-36 w-80">
        <button class="flex text-red-500 hover:text-red-800  rounded-full border-2 border-red-500 hover:border-red-800 px-2 py-1 mx-2 mb-2 mt-7 font-serif text-semibold text-2xl">
          Подробнее
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-8 h-8 text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </router-link>
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
  },
  data() {
    return {
      items: [
        {name:"Подготовка к школе", img: require("@/static/uslugi/img.svg"), uri:"/uslugi/podgotovka-k-shkole-cheboksary"},
        {name:"Английский язык", img: require("@/static/uslugi/img.svg"), uri:"/uslugi/magic-english"},
        {name:"Логопед", img: require("@/static/uslugi/img.svg"), uri:"/uslugi/logoped-v-cheboksarah"},
        {name:"Вокал", img: require("@/static/uslugi/img.svg"), uri:"/uslugi/uroki-vokala-v-cheboksarah"},
        {name:"Каратэ", img: require("@/static/uslugi/img.svg"), uri:"/uslugi/karatje-v-cheboksarah"},
      ]
    }
  },


}
</script>

<style>

</style>