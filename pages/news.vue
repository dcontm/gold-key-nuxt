<template>
  <div>
    <banner />
    <navigation />
    <div class="text-center font-serif text-3xl text-teal-700 my-10">
      <span>Наши новости ...</span>
    </div>
    <div class="mx-4 md:mx-10 lg:mx-12 my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="" v-for="post in posts" :key="post.id">
        <div :id="get_post_id(post.id)"></div>
        <script type="text/javascript">
          (function() {
            console.log(window.innerWidth)
            VK.Widgets.Post(`vk_post_-43822083_{{post.id}}`, -43822083, {{post.id}}, `{{post.hash}}`);
          }());
        </script>
      </div>
    </div>
    <a class="flex justify-center" href="https://vk.com/goldkey21" target="_blank">
      <button class="text-center text-white font-serif text-bold text-2xl py-3 px-5 bg-teal-600 rounded-2xl mb-5">Ещё больше новостей в нашей группе VK</button>
    </a>
    <footer-bar />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Navigation from "@/components/Navigation.vue"
import FooterBar from "@/components/FooterBar.vue"
export default {
  components: {
    Banner,
    Navigation,
    FooterBar
  },
  head: {
    script: [
      {
        src: "https://vk.com/js/api/openapi.js?169",
      }  
    ]

  },
  data() {
    return {
      posts: [],
      group_id:"43822083"
    }
  },
  async fetch() {
    const response = await this.$axios.$get('/news')
    this.posts = response.items
  },
  methods: {
    get_post_id (id) {
      return "vk_post_-43822083_"+id
    }
  }


}
</script>

<style>

</style>