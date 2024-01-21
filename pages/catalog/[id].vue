<script setup>
import { ref, computed } from "vue";
import data from "~/static/data.json";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const plugins = [lgThumbnail, lgZoom];

const route = useRoute();
const { id } = route.params;

const filteredData = computed(() => {
  return data.filter((el) => el.id == id);
});
</script>

<template>
  <div>
    <div
      class="flex justify-center gap-12"
      v-for="item in filteredData"
      :key="item.id"
    >
      <lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
      >
        <div class="relative w-[560px] h-[560px]" :data-src="item.url">
          <img
            class="w-full h-full object-cover absolute top-0 left-0 cursor-zoom-in"
            :src="item.url"
            :alt="item.alt"
          />
        </div>
      </lightgallery>
      <div class="flex flex-col w-[40%]">
        <span class="inline-block mb-4">Артикул: {{ item.id }}</span>
        <h2 class="text-2xl mb-10">{{ item.title }}</h2>
        <p class="mb-10">{{ item.text }}</p>
        <ul class="flex-[1_1_auto] text-zinc-600">
          <p class="mb-2">Теги:</p>
          <li>ВхШ: {{ item.size }}</li>
          <li>время года: {{ item.weather }}</li>
          <li>локация: {{ item.location }}</li>
          <li>природа: {{ item.natural }}</li>
        </ul>
        <button
          class="self-start text-white bg-gray-800 hover:bg-blue-800 active:opacity-55 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center me-2"
        >
          <svg
            class="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path
              d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
            />
          </svg>
          Купить
        </button>
      </div>
    </div>
  </div>
</template>
