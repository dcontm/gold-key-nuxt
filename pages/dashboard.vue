<template>
  <div>
    <banner/>
    <navigation/>  
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Личный кабинет</span>
    </div>
    <div>{{this.$auth.user}}</div>
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
    middleware: 'auth',
    methods: {
      async logout () {
        await this.$auth.logout()
      }
    }
  }
</script>