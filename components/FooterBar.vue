<template>
  <footer class="p-4 bg-gray-200 sm:p-6 dark:bg-gray-900">
      <div class="md:flex md:justify-center">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Услуги</h2>
                  <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-2">
                          <nuxt-link to="/detskij-sadik" class="hover:underline">Детский сад</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/uslugi" class="hover:underline">Кружки</nuxt-link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ссылки</h2>
                  <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-2">
                          <nuxt-link to="/news" class="hover:underline">Новости</nuxt-link>
                      </li>
                      <li class="mb-2">
                          <nuxt-link to="/vacancies" class="hover:underline">Вакансии</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/kontakty" class="hover:underline">Контакты</nuxt-link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Документы</h2>
                  <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-4">
                          <nuxt-link to="/rules" class="hover:underline">Политика обработки персональных данных</nuxt-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2012-2022 <a href="/" class="hover:underline">Детский центр "Золотой Ключик"</a> Чебоксары, Россия. <br>Контакты: <a href="mailto:gold-key21@mail.ru">gold-key21@mail.ru</a>, <a href="tel:89373775850">+7 (937) 377–58–50</a>
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://vk.com/goldkey21" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <img src="@/static/vk_black.svg">
                  <span class="sr-only">VK page</span>
              </a>
              <a href="https://www.instagram.com/detskijsadik21.ru" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <img src="@/static/instagram_black.svg">
                  <span class="sr-only">Instagram page</span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=89613471117" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <img src="@/static/whats_app_black.svg">
                  <span class="sr-only">Whats app</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <img src="@/static/telegram_black.svg">
                  <span class="sr-only">Telegramm</span>
              </a>
              <a href="viber://add?number=89613471117" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <img src="@/static/viber_black.svg">
                  <span class="sr-only">Viber</span>
              </a>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>