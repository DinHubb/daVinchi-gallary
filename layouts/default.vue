<script setup>
import { register } from "swiper/element/bundle";
import { ref, onMounted } from "vue";
register();

const router = useRouter();

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
        class="flex justify-between items-center gap-2 px-4 bg-white text-xl font-semibold"
      >
        <nav class="">
          <ul class="flex gap-4">
            <li
              class="hover:underline active:opacity-55 transition ease-linear"
            >
              <nuxt-link to="/" :class="$route.path === '/' ? 'opacity-60' : ''"
                >Главная</nuxt-link
              >
            </li>
            <li
              class="hover:underline active:opacity-55 transition ease-linear"
            >
              <nuxt-link
                to="/catalog"
                :class="$route.path === '/catalog' ? 'opacity-60' : ''"
                >Картины</nuxt-link
              >
            </li>
            <li
              class="hover:underline active:opacity-55 transition ease-linear"
            >
              <nuxt-link
                to="/howto"
                :class="$route.path === '/howto' ? 'opacity-60' : ''"
                >Как заказать</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <div>
          <a href="">
            <img
              class="w-[90px]"
              src="https://static.tildacdn.com/tild3738-3432-4337-b361-656138313662/logo.jpg"
              imgfield="img"
              alt="Che.Art"
            />
          </a>
        </div>
        <ul class="flex gap-2" aria-label="Соц. сети">
          <span class="mr-3">+ 7 (926) 342-23-39</span>
          <li>
            <a
              href="https://wa.me/79263422339"
              target="_blank"
              rel="nofollow noopener"
              aria-label="WhatsApp"
              title="WhatsApp"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.168 10C60.8239 10.004 70.8257 14.1522 78.346 21.6819C85.8676 29.2114 90.0066 39.2185 90 49.8636C89.9906 71.8252 72.1203 89.6956 50.1668 89.6956H50.1508C43.4852 89.6929 36.9338 88.0208 31.1162 84.8468L10 90.3853L15.6516 69.7437C12.1665 63.7042 10.3323 56.851 10.3349 49.8304C10.343 27.8676 28.2134 10 50.168 10V10ZM61.5376 54.7631C62.4507 55.0954 67.3433 57.5023 68.3389 58.0009C68.5313 58.0971 68.7113 58.1842 68.8784 58.265C69.5753 58.602 70.0458 58.8296 70.2462 59.1651C70.4947 59.5799 70.4947 61.5736 69.6654 63.8982C68.8359 66.2229 64.8605 68.3442 62.9478 68.63C61.2319 68.8865 59.0627 68.9928 56.6782 68.2353C55.2322 67.7767 53.3794 67.1653 51.0041 66.1392C41.6698 62.1082 35.3628 53.06 34.1747 51.3556C34.0919 51.2368 34.0341 51.1538 34.0017 51.1106L33.9981 51.1056C33.486 50.4243 29.9372 45.7022 29.9372 40.8149C29.9372 36.2325 32.1873 33.8303 33.2244 32.7232C33.2961 32.6467 33.3619 32.5763 33.4208 32.5118C34.3341 31.5149 35.412 31.2664 36.0751 31.2664C36.7385 31.2664 37.4029 31.2717 37.9826 31.301C38.0541 31.3046 38.1286 31.304 38.2056 31.3037C38.786 31.3001 39.5087 31.2957 40.2221 33.0089C40.4976 33.6707 40.9012 34.653 41.3265 35.6882C42.1818 37.7702 43.1251 40.066 43.2912 40.399C43.5397 40.8974 43.7058 41.4782 43.3736 42.1427C43.323 42.2436 43.2763 42.3387 43.2318 42.4295C42.9831 42.9364 42.7995 43.3104 42.378 43.8029C42.2125 43.9963 42.0413 44.2045 41.8703 44.4131C41.5273 44.8309 41.1842 45.2488 40.8853 45.5467C40.387 46.0425 39.8686 46.5808 40.4493 47.5777C41.0303 48.5731 43.028 51.8323 45.9867 54.472C49.1661 57.3091 51.93 58.5078 53.3318 59.1157C53.6058 59.2346 53.8279 59.3308 53.9907 59.4124C54.9849 59.9109 55.5658 59.8284 56.1465 59.1637C56.7274 58.4993 58.6347 56.2583 59.298 55.2615C59.9612 54.2646 60.6259 54.4307 61.5376 54.7631V54.7631Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/tanzwuta"
              target="_blank"
              rel="nofollow noopener"
              aria-label="Telegram"
              title="Telegram"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.1797 17.5886C83.1797 17.5886 90.5802 14.7028 89.9635 21.711C89.758 24.5968 87.9079 34.6968 86.4688 45.6214L81.5351 77.9827C81.5351 77.9827 81.124 82.7235 77.4237 83.548C73.7233 84.3724 68.173 80.6623 67.145 79.8378C66.3227 79.2195 51.7273 69.9438 46.5878 65.4092C45.1488 64.1724 43.5042 61.6989 46.7934 58.8132L68.3785 38.201C70.8454 35.7274 73.3122 29.956 63.0336 36.9642L34.2535 56.5459C34.2535 56.5459 30.9644 58.6071 24.7973 56.752L11.4351 52.6295C11.4351 52.6295 6.50135 49.5377 14.9298 46.4457C35.4871 36.7579 60.7724 26.864 83.1797 17.5886Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="tel:+7 (926)3422339"
              target="_blank"
              rel="nofollow"
              aria-label="Телефон"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M55.2328 14H52.5373C51.516 14.0868 50.5711 14.5757 49.9103 15.3591C49.2495 16.1425 48.9271 17.1563 49.0139 18.1774C49.1007 19.1985 49.5897 20.1434 50.3732 20.804C51.1567 21.4647 52.1706 21.7871 53.1919 21.7003H55.2328C61.3604 21.7003 67.2371 24.1341 71.57 28.4664C75.9029 32.7987 78.3371 38.6745 78.3371 44.8012V46.8418C78.2517 47.8575 78.5726 48.8656 79.2295 49.6451C79.8864 50.4246 80.8256 50.9118 81.8412 51H82.1493C83.1133 51.0039 84.0436 50.6461 84.7566 49.9974C85.4696 49.3487 85.9133 48.4563 86 47.4963V44.8012C86 36.6389 82.7597 28.8103 76.9908 23.0351C71.222 17.2598 63.3963 14.0102 55.2328 14ZM62.9342 44.8012C62.9342 45.8223 63.3399 46.8016 64.0621 47.5237C64.7842 48.2457 65.7637 48.6514 66.7849 48.6514C67.8062 48.6514 68.7857 48.2457 69.5078 47.5237C70.2299 46.8016 70.6356 45.8223 70.6356 44.8012C70.6356 40.7167 69.0128 36.7995 66.1243 33.9113C63.2357 31.0232 59.3179 29.4006 55.2328 29.4006C54.2115 29.4006 53.2321 29.8063 52.5099 30.5283C51.7878 31.2503 51.3821 32.2296 51.3821 33.2508C51.3821 34.2719 51.7878 35.2512 52.5099 35.9732C53.2321 36.6953 54.2115 37.1009 55.2328 37.1009C57.2753 37.1009 59.2342 37.9122 60.6785 39.3563C62.1228 40.8004 62.9342 42.759 62.9342 44.8012ZM79.9999 81.1449L80 81.1142L79.6492 69.0633C79.6687 67.7296 79.2325 66.4284 78.4119 65.3757C77.5795 64.3079 76.4029 63.5617 75.0825 63.2642L75.0117 63.2483L74.9399 63.2376C73.9223 63.0868 72.8825 62.9004 71.9312 62.6807L71.9218 62.6786L71.9125 62.6765C69.9037 62.2335 67.9266 61.6575 65.9941 60.9524L64.2912 60.3312L61.0946 67.439L61.0921 67.4445C60.8758 67.912 60.4838 68.2752 60.0011 68.4549L59.9705 68.4663L59.9403 68.4787C59.4872 68.665 58.9815 68.6737 58.5234 68.5049C51.5187 64.8597 45.1911 60.0033 40.4797 55.1855C38.1151 52.7675 36.1831 50.3851 34.7815 48.2C33.3645 45.9908 32.5603 44.0924 32.3186 42.629L32.2825 42.4106L32.1984 42.2057C32.0031 41.7301 32.0031 41.1965 32.1984 40.7208L32.2108 40.6906L32.2222 40.66C32.4025 40.1752 32.7677 39.7817 33.2376 39.5659L33.2466 39.5617L40.3527 36.2098L39.711 34.5213C39.0006 32.6521 38.4278 30.7334 37.9972 28.7805L37.9966 28.7776C37.9126 28.3997 37.8324 28.073 37.7607 27.7808C37.5831 27.0574 37.4576 26.5464 37.4576 25.9986V25.7816L37.4099 25.5699C37.1126 24.2488 36.3668 23.0716 35.2996 22.2387C34.2393 21.4112 32.9268 20.9743 31.5829 21.0012H19.9021C19.0782 20.996 18.2625 21.165 17.5083 21.497C16.7531 21.8295 16.0767 22.318 15.5234 22.9305C14.9405 23.5717 14.5071 24.3343 14.2544 25.1634C14.0031 25.9884 13.9369 26.8587 14.0606 27.7121C16.0394 42.767 22.9288 56.7477 33.6599 67.4851L33.7126 67.5378L33.7691 67.5863C37.5255 70.8103 43.9624 75.6139 51.1536 79.6231C58.2392 83.5735 66.3421 86.9162 73.4289 86.9575C74.2381 87.0556 75.0594 86.9836 75.8401 86.7454C76.6687 86.4926 77.4309 86.059 78.0718 85.4757C78.6765 84.9287 79.1604 84.2614 79.4925 83.5163C79.8251 82.77 79.998 81.9621 79.9999 81.1449Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:chertovsm@yandex.ru"
              target="_blank"
              rel="nofollow"
              aria-label="tanzwuta@gmail.com"
              title="tanzwuta@gmail.com"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M84.6275 27.4266L52.5185 49.7063C50.6833 50.9797 48.2451 50.9592 46.4316 49.6552L15.2876 27.2617C16.3799 25.8838 18.0684 25 19.9633 25H79.8257C81.7951 25 83.5416 25.9547 84.6275 27.4266ZM85.789 31.6456V69.0367C85.789 72.3301 83.1191 75 79.8257 75H19.9633C16.6699 75 14 72.3301 14 69.0367V31.4207L44.0214 53.0071C47.2543 55.3316 51.6007 55.3681 54.872 53.0982L85.789 31.6456Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/chertov.sergey?igshid=YmM0MjE2YWMzOA=="
              target="_blank"
              rel="nofollow noopener"
              aria-label="Instagram"
              title="Instagram"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.9644 10H33.04C20.3227 10 10 20.3227 10 32.9573V67.1167C10 79.6816 20.3227 90 33.04 90H66.96C79.6816 90 90 79.6816 90 67.0384V32.9616C90.0044 20.3227 79.6816 10 66.9644 10ZM29.2 50.0022C29.2 38.5083 38.5257 29.2 50.0022 29.2C61.4786 29.2 70.8 38.5083 70.8 50.0022C70.8 61.4961 61.4743 70.8 50.0022 70.8C38.5257 70.8 29.2 61.4961 29.2 50.0022ZM72.8854 31.2027C70.2079 31.2027 68.0789 29.0824 68.0789 26.4049C68.0789 23.7273 70.2035 21.6027 72.8854 21.6027C75.5586 21.6027 77.6833 23.7273 77.6833 26.4049C77.6833 29.0824 75.5586 31.2027 72.8854 31.2027Z"
                  fill="#050505"
                ></path>
                <path
                  d="M50.0022 36.4011C42.4659 36.4011 36.4011 42.4876 36.4011 50.0022C36.4011 57.5124 42.4659 63.6033 50.0022 63.6033C57.5429 63.6033 63.6033 57.5124 63.6033 50.0022C63.6033 42.492 57.4514 36.4011 50.0022 36.4011Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <main class="flex-[1_1_auto]">
      <section class="mt-24 pb-6">
        <span class="absolute top-2/4 left-2/4" v-show="isPreloading"
          >Loading...</span
        >
        <div
          class="max-w-[1200px] p-4 m-auto"
          v-if="$route.path !== '/catalog'"
          v-show="!isPreloading"
        >
          <slot />
        </div>
        <div v-else class="p-4">
          <slot />
        </div>
      </section>
    </main>
    <footer class="py-8 bg-[#171717]">
      <div class="__container">
        <ul
          class="flex justify-center items-center gap-4"
          aria-label="Соц. сети"
        >
          <li>
            <a
              class="inline-block p-2 bg-white rounded-full"
              href="https://wa.me/79263422339"
              target="_blank"
              rel="nofollow noopener"
              aria-label="WhatsApp"
              title="WhatsApp"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.168 10C60.8239 10.004 70.8257 14.1522 78.346 21.6819C85.8676 29.2114 90.0066 39.2185 90 49.8636C89.9906 71.8252 72.1203 89.6956 50.1668 89.6956H50.1508C43.4852 89.6929 36.9338 88.0208 31.1162 84.8468L10 90.3853L15.6516 69.7437C12.1665 63.7042 10.3323 56.851 10.3349 49.8304C10.343 27.8676 28.2134 10 50.168 10V10ZM61.5376 54.7631C62.4507 55.0954 67.3433 57.5023 68.3389 58.0009C68.5313 58.0971 68.7113 58.1842 68.8784 58.265C69.5753 58.602 70.0458 58.8296 70.2462 59.1651C70.4947 59.5799 70.4947 61.5736 69.6654 63.8982C68.8359 66.2229 64.8605 68.3442 62.9478 68.63C61.2319 68.8865 59.0627 68.9928 56.6782 68.2353C55.2322 67.7767 53.3794 67.1653 51.0041 66.1392C41.6698 62.1082 35.3628 53.06 34.1747 51.3556C34.0919 51.2368 34.0341 51.1538 34.0017 51.1106L33.9981 51.1056C33.486 50.4243 29.9372 45.7022 29.9372 40.8149C29.9372 36.2325 32.1873 33.8303 33.2244 32.7232C33.2961 32.6467 33.3619 32.5763 33.4208 32.5118C34.3341 31.5149 35.412 31.2664 36.0751 31.2664C36.7385 31.2664 37.4029 31.2717 37.9826 31.301C38.0541 31.3046 38.1286 31.304 38.2056 31.3037C38.786 31.3001 39.5087 31.2957 40.2221 33.0089C40.4976 33.6707 40.9012 34.653 41.3265 35.6882C42.1818 37.7702 43.1251 40.066 43.2912 40.399C43.5397 40.8974 43.7058 41.4782 43.3736 42.1427C43.323 42.2436 43.2763 42.3387 43.2318 42.4295C42.9831 42.9364 42.7995 43.3104 42.378 43.8029C42.2125 43.9963 42.0413 44.2045 41.8703 44.4131C41.5273 44.8309 41.1842 45.2488 40.8853 45.5467C40.387 46.0425 39.8686 46.5808 40.4493 47.5777C41.0303 48.5731 43.028 51.8323 45.9867 54.472C49.1661 57.3091 51.93 58.5078 53.3318 59.1157C53.6058 59.2346 53.8279 59.3308 53.9907 59.4124C54.9849 59.9109 55.5658 59.8284 56.1465 59.1637C56.7274 58.4993 58.6347 56.2583 59.298 55.2615C59.9612 54.2646 60.6259 54.4307 61.5376 54.7631V54.7631Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="inline-block p-2 bg-white rounded-full"
              href="https://t.me/tanzwuta"
              target="_blank"
              rel="nofollow noopener"
              aria-label="Telegram"
              title="Telegram"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.1797 17.5886C83.1797 17.5886 90.5802 14.7028 89.9635 21.711C89.758 24.5968 87.9079 34.6968 86.4688 45.6214L81.5351 77.9827C81.5351 77.9827 81.124 82.7235 77.4237 83.548C73.7233 84.3724 68.173 80.6623 67.145 79.8378C66.3227 79.2195 51.7273 69.9438 46.5878 65.4092C45.1488 64.1724 43.5042 61.6989 46.7934 58.8132L68.3785 38.201C70.8454 35.7274 73.3122 29.956 63.0336 36.9642L34.2535 56.5459C34.2535 56.5459 30.9644 58.6071 24.7973 56.752L11.4351 52.6295C11.4351 52.6295 6.50135 49.5377 14.9298 46.4457C35.4871 36.7579 60.7724 26.864 83.1797 17.5886Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="inline-block p-2 bg-white rounded-full"
              href="tel:+7 (926)3422339"
              target="_blank"
              rel="nofollow"
              aria-label="Телефон"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M55.2328 14H52.5373C51.516 14.0868 50.5711 14.5757 49.9103 15.3591C49.2495 16.1425 48.9271 17.1563 49.0139 18.1774C49.1007 19.1985 49.5897 20.1434 50.3732 20.804C51.1567 21.4647 52.1706 21.7871 53.1919 21.7003H55.2328C61.3604 21.7003 67.2371 24.1341 71.57 28.4664C75.9029 32.7987 78.3371 38.6745 78.3371 44.8012V46.8418C78.2517 47.8575 78.5726 48.8656 79.2295 49.6451C79.8864 50.4246 80.8256 50.9118 81.8412 51H82.1493C83.1133 51.0039 84.0436 50.6461 84.7566 49.9974C85.4696 49.3487 85.9133 48.4563 86 47.4963V44.8012C86 36.6389 82.7597 28.8103 76.9908 23.0351C71.222 17.2598 63.3963 14.0102 55.2328 14ZM62.9342 44.8012C62.9342 45.8223 63.3399 46.8016 64.0621 47.5237C64.7842 48.2457 65.7637 48.6514 66.7849 48.6514C67.8062 48.6514 68.7857 48.2457 69.5078 47.5237C70.2299 46.8016 70.6356 45.8223 70.6356 44.8012C70.6356 40.7167 69.0128 36.7995 66.1243 33.9113C63.2357 31.0232 59.3179 29.4006 55.2328 29.4006C54.2115 29.4006 53.2321 29.8063 52.5099 30.5283C51.7878 31.2503 51.3821 32.2296 51.3821 33.2508C51.3821 34.2719 51.7878 35.2512 52.5099 35.9732C53.2321 36.6953 54.2115 37.1009 55.2328 37.1009C57.2753 37.1009 59.2342 37.9122 60.6785 39.3563C62.1228 40.8004 62.9342 42.759 62.9342 44.8012ZM79.9999 81.1449L80 81.1142L79.6492 69.0633C79.6687 67.7296 79.2325 66.4284 78.4119 65.3757C77.5795 64.3079 76.4029 63.5617 75.0825 63.2642L75.0117 63.2483L74.9399 63.2376C73.9223 63.0868 72.8825 62.9004 71.9312 62.6807L71.9218 62.6786L71.9125 62.6765C69.9037 62.2335 67.9266 61.6575 65.9941 60.9524L64.2912 60.3312L61.0946 67.439L61.0921 67.4445C60.8758 67.912 60.4838 68.2752 60.0011 68.4549L59.9705 68.4663L59.9403 68.4787C59.4872 68.665 58.9815 68.6737 58.5234 68.5049C51.5187 64.8597 45.1911 60.0033 40.4797 55.1855C38.1151 52.7675 36.1831 50.3851 34.7815 48.2C33.3645 45.9908 32.5603 44.0924 32.3186 42.629L32.2825 42.4106L32.1984 42.2057C32.0031 41.7301 32.0031 41.1965 32.1984 40.7208L32.2108 40.6906L32.2222 40.66C32.4025 40.1752 32.7677 39.7817 33.2376 39.5659L33.2466 39.5617L40.3527 36.2098L39.711 34.5213C39.0006 32.6521 38.4278 30.7334 37.9972 28.7805L37.9966 28.7776C37.9126 28.3997 37.8324 28.073 37.7607 27.7808C37.5831 27.0574 37.4576 26.5464 37.4576 25.9986V25.7816L37.4099 25.5699C37.1126 24.2488 36.3668 23.0716 35.2996 22.2387C34.2393 21.4112 32.9268 20.9743 31.5829 21.0012H19.9021C19.0782 20.996 18.2625 21.165 17.5083 21.497C16.7531 21.8295 16.0767 22.318 15.5234 22.9305C14.9405 23.5717 14.5071 24.3343 14.2544 25.1634C14.0031 25.9884 13.9369 26.8587 14.0606 27.7121C16.0394 42.767 22.9288 56.7477 33.6599 67.4851L33.7126 67.5378L33.7691 67.5863C37.5255 70.8103 43.9624 75.6139 51.1536 79.6231C58.2392 83.5735 66.3421 86.9162 73.4289 86.9575C74.2381 87.0556 75.0594 86.9836 75.8401 86.7454C76.6687 86.4926 77.4309 86.059 78.0718 85.4757C78.6765 84.9287 79.1604 84.2614 79.4925 83.5163C79.8251 82.77 79.998 81.9621 79.9999 81.1449Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="inline-block p-2 bg-white rounded-full"
              href="mailto:chertovsm@yandex.ru"
              target="_blank"
              rel="nofollow"
              aria-label="tanzwuta@gmail.com"
              title="tanzwuta@gmail.com"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M84.6275 27.4266L52.5185 49.7063C50.6833 50.9797 48.2451 50.9592 46.4316 49.6552L15.2876 27.2617C16.3799 25.8838 18.0684 25 19.9633 25H79.8257C81.7951 25 83.5416 25.9547 84.6275 27.4266ZM85.789 31.6456V69.0367C85.789 72.3301 83.1191 75 79.8257 75H19.9633C16.6699 75 14 72.3301 14 69.0367V31.4207L44.0214 53.0071C47.2543 55.3316 51.6007 55.3681 54.872 53.0982L85.789 31.6456Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="inline-block p-2 bg-white rounded-full"
              href="https://instagram.com/chertov.sergey?igshid=YmM0MjE2YWMzOA=="
              target="_blank"
              rel="nofollow noopener"
              aria-label="Instagram"
              title="Instagram"
              ><svg
                role="presentation"
                width="25px"
                height="25px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.9644 10H33.04C20.3227 10 10 20.3227 10 32.9573V67.1167C10 79.6816 20.3227 90 33.04 90H66.96C79.6816 90 90 79.6816 90 67.0384V32.9616C90.0044 20.3227 79.6816 10 66.9644 10ZM29.2 50.0022C29.2 38.5083 38.5257 29.2 50.0022 29.2C61.4786 29.2 70.8 38.5083 70.8 50.0022C70.8 61.4961 61.4743 70.8 50.0022 70.8C38.5257 70.8 29.2 61.4961 29.2 50.0022ZM72.8854 31.2027C70.2079 31.2027 68.0789 29.0824 68.0789 26.4049C68.0789 23.7273 70.2035 21.6027 72.8854 21.6027C75.5586 21.6027 77.6833 23.7273 77.6833 26.4049C77.6833 29.0824 75.5586 31.2027 72.8854 31.2027Z"
                  fill="#050505"
                ></path>
                <path
                  d="M50.0022 36.4011C42.4659 36.4011 36.4011 42.4876 36.4011 50.0022C36.4011 57.5124 42.4659 63.6033 50.0022 63.6033C57.5429 63.6033 63.6033 57.5124 63.6033 50.0022C63.6033 42.492 57.4514 36.4011 50.0022 36.4011Z"
                  fill="#050505"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>