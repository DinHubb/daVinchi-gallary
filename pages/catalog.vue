<script setup>
import { ref, computed } from "vue";
const data = [
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/tild3033-3964-4437-b735-323437393166/IMG_3082.jpg",
    title: "Апрельский вечер. Лёд на Лесном озере",
    text: "холст/масло 30см x 45см 2023 г.",
    size: "30см x 45см",
    alt: "photo",
    isIntro: false,
    price: "12 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/tild3538-3161-4364-b539-373662383630/IMG_3486.jpg",
    title: "Солнечный день на реке Дубна. Последний лёд",
    text: "холст/масло 35см x 45см 2022 г. Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "16 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/tild6631-6231-4166-b363-633237333565/IMG_7701.jpg",
    title: "Весенний вечер на краю леса",
    text: "30 x 40 см, 2021 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/tild3563-3930-4932-b937-383331313934/128.jpg",
    title: "Осенний вечер",
    text: "холст/масло 30см x 45см 2022 г. Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "13 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/tild3338-3038-4864-b533-386362343737/25.jpg",
    title: "Солнечный зимний вечер у леса",
    text: "холст/масло 30см x 40см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "11 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3266-3030-4436-a164-633530396262/86702141.jpg",
    title: "Вечер в Манжероке",
    text: "холст на картоне/масло 18см x 24см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "9 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor6461-3639-4464-b934-643831346663/22224290.jpg",
    title: "На берегу Катуни",
    text: "холст/масло 25см x 35см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3038-3033-4033-a262-363537346665/77590283.jpg",
    title: "Катунь. Че-Чкыш",
    text: "холст на картоне/масло 18см x 24см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "8 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor6333-3335-4235-a333-343562623836/59489466.jpg",
    title: "Майский вечер на Клязьме",
    text: "30 x 40 см, 2021 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "15 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3261-3134-4366-a439-316637376434/13392805.jpg",
    title: "На перевале Чике-Таман",
    text: "холст на картоне/масло 18смx24см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "9 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3138-3162-4061-a265-363431313839/75561936.jpg",
    title: "Май в Тихвине",
    text: "холст/масло 40см x 50см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "15 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3763-3730-4565-a530-633537353234/31350734.jpg",
    title: "Катунь у ворот Сартакпая",
    text: "холст на картоне/масло 18см x 24см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "9 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor6335-3136-4564-b263-343930353331/55773486.jpg",
    title: "Ранняя весна. Яуза",
    text: "холст/масло 30см x 40см 2023 г.",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3531-6262-4763-a335-303136643330/94651416.jpg",
    title: "Березы перед лесом",
    text: "30 x 40 см, 2020 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3837-3333-4439-b763-616336323562/99468776.jpg",
    title: "Весенний лес",
    text: "30 x 40 см, 2020 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "12 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3832-6137-4465-a331-373838633933/98891636.jpg",
    title: "Солнечное майское утро на Яузе",
    text: "35 x 45 см, 2020 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "12 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3039-3366-4762-b437-666561316633/26648571.jpg",
    title: "Летний вечер в Тихвине",
    text: "30 x 40 см, 2020 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3665-3436-4565-b034-383034323330/29842483.jpg",
    title: "Осень на Лесном озере",
    text: "30 x 40 см, 2020 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor3636-6161-4532-b038-393034616663/48096370.jpg",
    title: "Конец октября. Клязьма",
    text: "30 x 45 см, 2020 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "12 000",
    isFavorite: false,
  },
  {
    id: Date.now(),
    url: "https://static.tildacdn.com/stor6238-3030-4461-b936-646564316632/60884641.jpg",
    title: "Морозное утро",
    text: "30 x 40 см, 2021 год Чертов Сергей",
    alt: "photo",
    isIntro: false,
    price: "10 000",
    isFavorite: false,
  },
];

const search = ref("");
search.value.toLowerCase();
const selectedSeason = ref("all");
const selectedSize = ref("");
const selectedLocation = ref("");
const selectedNature = ref("");

const filteredData = computed(() =>
  data.filter((el) => {
    if (search.value) {
      return (
        el.title.toLowerCase().includes(search.value) ||
        el.text.toLowerCase().includes(search.value) ||
        el.price.toLowerCase().replace(/\s/g, "").includes(search.value.trim())
      );
    }

    if (selectedSeason.value) {
      return (
        selectedSeason.value === "all" ||
        el.title.toLowerCase().includes(selectedSeason.value)
      );
    }

    if (selectedSize.value) {
      return el.text.replace(/\D/g, "").includes(selectedSize.value);
    }

    if (selectedLocation.value) {
      return el.title.toLowerCase().includes(selectedLocation.value);
    }

    if (selectedNature.value) {
      return el.title.toLowerCase().includes(selectedNature.value);
    }
  })
);

const filterBySeason = (season) => {
  selectedSeason.value = season.toLowerCase();
  selectedSize.value = "";
  selectedLocation.value = "";
  return;
};

const filterBySize = (size) => {
  selectedSize.value = size;
  selectedSeason.value = "";
  selectedLocation.value = "";
  return;
};

const filterLocation = (evt) => {
  const { textContent } = evt.target;
  selectedLocation.value = textContent
    .toLowerCase()
    .replace(/\s/g, "")
    .slice(0, -1);
  selectedLocation.value === "лесноеозер"
    ? (selectedLocation.value = "лесном озере")
    : "";
  selectedSeason.value = "";
  selectedSize.value = "";
  return;
};

