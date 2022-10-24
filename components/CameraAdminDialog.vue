<template>
  <div class="z-50 md:w-[600px] h-screen fixed py-8 bg-white">
    <div class="text-center text-teal-900 font-serif my-10 md:mt-8 md:mb-4 text-xl">
      <p v-if="target">Редактировать <span class="text-red-500">{{camera.title}}</span></p>
      <p v-else="!target">Добавить</p>
    </div>
    <div class="flex justify-center">
      <form @submit.prevent="submit" class="text-center w-80 md:w-96">
        <div v-if="formSentError" class="h-10 rounded-xl justify-center items-center flex my-4">
          <span class="text-center font-serif text-sm text-red-900 border-2 p-4 rounded-xl border-red-500 w-full">Извините, неизвестная ошибка. Повторите позже.</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="mb-3">
            <label for="camera.title" class="text-center text-teal-900 font-serif mt-10 text-lg">Название</label>
            <input v-model.trim="$v.camera.title.$model" @blur="$v.camera.title.$touch()" @input="$v.camera.title.$touch()"  type="text" id="camera.title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Название">
            <p v-for="error in titleErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
          </div>
          <div class="mb-3">
            <label for="camera.description" class="text-center text-teal-900 font-serif mt-10 text-lg">Описание</label>
            <input v-model.trim="$v.camera.description.$model" @blur="$v.camera.description.$touch()" @input="$v.camera.description.$touch()"  type="text" id="camera.description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light" placeholder="Описание">
            <p v-for="error in descriptionErrors" class="text-red-600  text-xs border-red-600  mt-1 rounded-md px-2">{{error}}</p>
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

import { required} from 'vuelidate/lib/validators'

export default {
  props: ['target', 'action'],
  data () {
    return {
      camera: {
        title: this.target ? this.target.title : '',
        description: this.target ? this.target.description : '',
      },
      formSentError:  false
    }
  },

  validations: {
    camera: {
      title: {required},
      description: {required},
    }
  },

  computed: {
    titleErrors() {
      const errors = []
      if (!this.$v.camera.title.$dirty) return errors
      !this.$v.camera.title.required && errors.push('Введите название')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.camera.description.$dirty) return errors
      !this.$v.camera.description.required && errors.push('Введите описание.')
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
            const resp = await this.$axios.$post("/cameras/", this.camera)
            this.$nextTick(() => { this.$v.$reset(); });
            this.$emit('updateTable')
            this.$emit('getDialog')
            
          }
          if (this.action === "update") {
            const resp = await this.$axios.$put(`/cameras/${this.target.id}`, this.camera)
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
