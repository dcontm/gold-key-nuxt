<template>
  <div class="my-10 mx-5 md:flex justify-around">
    <div class="md:w-1/2">
      <carousel :per-page="1" :paginationSize="18" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true">
          <slide v-for="(image, index) in gallery" :key="index">
            <img :src="image.uri" class="object-cover w-full">
          </slide>
      </carousel>
    </div>
    <div class="md:w-1/3 border-red-500 border-2 rounded-3xl mt-10 md:mt-1 p-5 items-center h-96">
      <p class="font-serif text-teal-900 text-xl text-center my-5">Оставте заявку и мы вам перезвоним!</p>
      <request-form />
    </div>
  </div>
</template>

<script>
import RequestForm from '~/components/RequestForm.vue'
export default {
  components: {
    RequestForm   
  },
  props: ["gallery"],
}
</script>

<style>

</style>