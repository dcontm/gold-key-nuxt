<template>
  <div>
    <div class="flex justify-center" v-if="dialog">
      <user-admin-dialog :target="target" :camera="camera" :action="action" @getDialog="getDialog" @updateTable="updateTable"/>
    </div>
    <banner/>
    <navigation/>
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
        <span>Управление ползьзователями.</span>
    </div>
    <div class="flex text-teal-700 font-serif" @click="getDialog('create')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <button>Добавить</button>
    </div>
    <div class="flex justify-center items-center">
      <table class="border-collapse border border-slate-400 overflow-x-scroll block">
        <thead>
          <tr>
            <th v-for="title in headers" class="border border-slate-300 p-2">{{title}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users">
            <td class="border border-slate-300 p-2" @click="getDialog('update',user)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </td>
            <td class="border border-slate-300 p-2">{{index}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{user.username}}</td>
            <td class="border border-slate-300 p-2">{{user.first_name}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{user.second_name}}</td>
            <td class="border border-slate-300 p-2" @click="setTarget(user)">
              <v-select multiple v-model="user.camera" :options="camera" label="title" @option:selecting="bindCamera" @option:deselecting="unbindCamera"/>
            </td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{user.temp_password}}</td>
            <td class="border border-slate-300 p-2">{{getStatus(user.is_active)}}</td>
            <td class="border border-slate-300 p-2 bg-gray-200">{{getStatus(user.const_password)}}</td>
            <td class="border border-slate-300 p-2">{{getStatus(user.is_superuser)}}</td>
            <td class="border border-slate-300 p-2" @click="deleteUser(user.id)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>   
    
</template>

<script>
import Banner from "@/components/Banner.vue"
import Navigation from "@/components/Navigation.vue"
import UserAdminDialog from "@/components/UserAdminDialog.vue"

export default {

  middleware: 'auth',

  components: {
    Navigation,
    Banner,
    UserAdminDialog
  },

  data () {
    return {
      users: '',
      headers:['',"№","Телефон", "Имя", "Фамилия",
        "Камеры", "Вр.пароль", "Активен", 
        "Пост.пароль", "Админ"
      ],
      dialog: false,
      target: '',
      action: '',
      camera: []
    }
  },

  methods: {
    getStatus (value) {
      if (value) {
          return "Да"
      }
      return "Нет"
    },
    getCameras (arr) {
      let new_arr = arr.map((obj) => obj.title)
      return new_arr
    },
    getDialog(action, obj) {
      this.action = action
      this.target = obj
      this.dialog = !this.dialog
    },
    async updateTable() {
      const response_user = await this.$axios.$get('/users')
      this.users = response_user
    },
    async deleteUser(id) {
      await this.$axios.delete(`/users/${id}`)
      const response_user = await this.$axios.$get('/users')
      this.users = response_user
    },
    setTarget(user) {
      this.target = user
    },
    async bindCamera(camera) {
      if (this.target && !this.target.camera.includes(camera)) {
        await this.$axios.$post(`/users/${this.target.id}/bind_camera`, JSON.stringify(camera.id))
      }
    },
    async unbindCamera(camera) {
      console.log(this.target)
      if (this.target) {
        await this.$axios.$post(`/users/${this.target.id}/unbind_camera`, JSON.stringify(camera.id))
      }
    }
  },

  async fetch() {
    const response_user = await this.$axios.$get('/users')
    const response_camera = await this.$axios.$get('/cameras')
    this.users = response_user
    this.camera = response_camera
  },

    
}
</script>