<script setup>
import { register } from "swiper/element/bundle";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/activites";

register();
const { cartCount, favoriteCount } = storeToRefs(useCartStore());
const { favoriteProducts } = useCartStore();
const isPreloading = ref(true);
const isMenuFavOpen = ref(false);

onMounted(() => {
  setTimeout(() => {
    isPreloading.value = !isPreloading.value;
  }, 500);
});

const toggleMenuFav = () => {
  isMenuFavOpen.value = !isMenuFavOpen;
};
</script>

<template>
  <div class="flex flex-col min-h-full overflow-hidden text-base">
    <header class="fixed z-30 w-full top-0 left-0">
      <div
        class="flex justify-between items-center gap-2 p-4 bg-gray-800 text-xl font-semibold text-gray-400 max-sm:text-sm"
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
        <div class="flex items-center gap-8">
          <button class="relative" @click="toggleMenuFav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.463 6.02421 11.4664 6.02765 11.4698 6.03106L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM13.4698 8.03034C13.7627 8.32318 14.2376 8.32309 14.5304 8.03014C14.8233 7.7372 14.8232 7.26232 14.5302 6.96948L13.4698 8.03034ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219ZM11.4698 6.03106L13.4698 8.03034L14.5302 6.96948L12.5302 4.97021L11.4698 6.03106Z"
                fill="#1956e3"
                stroke="#1956e3"
              />
            </svg>
            <span
              class="absolute -top-2 -right-3 min-w-6 h-6 px-2 bg-slate-700 rounded-full text-white text-sm leading-[24px]"
              v-show="favoriteCount > 0"
              >{{ favoriteCount }}
            </span>
          </button>
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
                  stroke-width="3"
                  stroke-miterlimit="10"
                  d="M44 18h10v45H10V18h10z"
                ></path>
                <path
                  fill="none"
                  stroke-width="4"
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
        <!-- <div class="fixed right-0 top-0 flex bg-white w-[40%] h-full">
          <div>
            <button>
              <svg
                role="presentation"
                class="t1002__wishlistwin-close-icon"
                width="23px"
                height="23px"
                viewBox="0 0 23 23"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="#000"
                  fill-rule="evenodd"
                >
                  <rect
                    transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                    x="10.3137085"
                    y="-3.6862915"
                    width="2"
                    height="30"
                  ></rect>
                  <rect
                    transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                    x="10.3137085"
                    y="-3.6862915"
                    width="2"
                    height="30"
                  ></rect>
                </g>
              </svg>
            </button>
            <h3 class="pb-10 border-b-2 border-black">Избранное:</h3>
            <ul>
              <li v-if="item in favoriteProducts">
                <div>
                  <img :src="item.url" :alt="item.alt" />
                </div>
                <div>
                  <p>{{ item.title }}</p>
                  <span>{{ item.id }}</span>
                  <span>{{ item.staticPrice }}</span>
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.5001 6H3.5"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.5 11L10 16"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.5 11L14 16"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                      stroke="#1C274C"
                      stroke-width="1.5"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div> -->
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
      <div class="max-w-[1200px] p-4 m-auto">
        <div
          class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between max-sm:text-sm"
        >
          <span class="text-sm sm:text-center text-gray-400"
            >© 2023
            <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a
            >. All Rights Reserved.
          </span>
          <ul
            class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 max-sm:text-sm"
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
~/store/activites
