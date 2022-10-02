<template>
  <div class="relative">
    <div class="max-w-7xl h-20 justify-around items-center font-sans text-teal-500 text-xs flex md:text-sm">
      <div>
        <div class="flex py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <a href="tel:89373775850">+7(937)377-48-50</a>
        </div>
        <button @click="getRequestForm" class="border-red-500 border-dashed border-2 rounded-full hover:border-solid px-4 py-1">Заказать звонок</button>
      </div>
      <div>
        <p class="py-2">г.Чебоксары ул.Хузангая 22Д </p>
        <p class="text-teal-300">пн-вс 7:00-20.00 (МСК) </p>
      </div>
    </div>

    <div v-if="requestFormWidget" class="w-full h-screen bg-purple-100 z-[999999] absolute -mt-[80px] flex items-center justify-center">
      <div class="w-80 flex border-2 border-red-500 rounded-3xl">
        <div class="m-10">
          <p class="text-2xl text-center text-red-500 font-serif mb-5">Оставьте заявку и мы вам перезвоним!</p>
          <request-form/>
        </div>
        <svg @click="getRequestForm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-red-500 text-bold mr-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import RequestForm from './RequestForm.vue'

export default {

  components: {
    RequestForm
  },

  data() {
    return {
      requestFormWidget: false
    }
  },

  methods: {
    getRequestForm() {
      this.requestFormWidget = !this.requestFormWidget

    }
  }

}
</script>

<style>

</style>