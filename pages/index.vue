<template>
  <div class="max-w-7xl">
    <banner />
    <navigation />
    <div class="flex-wrap md:flex pt-8 justify-center">
      <div class="md:w-1/2">
        <p class="text-3xl text-red-600 text-bold font-serif">Частный детский сад НЮР г.Чебоксары</p>
      </div>
      <img src="@/static/main-img.png" class="object-cover h-[500px] md:h-[300px]">
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