const filterNature = (evt) => {
  const { textContent } = evt.target;
  selectedNature.value = textContent
    .toLowerCase()
    .replace(/\s/g, "")
    .slice(0, -1);
  selectedNature.value === "ле" ? (selectedNature.value = "лес") : "";
  selectedSeason.value = "";
  selectedSize.value = "";
  selectedLocation.value = "";
  return;
};
</script>

<template>
  <div class="flex justify-end mb-6">
    <div class="relative flex items-center">
      <input
        class="border-2 rounded px-3 py-1 z-20 bg-white/10"
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
          fill="#757575"
          d="M85 31.1c-.5-8.7-4.4-16.6-10.9-22.3C67.6 3 59.3 0 50.6.6c-8.7.5-16.7 4.4-22.5 11-11.2 12.7-10.7 31.7.6 43.9l-5.3 6.1-2.5-2.2-17.8 20 9 8.1 17.8-20.2-2.1-1.8 5.3-6.1c5.8 4.2 12.6 6.3 19.3 6.3 9 0 18-3.7 24.4-10.9 5.9-6.6 8.8-15 8.2-23.7zM72.4 50.8c-9.7 10.9-26.5 11.9-37.6 2.3-10.9-9.8-11.9-26.6-2.3-37.6 4.7-5.4 11.3-8.5 18.4-8.9h1.6c6.5 0 12.7 2.4 17.6 6.8 5.3 4.7 8.5 11.1 8.9 18.2.5 7-1.9 13.8-6.6 19.2z"
        ></path>
      </svg>
    </div>
  </div>
  <div class="flex gap-6">
    <div class="w-[15%]">
      <ul class="flex flex-col gap-4 text-zinc-600">
        <li>
          <ul>
            <li>
              <button
                :class="selectedSeason === 'all' ? 'font-bold text-black' : ''"
                @click="filterBySeason('all')"
              >
                Все
              </button>
            </li>
            <li>
              <button
                :class="selectedSeason === 'вес' ? 'font-bold text-black' : ''"
                @click="filterBySeason('вес')"
              >
                Весна
              </button>
            </li>
            <li>
              <button
                :class="selectedSeason === 'лет' ? 'font-bold text-black' : ''"
                @click="filterBySeason('лет')"
              >
                Лето
              </button>
            </li>
            <li>
              <button
                :class="selectedSeason === 'осен' ? 'font-bold text-black' : ''"
                @click="filterBySeason('осен')"
              >
                Осень
              </button>
            </li>
            <li>
              <button
                :class="selectedSeason === 'зим' ? 'font-bold text-black' : ''"
                @click="filterBySeason('зим')"
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
                :class="selectedSize === '1824' ? 'font-bold text-black' : ''"
                @click="filterBySize('1824')"
              >
                18х24см
              </button>
            </li>
            <li>
              <button
                :class="selectedSize === '2535' ? 'font-bold text-black' : ''"
                @click="filterBySize('2535')"
              >
                25см х 35см
              </button>
            </li>
            <li>
              <button
                :class="selectedSize === '2540' ? 'font-bold text-black' : ''"
                @click="filterBySize('2540')"
              >
                25х40см
              </button>
            </li>
            <li>
              <button
                :class="selectedSize === '3040' ? 'font-bold text-black' : ''"
                @click="filterBySize('3040')"
              >
                30см х 40см
              </button>
            </li>
            <li>
              <button
                :class="selectedSize === '3545' ? 'font-bold text-black' : ''"
                @click="filterBySize('3545')"
              >
                35х45х
              </button>
            </li>
            <li>
              <button
                :class="selectedSize === '3045' ? 'font-bold text-black' : ''"
                @click="filterBySize('3045')"
              >
                30х45см
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
                  selectedLocation === 'дубн' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Дубна
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'катун' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Катунь
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'клязьм' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Клязьма
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'лесном озере'
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
                  selectedLocation === 'манжеро' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Манжерок
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'сартакпа' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Сартакпая
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'тихви' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Тихвин
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'че-чкы' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Че-Чкыш
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'чике-тама' ? 'font-bold text-black' : ''
                "
                @click="filterLocation"
              >
                Чике-Таман
              </button>
            </li>
            <li>
              <button
                :class="
                  selectedLocation === 'яуз' ? 'font-bold text-black' : ''
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
                :class="selectedNature === 'озер' ? 'font-bold text-black' : ''"
                @click="filterNature"
              >
                озеро
              </button>
            </li>
            <li>
              <button
                :class="selectedNature === 'лес' ? 'font-bold text-black' : ''"
                @click="filterNature"
              >
                лес
              </button>
            </li>
            <li>
              <button
                :class="selectedNature === 'лё' ? 'font-bold text-black' : ''"
                @click="filterNature"
              >
                лёд
              </button>
            </li>
            <li>
              <button
                :class="selectedNature === 'рек' ? 'font-bold text-black' : ''"
                @click="filterNature"
              >
                река
              </button>
            </li>
            <li>
              <button
                :class="selectedNature === 'гор' ? 'font-bold text-black' : ''"
                @click="filterNature"
              >
                горы
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="w-[85%]">
      <div class="grid gap-4 grid-cols-4">
        <div
          class="relative transition duration-300 hover:scale-105"
          v-for="item in filteredData"
          :key="item.id"
        >
          <a href="" class="flex flex-col h-full">
            <div class="relative p-[0_0_100%_0] overflow-hidden">
              <img
                :src="item.url"
                :alt="item.alt"
                class="w-full h-auto object-cover absolute top-0 left-0"
                loading="lazy"
              />
            </div>
            <div class="flex-[1_1_auto] py-4">
              <strong class="mb-4">{{ item.title }}</strong> <br />
              <span class="text-sm">{{ item.text }}</span>
            </div>
            <div class="">
              <span class="">{{ item.price }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
