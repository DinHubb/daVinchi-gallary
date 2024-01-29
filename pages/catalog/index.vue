<script setup>
import { ref, computed } from "vue";
import { register } from "swiper/element/bundle";
import data from "~/static/data.json";
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/activites";

register();

// const data = [
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/tild3033-3964-4437-b735-323437393166/IMG_3082.jpg",
//     title: "Апрельский вечер. Лёд на Лесном озере",
//     text: "холст/масло 30см x 45см 2023 г.",
//     size: "30см x 45см",
//     alt: "photo",
//     isIntro: false,
//     price: "12 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/tild3538-3161-4364-b539-373662383630/IMG_3486.jpg",
//     title: "Солнечный день на реке Дубна. Последний лёд",
//     text: "холст/масло 35см x 45см 2022 г. Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "16 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/tild6631-6231-4166-b363-633237333565/IMG_7701.jpg",
//     title: "Весенний вечер на краю леса",
//     text: "30 x 40 см, 2021 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/tild3563-3930-4932-b937-383331313934/128.jpg",
//     title: "Осенний вечер",
//     text: "холст/масло 30см x 45см 2022 г. Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "13 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/tild3338-3038-4864-b533-386362343737/25.jpg",
//     title: "Солнечный зимний вечер у леса",
//     text: "холст/масло 30см x 40см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "11 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3266-3030-4436-a164-633530396262/86702141.jpg",
//     title: "Вечер в Манжероке",
//     text: "холст на картоне/масло 18см x 24см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "9 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor6461-3639-4464-b934-643831346663/22224290.jpg",
//     title: "На берегу Катуни",
//     text: "холст/масло 25см x 35см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3038-3033-4033-a262-363537346665/77590283.jpg",
//     title: "Катунь. Че-Чкыш",
//     text: "холст на картоне/масло 18см x 24см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "8 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor6333-3335-4235-a333-343562623836/59489466.jpg",
//     title: "Майский вечер на Клязьме",
//     text: "30 x 40 см, 2021 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "15 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3261-3134-4366-a439-316637376434/13392805.jpg",
//     title: "На перевале Чике-Таман",
//     text: "холст на картоне/масло 18смx24см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "9 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3138-3162-4061-a265-363431313839/75561936.jpg",
//     title: "Май в Тихвине",
//     text: "холст/масло 40см x 50см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "15 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3763-3730-4565-a530-633537353234/31350734.jpg",
//     title: "Катунь у ворот Сартакпая",
//     text: "холст на картоне/масло 18см x 24см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "9 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor6335-3136-4564-b263-343930353331/55773486.jpg",
//     title: "Ранняя весна. Яуза",
//     text: "холст/масло 30см x 40см 2023 г.",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3531-6262-4763-a335-303136643330/94651416.jpg",
//     title: "Березы перед лесом",
//     text: "30 x 40 см, 2020 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3837-3333-4439-b763-616336323562/99468776.jpg",
//     title: "Весенний лес",
//     text: "30 x 40 см, 2020 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "12 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3832-6137-4465-a331-373838633933/98891636.jpg",
//     title: "Солнечное майское утро на Яузе",
//     text: "35 x 45 см, 2020 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "12 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3039-3366-4762-b437-666561316633/26648571.jpg",
//     title: "Летний вечер в Тихвине",
//     text: "30 x 40 см, 2020 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3665-3436-4565-b034-383034323330/29842483.jpg",
//     title: "Осень на Лесном озере",
//     text: "30 x 40 см, 2020 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor3636-6161-4532-b038-393034616663/48096370.jpg",
//     title: "Конец октября. Клязьма",
//     text: "30 x 45 см, 2020 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "12 000",
//     isFavorite: false,
//   },
//   {
//     id: Date.now(),
//     url: "https://static.tildacdn.com/stor6238-3030-4461-b936-646564316632/60884641.jpg",
//     title: "Морозное утро",
//     text: "30 x 40 см, 2021 год Чертов Сергей",
//     alt: "photo",
//     isIntro: false,
//     price: "10 000",
//     isFavorite: false,
//   },
// ];

const { toggleFavorite, favoriteCollects } = useCartStore();

const search = ref("");
search.value.toLowerCase();
const selectedSeason = ref("все");
const selectedSize = ref("");
const selectedLocation = ref("");
const selectedNature = ref("");
const isOpenFilter = ref(false);

