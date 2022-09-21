<template>
  <div>
    <header class="flex items-center h-20 justify-between">

      <div class="md:w-1/3">
        <img src="http://gold-key21.ru/wp-content/uploads/2016/03/logo-2016-cheb.jpg" class="object-contain h-20">
      </div>
      <div>
        <button class="md:hidden" @click="changeNav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-red-500 text-bold">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

    </header>
    <mobile-nav class="flex md:hidden" v-if="showNav" :showNav="showNav" />
    <dekstop-nav class="hidden md:block items-center justify-between" />
  </div>
</template>

<script>
import MobileNav from "@/components/MobileNav.vue"
import DekstopNav from "@/components/DekstopNav.vue"
export default {
    components: {
        MobileNav,
        DekstopNav
    },

    data: () => {
        return {
            showNav: false,
        }
    },

    methods: {
      changeNav () {
        this.showNav = !this.showNav
      }

    },

}
</script>

<style>

</style>