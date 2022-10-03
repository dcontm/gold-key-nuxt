<template>
  <form @submit.prevent="submit">
    <div v-if="formSent" class="h-10 rounded-3xl justify-center items-center flex bg-green-600 my-4">
      <span class="text-center font-serif text-lg text-white font-bold">Заявка принята!</span>
    </div>
    <div class="mb-3">
      <input v-model="name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Ваше имя" required="">
    </div>
    <div class="mb-3">
      <input v-model="phoneNumber" type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Ваш телефон" required="">
    </div>
    <div class="flex items-start mb-3">
      <div class="flex items-center h-5">
        <input id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="Нужно заолнить">
      </div>
      <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Согласие<nuxt-link to="/rules" class="text-blue-600 hover:underline dark:text-blue-500"> на обработку персональных данных</nuxt-link></label>
    </div>
    <button type="submit" class="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">Отправить</button>
  </form>
</template>

<script>

export default {
  data () {
    return {
      formSent: false,
      name: '',
      phoneNumber: ''
    }
  },
  methods: {
    submit() {
      this.formSent = true
      this.name = ''
      this.phoneNumber = ''
      setTimeout( () => {
        this.formSent = false
        if (this.$store.state.requestForm.requestForm) {
          this.$store.commit('requestForm/changeRequestFormStatus')
        }
      }, 2500)
    }
  }
  
}
</script>

<style>

</style>