<template>
  <nav class="w-full p-2 bg-transparent h-20 md:px-4">
    <div class="flex items-center justify-between">

      <!-- Header logo -->
      <div>
        <img src="@/static/logo-gold-key.jpg" class="object-cover h-20">
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg 
            class="h-8 w-8 fill-current text-red-500"
            fill="none" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2" 
            viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-4 md:text-base lg:text-lg font-sans font-medium text-teal-500 hover:text-teal-700">
          <li><NuxtLink to="/" class="active hover:border-b-2 hover:border-yellow-500 hover:pb-1">Главная</NuxtLink></li>
          <li><NuxtLink to="/detskij-sadik" class="hover:border-b-2 hover:border-yellow-500 hover:pb-1">Сад</NuxtLink></li>
          <li><NuxtLink to="/uslugi" class="hover:border-b-2 hover:border-yellow-500 hover:pb-1">Кружки</NuxtLink></li>
          <li><NuxtLink to="/news" class="hover:border-b-2 hover:border-yellow-500 hover:pb-1">Новости</NuxtLink></li>
          <li><NuxtLink to="/kontakty" class="hover:border-b-2 hover:border-yellow-500 hover:pb-1">Контакты</NuxtLink></li>
          <li v-if="!this.$auth.loggedIn"><NuxtLink to="/login" class="cta bg-teal-500 hover:bg-teal-700 hover:border-2 hover:border-yellow-500 px-3 py-2 rounded-full text-white font-semibold">Войти</NuxtLink></li>
          <li v-if="this.$auth.loggedIn" @click="openSubMenu" class="relative flex border-2 px-2 border-yellow-500  rounded-full hover:border-blue-400">
            <svg v-if="!active" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <svg v-if="active" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            <ul v-if="active" class="absolute -ml-20 mt-8 md:text-base lg:text-lg font-sans font-medium text-teal-500 hover:text-teal-700">
              <li><NuxtLink to="/dashboard" class="hover:border-b-2 hover:border-yellow-500">Кабинет</NuxtLink></li>
              <li v-if="this.$auth.user.is_superuser"><NuxtLink to="/admin/users" class="hover:border-b-2 hover:border-yellow-500">Админ</NuxtLink></li>
              <li @click="logout" class="hover:border-b-2 hover:border-yellow-500">Выйти</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg 
              class="w-6 h-6 text-red-500"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
        </span>

        <ul class="divide-y font-sans  text-teal-500 hover:text-teal-700 mb-10">
          <li><NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Главная</NuxtLink></li>
          <li><NuxtLink to="/detskij-sadik" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Сад</NuxtLink></li>
          <li><NuxtLink to="/uslugi" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Кружки</NuxtLink></li>
          <li><NuxtLink to="/news" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Новости</NuxtLink></li>
          <li><NuxtLink to="/kontakty" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Контакты</NuxtLink></li>
          <li v-if="!this.$auth.loggedIn"><NuxtLink to="/login" @click="isOpen = false" class="my-8 w-full text-center font-semibold cta inline-block bg-teal-500 hover:bg-teal-700 hover:border-2  hover:border-yellow-500 px-3 py-2 rounded-full text-white">Войти</NuxtLink></li>
          <div v-if="this.$auth.loggedIn" class="divide-y">
            <li><NuxtLink to="/dashboard" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Кабинет</NuxtLink></li>
            <li v-if="this.$auth.user.is_superuser"><NuxtLink to="/admin/users" @click="isOpen = false" class="my-4 inline-block hover:border-b-2 hover:border-yellow-500 hover:pb-1">Админ</NuxtLink></li>
            <li @click="logout"><NuxtLink to="#" @click="isOpen = false" class="my-4 inline-block border-2 border-blue-400 px-3 rounded-full hover:border-yellow-500 text-teal-900">Выйти</NuxtLink></li>
          </div>
        </ul>

        <div class="follow">
          <p class="font-sans text-teal-500 text-sm">Мы в соцсетях:</p>
          <div class="social flex space-x-5 mt-4 ">
            <a href="https://vk.com/goldkey21">
              <img src="@/static/vk-logo.svg" class="w-10 h-10">
            </a>
            <a href="https://www.instagram.com/detskijsadik21.ru">
              <img src="@/static/instagram-logo.svg" class="w-10 h-10">
            </a>
          </div>
        </div>

      </aside>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      active: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    openSubMenu() {
      this.active = !this.active;   
    },
    async logout () {
      await this.$auth.logout()
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>