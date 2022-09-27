<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Список кружков.</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 place-items-center text-center">
      <router-link to="/uslugi" v-for="item in items" :key="item.name">
        <p class="text-teal-600 font-serif text-center text-2lg">{{item.name}}</p>
        <img :src="item.img" class="object-cover h-44 w-44">
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
        {name:"Подготовка к школе", img: require("@/static/uslugi/1-img-300x300.jpg")},
        {name:"Английский язык", img: require("@/static/uslugi/2-img-300x300.jpg")},
        {name:"Логопед", img: require("@/static/uslugi/3-img-300x300.jpg")},
        {name:"Вокал", img: require("@/static/uslugi/4-img-300x300.jpg")},
        {name:"Каратэ", img: require("@/static/uslugi/5-img-300x300.jpg")},
        {name:"Кубики Зайцева", img: require("@/static/uslugi/6-img-300x300.jpg")},
        {name:"Фортепиано", img: require("@/static/uslugi/7-img-300x300.jpg")},
        {name:"Для юных школьников", img: require("@/static/uslugi/8-img-300x300.jpg")}
      ]
    }
  },


}
</script>

<style>

</style>