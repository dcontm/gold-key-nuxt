<template>
  <div class="z-50 md:w-[600px] h-screen fixed py-8 bg-white">
    <div class="text-center text-teal-900 font-serif my-10 md:mt-8 md:mb-4 text-xl">
      <p v-if="target">Редактировать <span class="text-red-500">{{user.username}}</span></p>
      <p v-else="!target">Новый пользователь</p>
    </div>
    <div class="flex justify-center">
      <form @submit.prevent="submit" class="text-center w-80 md:w-96">
        <div v-if="formSentError" class="h-10 rounded-xl justify-center items-center flex my-4">
          <span class="text-center font-serif text-sm text-red-900 border-2 p-4 rounded-xl border-red-500 w-full">Извините, неизвестная ошибка. Повторите позже.</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="mb-3">
            <label for="user.username" class="text-center text-teal-900 font-serif mt-10 text-lg">Телефон</label>
            <input v-model.trim="$v.user.username.$model" @blur="$v.user.username.$touch()" @input="$v.user.username.$touch()"  type="text" id="user.username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="+7 900 000 00 00">
            <p v-for="error in usernameErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
          </div>
          <div class="mb-3">
            <label for="user.first_name" class="text-center text-teal-900 font-serif mt-10 text-lg">Имя</label>
            <input v-model.trim="$v.user.first_name.$model" @blur="$v.user.first_name.$touch()" @input="$v.user.first_name.$touch()"  type="text" id="user.first_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Имя">
            <p v-for="error in firstNameErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
          </div>
          <div class="mb-3">
            <label for="user.second_name" class="text-center text-teal-900 font-serif mt-10 text-lg">Фамилия</label>
            <input v-model.trim="$v.user.second_name.$model" @blur="$v.user.second_name.$touch()" @input="$v.user.second_name.$touch()"  type="text" id="user.second_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Фамилия">
            <p v-for="error in secondNameErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
          </div>
          <div class="mb-3" v-if="target">
            <label for="user.temp_password" class="text-center text-teal-900 font-serif mt-10 text-lg">Вр.пароль</label>
            <input v-model.trim="user.temp_password" type="text" id="user.temp_password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Вр.пароль">
          </div>
          <div class="mb-3" v-if="target">
            <label for="user.is_active" class="text-center text-teal-900 font-serif mt-10 text-lg">Активен</label>
            <input v-model="user.is_active"  type="checkbox" id="user.is_active" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" checked>
          </div>
          <div class="mb-3" v-if="target">
            <label for="user.is_superuser" class="text-center text-teal-900 font-serif mt-10 text-lg">Админ</label>
            <input v-model="user.is_superuser" type="checkbox" id="user.is_active" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light">
          </div>
        </div>
        <button type="submit" class="w-64 mt-8 text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">Сохранить</button>
        <button @click="close" class="w-64 my-8 text-teal-800 border-2 border-teal-600 hover:border-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-teal-600 dark:hover:border-teal-800 dark:focus:ring-teal-800">Отмена</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>

import { required, minLength, maxLength, numeric, helpers} from 'vuelidate/lib/validators'
const phoneRegex = helpers.regex('phoneRegex', /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g)

export default {
  props: ['target', 'action'],
  data () {
    return {
      user: {
        username: this.target ? this.target.username : '',
        first_name: this.target ? this.target.first_name : '',
        second_name: this.target ? this.target.second_name : '',
        temp_password: this.target ? this.target.temp_password : '',
        is_active: this.target ? this.target.is_active : true,
        is_superuser: this.target ? this.target.is_superuser : false,
      },
      formSentError:  false
    }
  },

  validations: {
    user: {
      username: {required, phoneRegex},
      first_name: {required, minLength: minLength(2), maxLength: maxLength(30)},
      second_name:  {required, minLength: minLength(2), maxLength: maxLength(30)},
    }
  },

  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.user.username.$dirty) return errors
      !this.$v.user.username.phoneRegex && errors.push('Номер в формате +7 900 000 00 00')
      !this.$v.user.username.required && errors.push('Введите номер телефона.')
      return errors
    },
    firstNameErrors () {
      const errors = []
      if (!this.$v.user.first_name.$dirty) return errors
      !this.$v.user.first_name.minLength && errors.push('Имя должно содержать не менее 2 символов')
      !this.$v.user.first_name.maxLength && errors.push('Имя должно содержать не более 30 символов')
      !this.$v.user.first_name.required && errors.push('Введите имя.')
      return errors
    },
    secondNameErrors () {
      const errors = []
      if (!this.$v.user.second_name.$dirty) return errors
      !this.$v.user.second_name.minLength && errors.push('Фамилия должна содержать не менее 2 символов')
      !this.$v.user.second_name.maxLength && errors.push('Фамилия должна содержать не более 30 символов')
      !this.$v.user.second_name.required && errors.push('Введите фамилию.')
      return errors
    },
  },  

  methods: {
    close() {
      this.$emit('getDialog')
    },

    async submit() {
      this.formSentError = false
      
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      else {
        try {
          if (this.action === "create") {
            const resp = await this.$axios.$post("/users/", this.user)
            this.$nextTick(() => { this.$v.$reset(); });
            this.$emit('updateTable')
            this.$emit('getDialog')
            
          }
          if (this.action === "update") {
            const resp = await this.$axios.$put(`/users/${this.target.id}`, this.user)
            this.$nextTick(() => { this.$v.$reset(); }); 
            this.$emit('updateTable')
            this.$emit('getDialog')
          }
        } catch(err) {
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

<style scoped>

:deep() {
  --vs-dropdown-max-height: 200px;
}

</style>
