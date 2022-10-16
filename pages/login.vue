<template>
  <div>
    <button class="flex justify-start m-5" @click="$router.go(-1)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-red-500 hover:text-red-100">
        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
      </svg>
      <span class="text-red-500 text-bold text-2xl mx-2 font-serif hover:text-red-100">Назад</span>
    </button>
    <div class="flex justify-center">
        <img src="@/static/logo-gold-key.jpg" class="w-64 object-cover">
    </div>
    <div class="text-center text-teal-900 font-serif my-10 md:mt-8 md:mb-4 text-2xl">Вход в личный кабинет</div>
    <div class="flex justify-center">
      <form @submit.prevent="submit" class="text-center w-80 md:w-96">
        <div v-if="formSentError" class="h-10 rounded-xl justify-center items-center flex my-4">
          <span class="text-center font-serif text-sm text-red-900 border-2 p-4 rounded-xl border-red-500 w-full">Неправильная пара логин/пароль</span>
        </div>
        <div class="mb-3">
          <label for="username" class="text-center text-teal-900 font-serif mt-10 text-lg">Логин</label>
          <input v-model.trim="$v.username.$model" @blur="$v.username.$touch()" @input="$v.username.$touch()"  type="text" id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="+7 900 000 00 00">
          <p v-for="error in usernameErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
        </div>
        <div class="mb-3">
          <label for="password" class="text-left text-teal-900 font-serif mt-10 text-lg">Пароль</label>
          <input v-model.trim="$v.password.$model" @blur="$v.password.$touch()" @input="$v.password.$touch()" type="password" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Пароль">
          <p v-for="error in passwordError" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
        </div>
        <div @click="forgotPassword" class="text-right text-teal-900 text-sm underline">Забыли пароль?</div>
        <div v-if="forgotPopover" class="h-10 rounded-xl justify-center items-center flex my-5">
          <span class="text-center font-serif text-sm text-blue-900 border-2 p-4 rounded-xl border-blue-500">Для восстановления доступа обратитесь к администратору.</span>
        </div>
        <button type="submit" class="w-64 my-8 text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>

import { required, minLength, maxLength, helpers} from 'vuelidate/lib/validators'
const phoneRegex = helpers.regex('phoneRegex', /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g)

export default {
  auth: 'guest',
  data () {
    return {
      forgotPopover: false,
      formSentError: false,
      username: '',
      password: '',

    }
  },

  validations: {
    username: {required, phoneRegex},
    password: {required, minLength: minLength(6)},
  },


  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.phoneRegex && errors.push('Номер в формате +7 900 000 00 00')
      !this.$v.username.required && errors.push('Введите номер телефона в качестве логина.')
      return errors
    },
     passwordError () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Пароль должен содержать не менее 6 символов')
      !this.$v.password.required && errors.push('Введите пароль.')
      return errors
    },
  },

  methods: {
     forgotPassword () {
        this.forgotPopover = !this.forgotPopover
     },

     async submit() {
      this.formSentError = false

      if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        else {
          const form = new FormData()
          form.append("username", this.username)
          form.append("password", this.password)
          
          try {
            let response = await this.$auth.loginWith('local', {data: form})
            this.formSent = true
            } catch(err) {
                console.log(err)
                this.formSentError = true
                setTimeout( ()=> {
                this.password = ''
                this.$nextTick(() => { this.$v.$reset(); });
                this.formSentError = false
                }, 2000)
            }

        }
    }
  },
  beforeCreate() {
    if (this.$auth.loggedIn) {
      this.$router.push('/dashboard')
    }
  }
  
}
</script>

<style>

</style>