const filteredData = computed(() =>
  data.filter((el) => {
    if (search.value) {
      return (
        el.title.includes(search.value) ||
        el.title.toLowerCase().includes(search.value) ||
        el.text.toLowerCase().includes(search.value) ||
        el.price.toLowerCase().replace(/\s/g, "").includes(search.value.trim())
      );
    }

    if (
      selectedSeason.value === "все" ||
      el.weather.toLowerCase() === selectedSeason.value
    ) {
      return el;
    }

    if (el.size.replace(/\D/g, "") === selectedSize.value) {
      return el;
    }

    if (el.location.toLowerCase() === selectedLocation.value) {
      return el;
    }

    if (el.natural.toLowerCase() === selectedNature.value) {
      return el;
    }
  })
);

const filterBySeason = (evt) => {
  const { textContent } = evt.target;
  selectedSeason.value = textContent.toLowerCase().trim();
  selectedSize.value = "";
  selectedLocation.value = "";
  selectedNature.value = "";
  return;
};

const filterBySize = (evt) => {
  const { textContent } = evt.target;
  selectedSize.value = textContent.replace(/\D/g, "");
  selectedSeason.value = "";
  selectedLocation.value = "";
  selectedNature.value = "";
  return;
};

const filterLocation = (evt) => {
  const { textContent } = evt.target;
  selectedLocation.value = textContent.toLowerCase().trim();
  selectedSeason.value = "";
  selectedSize.value = "";
  selectedNature.value = "";
  return;
};

const filterNature = (evt) => {
  const { textContent } = evt.target;
  selectedNature.value = textContent.toLowerCase().trim();
  selectedSeason.value = "";
  selectedSize.value = "";
  selectedLocation.value = "";
  return;
};

const filteredDataByNew = computed(() => {
  return data.filter((el) => el.isNew);
});

const handleFavorite = (product) => {
  toggleFavorite(product);
};

const isInCollects = (productId) =>
  favoriteCollects.some((p) => p.id === productId);

