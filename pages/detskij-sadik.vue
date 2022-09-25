<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif mt-10">
      <span class="text-3xl text-teal-700">Детский сад</span>
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