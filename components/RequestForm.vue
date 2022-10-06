<template>
  <form @submit.prevent="submit">
    <div v-if="formSent" class="h-10 rounded-xl justify-center items-center flex bg-green-600 my-4">
      <span class="text-center font-serif text-lg text-white font-bold">Заявка принята!</span>
    </div>
    <div v-if="formSentError" class="h-10 rounded-xl justify-center items-center flex bg-red-600 my-4">
      <span class="text-center font-serif text-lg text-white font-bold">Ошибка на стороне сервера!</span>
    </div>
    <div class="mb-3">
      <input v-model="$v.name.$model" @blur="$v.name.$touch()" @input="$v.name.$touch()" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Ваше имя">
      <p v-for="error in nameErrors" class="text-red-600 border-2 border-red-600  mt-1 rounded-lg px-2">{{error}}</p>
    </div>
    <div class="mb-3">
      <input v-model="$v.phoneNumber.$model" @blur="$v.phoneNumber.$touch()" @input="$v.phoneNumber.$touch()" type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Ваш телефон">
      <p v-for="error in phoneNumberErrors" class="text-red-600 border-2 border-red-600  mt-1 rounded-lg px-2">{{error}}</p>
    </div>
    
    <div class="flex items-start mb-3">
      <div class="flex items-center h-5">
        <input v-model="checked" id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
      </div>
      <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Согласие<nuxt-link to="/rules" class="text-blue-600 hover:underline dark:text-blue-500"> на обработку персональных данных</nuxt-link></label>
    </div>
    <button type="submit" class="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">Отправить</button>
  </form>
</template>

<script>

import { required, minLength} from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      formSent: false,
      formSentError: false,
      name: '',
      phoneNumber: '',
      checked: false
    }
  },

  validations: {
    name: {required, minLength: minLength(4)},
    phoneNumber: {required, minLength: minLength(6)}
  },


  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength && errors.push('Логин должен содержать не менее 4 символов')
      !this.$v.name.required && errors.push('Введите Логин.')
      return errors
    },
     phoneNumberErrors () {
      const errors = []
      if (!this.$v.phoneNumber.$dirty) return errors
      !this.$v.phoneNumber.minLength && errors.push('Пароль должен содержать не менее 6 символов')
      !this.$v.phoneNumber.required && errors.push('Введите пароль.')
      return errors
    },
  },

  methods: {
    submit() {
      this.formSentError = false
      this.formSent = true
      this.name = ''
      this.phoneNumber = ''
      this.checked = false

      setTimeout( () => {
        this.formSent = false
        if (this.$store.state.requestForm.requestForm) {
          this.$store.commit('requestForm/changeRequestFormStatus')
        }
      }, 1500)
    }
  }
  
}
</script>

<style>

</style>