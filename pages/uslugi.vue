<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Список кружков</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 place-items-center text-center">
      <router-link to="/uslugi" v-for="item in items" :key="item.name" class="p-3 m-3 border-yellow-500 hover:border-yellow-800 rounded-3xl border-2">
        <p class="text-teal-600 font-serif text-center text-2xl my-2 hover:border-teal-900 hover:border-b-2">{{item.name}}</p>
        <img :src="item.img" class="object-cover h-36 w-80">
        <button class=" text-red-500 hover:text-red-800  rounded-full border-2 border-red-500 hover:border-red-800 px-2 py-1 m-2 font-serif text-semibold text-2xl">Подробнее</button>
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
        {name:"Подготовка к школе", img: require("@/static/uslugi/img.svg")},
        {name:"Английский язык", img: require("@/static/uslugi/img.svg")},
        {name:"Логопед", img: require("@/static/uslugi/img.svg")},
        {name:"Вокал", img: require("@/static/uslugi/img.svg")},
        {name:"Каратэ", img: require("@/static/uslugi/img.svg")},
        {name:"Кубики Зайцева", img: require("@/static/uslugi/img.svg")},
        {name:"Фортепиано", img: require("@/static/uslugi/img.svg")},
        {name:"Для юных школьников", img: require("@/static/uslugi/img.svg")}
      ]
    }
  },


}
</script>

<style>

</style>