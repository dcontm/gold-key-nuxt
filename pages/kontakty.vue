<template>
  <div>
    <banner />
    <navigation />
    <div></div>
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