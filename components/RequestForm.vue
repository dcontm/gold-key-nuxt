<template>
  <form @submit.prevent="submit">
    <div v-if="formSent" class="h-10 rounded-xl justify-center items-center flex bg-green-600 my-4">
      <span class="text-center font-serif text-lg text-white font-bold">Заявка принята!</span>
    </div>
    <div v-if="formSentError" class="h-10 rounded-xl justify-center items-center flex bg-red-600 my-4">
      <span class="text-center font-serif text-base text-white font-bold">Ошибка на стороне сервера!</span>
    </div>
    <div class="mb-3">
      <input v-model.trim="$v.name.$model" @blur="$v.name.$touch()" @input="$v.name.$touch()"  type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Ваше имя">
      <p v-for="error in nameErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
    </div>
    <div class="mb-3">
      <input v-model.trim="$v.phoneNumber.$model" @blur="$v.phoneNumber.$touch()" @input="$v.phoneNumber.$touch()" type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Ваш телефон">
      <p v-for="error in phoneNumberErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
    </div>
    
    <div class="flex items-start mb-3">
      <div class="flex items-center h-5">
        <input v-model="$v.checkbox.$model" @blur="$v.checkbox.$touch()" @input="$v.checkbox.$touch()" id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
         <p v-for="error in checkboxErrors" class="text-red-600  border-red-600 text-xs mx-2 my-2 rounded-md px-2">{{error}}</p>
      </div>
      <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Согласие<nuxt-link to="/rules" class="text-blue-600 hover:underline dark:text-blue-500"> на обработку персональных данных</nuxt-link></label>
    </div>
    <button type="submit" class="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">Отправить</button>
  </form>
</template>

<script>

import { required, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'

export default {
  props: ["target"],
  data () {
    return {
      formSent: false,
      formSentError: false,
      name: '',
      phoneNumber: '',
      checkbox: false,
    }
  },

  validations: {
    name: {required, minLength: minLength(4), maxLength: maxLength(30)},
    phoneNumber: {required, minLength: minLength(6), maxLength: maxLength(11)},
    checkbox: {checked (val) {return val}}
  },


  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength && errors.push('Имя должно содержать не менее 3 символов')
      !this.$v.name.maxLength && errors.push('Имя должно содержать не более 30 символов')
      !this.$v.name.required && errors.push('Введите имя.')
      return errors
    },
     phoneNumberErrors () {
      const errors = []
      if (!this.$v.phoneNumber.$dirty) return errors
      !this.$v.phoneNumber.minLength && errors.push('Номер должен содержать не менее 6 символов')
      !this.$v.phoneNumber.maxLength && errors.push('Номер должен сожержать не более из 11 символов')
      !this.$v.phoneNumber.required && errors.push('Введите номер телефона.')
      return errors
    },
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('Примите правила.')
      return errors
    },
  },

  methods: {
     async submit() {
      this.formSentError = false

      if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        else {
          console.log(this.target)
          const formData = {
            target: this.target,
            name: this.name,
            phone: this.phoneNumber
          }
          
          try {
            const resp = await this.$axios.$post("/notify",formData)
            this.formSent = true
            this.$nextTick(() => { this.$v.$reset(); }); //очистка формы при удачной отправке
            setTimeout( () => {
              this.formSent = false
              this.name = ''
              this.phoneNumber = ''
              this.checkbox = false
              if (this.$store.state.requestForm.requestForm) {
                this.$store.commit('requestForm/changeRequestFormStatus')
              }
            }, 1500)

          } catch(err) {
            console.log(err)
            this.formSentError = true
            setTimeout( ()=> {
              this.formSentError = false
            }, 3000)

          }

        }
    }
  }
  
}
</script>

<style>

</style>