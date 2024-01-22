<script setup>
import { register } from "swiper/element/bundle";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cart";

register();
const { cartCount } = storeToRefs(useCartStore());
const isPreloading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isPreloading.value = !isPreloading.value;
  }, 500);
});
</script>

<template>
  <div class="flex flex-col min-h-full overflow-hidden text-base">
    <header class="fixed z-30 w-full top-0 left-0">
      <div
        class="flex justify-between items-center gap-2 p-4 bg-gray-800 text-xl font-semibold text-gray-400"
      >
        <nav class="">
          <ul class="flex gap-4">
            <li
              class="hover:underline active:opacity-55 transition ease-linear"
            >
              <nuxt-link to="/" :class="$route.path === '/' ? 'text-white' : ''"
                >Главная</nuxt-link
              >
            </li>
            <li
              class="hover:underline active:opacity-55 transition ease-linear"
            >
              <nuxt-link
                to="/catalog"
                :class="$route.path === '/catalog' ? 'text-white' : ''"
                >Каталог мастера</nuxt-link
              >
            </li>
            <li
              class="hover:underline active:opacity-55 transition ease-linear"
            >
              <nuxt-link
                to="/howto"
                :class="$route.path === '/howto' ? 'text-white' : ''"
                >Как заказать</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <div class="relative flex">
          <nuxt-link to="/cart" class="mr-3">
            <svg
              width="32px"
              height="32px"
              style="stroke: #1956e3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M44 18h10v45H10V18h10z"
              ></path>
              <path
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"
              ></path>
            </svg>
            <span
              class="absolute -top-2 right-0 min-w-6 h-6 px-2 bg-slate-700 rounded-full text-white text-sm leading-[24px]"
              v-show="cartCount > 0"
              >{{ cartCount }}
            </span>
          </nuxt-link>
        </div>
      </div>
    </header>
    <main class="flex-[1_1_auto]">
      <section class="mt-24 pb-12">
        <span class="absolute top-2/4 left-2/4" v-show="isPreloading"
          >Loading...</span
        >
        <div class="max-w-[1360px] px-4 m-auto" v-show="!isPreloading">
          <slot @addToCart="addToCart" />
        </div>
      </section>
    </main>
    <footer class="bg-gray-800">
      <div class="max-w-[1200px] px-4 m-auto">
        <div
          class="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between"
        >
          <span class="text-sm sm:text-center text-gray-400"
            >© 2023
            <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a
            >. All Rights Reserved.
          </span>
          <ul
            class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
          >
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
