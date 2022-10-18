<template>
  <div>
    <banner/>
    <navigation/>
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
        <span>Управление ползьзователями.</span>
    </div>
    <div class="flex justify-center items-center">
      <table class="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th v-for="title in headers" class="border border-slate-300 p-2">{{title}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users">
            <td class="border border-slate-300 p-2">{{index}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{user.username}}</td>
            <td class="border border-slate-300 p-2">{{user.first_name}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{user.second_name}}</td>
            <td class="border border-slate-300 p-2">{{user.camera}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{user.temp_password}}</td>
            <td class="border border-slate-300 p-2">{{get_status(user.is_active)}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{get_status(user.const_password)}}</td>
            <td class="border border-slate-300 p-2">{{get_status(user.is_superuser)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>   
    
</template>

<script>

import Banner from "@/components/Banner.vue"
import Navigation from "@/components/Navigation.vue"

export default {

  middleware: 'auth',

  components: {
    Navigation,
    Banner,
  },

  data () {
    return {
        users: '',
        headers:["№","Телефон", "Имя", "Фамилия",
         "Камеры", "Вр.пароль", "Активен", 
         "Пост.пароль", "Админ"
        ]
    }
  },

  methods: {
    get_status (value) {
      if (value) {
          return "Да"
      }
      return "Нет"
    }
  },

  async fetch() {
    const response = await this.$axios.$get('/users')
    this.users = response
  },
    
}
</script>