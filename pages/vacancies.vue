<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Вакансии</span>
    </div>
    <div class="text-center font-serif text-xl text-teal-900">В детскую студию «Золотой ключик» требуются:</div>
    <div class="text-center font-serif md:flex md:justify-around">
      <div v-for="vacancy in vacancies" :key="vacancy.title" class="border-2 border-red-500 md:w-1/4 m-5 p-5 rounded-3xl">
        <p class="text-red-500 text-xl font-bold">{{vacancy.title}}</p>
        <p class="text-teal-900 text-lg">Требования:</p>
        <ul>
          <li v-for="(req,index) in vacancy.requirements" :key="index" class="text-left text-teal-700 lext-base">
            <span class="font-bold text-red-500 text-lg">+</span> {{req}}
          </li>
        </ul>
        <p class="text-teal-900 text-lg">Условия:<p>
        <ul>
          <li v-for="(term,index) in vacancy.terms" :key="index" class="text-left text-teal-700 lext-base">
            <span class="font-bold text-red-500 text-lg">+</span> {{term}}
          </li>
        </ul>
        <p class="text-teal-900 text-lg">Оплата:</p>
        <p class="text-red-500 text-lg font-bold">{{vacancy.salary}}</p>
      </div>
      <div class="border-2 border-red-500 md:w-1/3 m-5 p-5 rounded-3xl">
        <p class="text-red-500 text-xl font-bold"><span class="font-bold text-red-500 text-lg">+</span> Педагоги на дополнительные занятия в вечернее время:</p>
        <p class="text-teal-900 text-base text-left"><span class="font-bold text-red-500 text-lg">+</span> Педагог по вокалу</p>
        <p class="text-teal-900 text-base text-left"><span class="font-bold text-red-500 text-lg">+</span> Педагог по занятиям подготовки детей к школе</p>
        <p class="text-teal-900 text-base text-left"><span class="font-bold text-red-500 text-lg">+</span> Хореограф по уличным танцам</p>
        <p class="text-teal-900 text-base text-left"><span class="font-bold text-red-500 text-lg">+</span> Педагог по английскому языку</p>
        <p class="text-teal-900 text-base text-left"><span class="font-bold text-red-500 text-lg">+</span> Педагог по изостудии</p>
        <p class="text-teal-900 text-base text-left"><span class="font-bold text-red-500 text-lg">+</span> Логопед</p>
        <p class="text-teal-900 text-lg mt-10">Оплата:</p>
        <p class="text-red-500 text-lg font-bold">Оговаривается индивидуально с каждым соискателем</p>
      </div>
    </div>
    <div class="text-red-500 text-lg font-bold my-5 text-center md:text-xl">
      <a href="tel:89373775850" >Телефон: +7 (937) 377-58-50</a>
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
  data () {
    return {
      vacancies: [
        {title:"Воспитатель", 
          requirements: ["Педагогическое образование", "Опыт работы не менее 3-х лет", "Ответственность и креативность", "Санитарная книжка"],
          terms: ["В группах 10 детей ", "Оформление по ТК", "График 5/2 с 7.00-18.00 или посменно", "Дружный коллектив"],
          salary: "Оклад  20 т.р. +премия по итогам работы % (до 20 т.р.)"
        },
        {title:"Младший воспитатель", 
          requirements: ["Опыт работы", "Санитарная книжка", "Ответственность и чистоплотность"],
          terms: ["В группах 10 детей ", "Оформление по ТК", "График 5/2 с 7.00-18.00", "Дружный коллектив", "Бесплатные обеды"],
          salary: "Оклад 15 т.р.+премия по итогам работы (~8 т.р.)"
        }

      ]
    }
  }


}
</script>

<style>

</style>