const toggleFilterMenu = () => {
  isOpenFilter.value = !isOpenFilter.value;
};
</script>
<template>
  <div class="flex flex-col">
    <div class="self-center w-[90%]">
      <p class="mb-6 text-center text-2xl">Новые товары</p>
      <swiper-container
        slides-per-view="2"
        speed="500"
        css-mode="true"
        pagination="true"
        :breakpoints="{
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide
          class="relative px-2 pb-10"
          v-for="item in filteredDataByNew"
          :key="item.id"
          lazy="true"
        >
          <button
            class="absolute top-3 right-4 bg-white/55 p-1 rounded-full z-10"
            @click="handleFavorite(item)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                v-if="isInCollects(item.id)"
                fill-rule="red"
                clip-rule="evenodd"
                d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                fill="red"
              />
              <path
                v-else
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                fill="#1C274C"
              />
            </svg>
          </button>
          <nuxt-link :to="`/catalog/${item.id}`" class="flex flex-col h-full">
            <div class="relative p-[0_0_100%_0] overflow-hidden">
              <img
                :src="item.url"
                :alt="item.alt"
                class="w-full h-auto object-cover absolute top-0 left-0"
                loading="lazy"
              />
            </div>
            <div class="p-2">
              <strong class="mb-4">{{ item.title }}</strong> <br />
              <span class="text-sm">{{ item.text }}</span>
            </div>
          </nuxt-link>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between items-center text-center lg:justify-end">
        <button
          class="self-start lg:hidden max-lg:visible"
          @click="toggleFilterMenu"
        >
          {{ isOpenFilter ? "Закрыть" : "Фильтр" }}
        </button>
        <div class="relative self-end flex items-center mb-6 w-2/5">
          <input
            class="border-2 active:border-gray-800 rounded pl-3 pr-10 py-1 z-20 bg-white/10 w-full"
            placeholder="поиск"
            type="text"
            v-model="search"
          />
          <svg
            class="absolute right-3"
            width="18px"
            height="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 88 88"
          >
            <path
              stroke="blue"
              fill="#757575"
              d="M85 31.1c-.5-8.7-4.4-16.6-10.9-22.3C67.6 3 59.3 0 50.6.6c-8.7.5-16.7 4.4-22.5 11-11.2 12.7-10.7 31.7.6 43.9l-5.3 6.1-2.5-2.2-17.8 20 9 8.1 17.8-20.2-2.1-1.8 5.3-6.1c5.8 4.2 12.6 6.3 19.3 6.3 9 0 18-3.7 24.4-10.9 5.9-6.6 8.8-15 8.2-23.7zM72.4 50.8c-9.7 10.9-26.5 11.9-37.6 2.3-10.9-9.8-11.9-26.6-2.3-37.6 4.7-5.4 11.3-8.5 18.4-8.9h1.6c6.5 0 12.7 2.4 17.6 6.8 5.3 4.7 8.5 11.1 8.9 18.2.5 7-1.9 13.8-6.6 19.2z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex">
        <div
          :class="[
            'text-nowrap pr-6 max-lg:absolute right-0 bg-white max-lg:z-20 p-4 px-10',
            isOpenFilter ? 'max-lg:visible' : 'max-lg:hidden',
          ]"
        >
          <ul class="flex flex-col gap-4 text-zinc-600">
            <li>
              <ul>
                <li>
                  <button
                    :class="
                      selectedSeason === 'все' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySeason"
                  >
                    Все
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSeason === 'весна' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySeason"
                  >
                    Весна
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSeason === 'лето' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySeason"
                  >
                    Лето
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSeason === 'осень' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySeason"
                  >
                    Осень
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSeason === 'зима' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySeason"
                  >
                    Зима
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <strong class="inline-block mb-2 text-black">ВхШ</strong>
              <ul>
                <li>
                  <button
                    :class="
                      selectedSize === '1824' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    18х24см
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSize === '2535' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    25см х 35см
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSize === '2540' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    25х40см
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSize === '3040' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    30см х 40см
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSize === '3545' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    35х45х
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSize === '3045' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    30х45см
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedSize === '2535' ? 'font-bold text-black' : ''
                    "
                    @click="filterBySize"
                  >
                    40см х 50см
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <strong class="inline-block mb-2 text-black">локация</strong>
              <ul>
                <li>
                  <button
                    :class="
                      selectedLocation === 'дубна' ? 'font-bold text-black' : ''
                    "
                    @click="filterLocation"
                  >
                    Дубна
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'катунь'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Катунь
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'клязьма'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Клязьма
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'лесное озеро'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Лесное озеро
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'манжерок'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Манжерок
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'сартакпая'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Сартакпая
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'тихвин'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Тихвин
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'че-чкыш'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Че-Чкыш
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'чике-таман'
                        ? 'font-bold text-black'
                        : ''
                    "
                    @click="filterLocation"
                  >
                    Чике-Таман
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedLocation === 'яуза' ? 'font-bold text-black' : ''
                    "
                    @click="filterLocation"
                  >
                    Яуза
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <strong class="inline-block mb-2 text-black">природа</strong>
              <ul>
                <li>
                  <button
                    :class="
                      selectedNature === 'озеро' ? 'font-bold text-black' : ''
                    "
                    @click="filterNature"
                  >
                    озеро
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedNature === 'лес' ? 'font-bold text-black' : ''
                    "
                    @click="filterNature"
                  >
                    лес
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedNature === 'лёд' ? 'font-bold text-black' : ''
                    "
                    @click="filterNature"
                  >
                    лёд
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedNature === 'река' ? 'font-bold text-black' : ''
                    "
                    @click="filterNature"
                  >
                    река
                  </button>
                </li>
                <li>
                  <button
                    :class="
                      selectedNature === 'горы' ? 'font-bold text-black' : ''
                    "
                    @click="filterNature"
                  >
                    горы
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="self-start grid gap-4 grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2"
        >
          <div
            class="relative transition duration-300 hover:scale-105 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
            v-for="item in filteredData"
            :key="item.id"
          >
            <button
              class="absolute top-3 right-4 bg-white/55 p-1 rounded-full z-10"
              @click="handleFavorite(item)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  v-if="isInCollects(item.id)"
                  fill-rule="red"
                  clip-rule="evenodd"
                  d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                  fill="red"
                />
                <path
                  v-else
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                  fill="#1C274C"
                />
              </svg>
            </button>
            <nuxt-link :to="`/catalog/${item.id}`" class="flex flex-col h-full">
              <div class="relative p-[0_0_100%_0] overflow-hidden">
                <img
                  :src="item.url"
                  :alt="item.alt"
                  class="w-full h-auto object-cover absolute top-0 left-0"
                  loading="lazy"
                />
              </div>
              <div class="flex-[1_1_auto] p-2">
                <strong class="mb-4">{{ item.title }}</strong> <br />
                <span class="text-sm">{{ item.text }}</span>
              </div>
              <div class="px-2 pb-4">
                <span class="">{{ item.price }}р</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
