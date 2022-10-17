<template>
  <div class="ralative">
    <set-password-form /> 
    <banner/>
    <navigation/>
    <set-password-form />  
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Личный кабинет</span>
    </div>
    <div class="text-center font-serif text-lg text-teal-700">{{this.$auth.user.first_name}}, добро пожаловать!</div>
    <div class="flex items-center justify-center my-10">
      <button class="md:w-2/3 text-center border-2 border-blue-500 rounded-xl font-serif text-lg text-teal-700">Подлючиться к доступным камерам...</button>
    </div>
    <div>{{this.$auth.user}}</div>


  </div>
</template>

<script>
  import Banner from "@/components/Banner.vue"
  import Navigation from "@/components/Navigation.vue"
  import FooterBar from "@/components/FooterBar.vue"
  import SetPasswordForm from "@/components/SetPasswordForm.vue"

  export default {

    components: {
      Banner,
      Navigation,
      FooterBar,
      SetPasswordForm
    },
    middleware: 'auth',
    methods: {
      async logout () {
        await this.$auth.logout()
      }
    }
  }
</script>