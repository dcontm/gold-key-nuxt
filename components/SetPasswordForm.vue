<template>
  <div v-if="!$auth.user.const_password" class="z-50 w-full h-screen fixed -mt-[180px] py-8 bg-white">
    <button class="flex justify-start m-5" @click="logout">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-red-500 hover:text-red-100">
        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
      </svg>
      <span class="text-red-500 text-bold text-2xl mx-2 font-serif hover:text-red-100">Назад</span>
    </button>
    <div class="flex justify-center">
        <img src="@/static/logo-gold-key.jpg" class="w-64 object-cover">
    </div>
    <div class="text-center text-teal-900 font-serif my-10 md:mt-8 md:mb-4 text-2xl">Пожалуйста, установите постоянный пароль.</div>
    <div class="flex justify-center">
      <form @submit.prevent="submit" class="text-center w-80 md:w-96">
        <div v-if="formSentError" class="h-10 rounded-xl justify-center items-center flex my-4">
          <span class="text-center font-serif text-sm text-red-900 border-2 p-4 rounded-xl border-red-500 w-full">Извините, неизвестная ошибка. Повторите позже.</span>
        </div>
        <div v-if="formSent" class="h-10 rounded-xl justify-center items-center flex my-5">
          <span class="text-center font-serif text-sm text-green-900 border-2 p-4 rounded-xl border-green-500 w-full">Пароль успешно установлен.</span>
        </div>
        <div class="mb-3">
          <label for="password.password" class="text-center text-teal-900 font-serif mt-10 text-lg">Пароль</label>
          <input v-model.trim="$v.password.password.$model" @blur="$v.password.password.$touch()" @input="$v.password.password.$touch()"  type="password" id="password.password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="******">
          <p v-for="error in passwordErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
        </div>
        <div class="mb-3">
          <label for="password.confirm" class="text-left text-teal-900 font-serif mt-10 text-lg">Подтверждение пароля</label>
          <input v-model.trim="$v.password.confirm.$model" @blur="$v.password.confirm.$touch()" @input="$v.password.confirm.$touch()" type="password" id="password.confirm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="******">
          <p v-for="error in passwordConfirmErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
        </div>
        <button type="submit" class="w-64 my-8 text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">Сохранить</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>

import { required, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      password: {
        password: null,
        confirm: null
      },
      formSent: false,
      formSentError:  false
    }
  },

  validations: {
    password: {
      password : {required, minLength: minLength(6)},
      confirm : {required, sameAs: sameAs(vm => {return vm.password || "";})}
    }
  },

  computed: {
    passwordErrors () {
      const errors = []
      if (!this.$v.password.password.$dirty) return errors
      !this.$v.password.password.minLength && errors.push('Пароль должен содержать не менее 6 символов')
      !this.$v.password.password.required && errors.push('Введите пароль.')
      return errors
    },
    passwordConfirmErrors () {
      const errors = []
      if (!this.$v.password.confirm.$dirty) return errors
      !this.$v.password.confirm.sameAs && errors.push('Пароли не совпадают.')
      !this.$v.password.confirm.required && errors.push('Повторите пароль.')
      return errors
    }
  },  

  methods: {
  
    async logout () {
        await this.$auth.logout()
    },
  
    async submit() {
      this.formSentError = false
      
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      else {
        try {
          const resp = await this.$axios.$post("/users/set_password/", this.password.password)
          this.formSent = true
          this.$nextTick(() => { this.$v.$reset(); }); //очистка формы при удачной отправке
          setTimeout( () => {
            this.formSent = false
            this.password.password = ''
            this.password.confirm = ''
            this.$auth.fetchUser()
          }, 1500)
        } catch(err) {
          this.password.password = ''
          this.password.confirm = ''
          this.$nextTick(() => { this.$v.$reset(); });
          this.formSentError = true
          setTimeout( ()=> {
            this.formSentError = false
          }, 2000)
        }
      }
    }
  }  
}
</script>

<style>

</style>
