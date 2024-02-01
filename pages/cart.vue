<script setup>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import { storeToRefs } from "pinia";
import IconClose from "~/components/icons/IconClose.vue";
import IconRemove from "~/components/icons/IconRemove.vue";
import { useCartStore } from "~/store/activites";

const { cartOrders } = storeToRefs(useCartStore());
const { toggleCart, loadCart, removeCart } = useCartStore();
const phoneNumber = ref("tj +992");
const regexForPhone = /[a-zA-Z]/g;
const countryCode = ref("FR");
const isFormPayOpen = ref(false);
const userEmail = ref("");
const userName = ref("");
const radioDel = ref(null);
const radioPay = ref(null);
const isWrongForm = ref(false);

onMounted(() => {
  loadCart();
});

const handleRemoveOrder = (order) => {
  toggleCart(order);
};

const changeInputQtyCart = (order) => {
  if (order.quantity > order.maxQuantity || order.quantity < 1) return null;

  let totalPrice = parseFloat(order.staticPrice * order.quantity);

  let totalPriceToStr = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (order.price = totalPriceToStr);
};

const handleIncPrice = (order) => {
  if (order.maxQuantity <= order.quantity) return null;

  order.quantity++;

  let totalPrice = parseFloat(order.staticPrice * order.quantity);

  let totalPriceToStr = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (order.price = totalPriceToStr);
};

const handleDecPrice = (order) => {
  if (order.quantity < 2) return handleRemoveOrder(order);

  order.quantity--;

  let totalPrice = parseFloat(
    order.price.replaceAll(" ", "") - order.staticPrice
  );

  let totalPriceToStr = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (order.price = totalPriceToStr);
};

const handleFormPay = () => {
  if (cartOrders.value.length < 1) return (isFormPayOpen.value = false);
  return (isFormPayOpen.value = !isFormPayOpen.value);
};

const submitFormPay = () => {
  phoneNumber.value = phoneNumber.value.replace(/tj\s/gi, "");
  if (
    userName.value.length < 3 ||
    userEmail.value.length < 2 ||
    phoneNumber.value.length != 13 ||
    regexForPhone.test(phoneNumber.value) ||
    radioDel.value === false ||
    radioPay.value === false
  ) {
    alert("Ошибка при заполнении формы!");
    return (isWrongForm.value = true);
  }

  alert("Покупка прошла успешно!");
  removeCart();
  loadCart();
  radioDel.value = false;
  radioPay.value = false;
  return handleFormPay();
};
</script>

<template>
  <div class="relative flex flex-col justify-center items-center">
    <div class="self-start w-full">
      <h1
        class="text-3xl font-semibold text-center p-10 max-md:text-2xl max-sm:text-lg"
      >
        Оформите покупку в два клика
      </h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table
          class="w-full text-left rtl:text-right text-gray-500 bg-[#f1f1f1c7] border"
        >
          <thead class="text-base text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">Артикул</th>
              <th scope="col" class="px-6 py-3">Описание</th>
              <th scope="col" class="px-6 py-3">Кол-во</th>
              <th scope="col" colspan="2" class="px-6 py-3">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center bg-white border-b"
              v-if="cartOrders.length < 1"
            >
              <td colspan="5" class="py-12">
                Перейдите в каталог чтобы выбрать товар
              </td>
            </tr>
            <tr
              v-else
              class="bg-white border-b"
              v-if="cartOrders"
              v-for="order in cartOrders"
              :key="order.id"
            >
              <th scope="row" class="px-6 py-4 font-normal whitespace-nowrap">
                <span>#{{ order.id }}</span>
                <div class="relative w-40 h-48 mt-2 overflow-hidden">
                  <img
                    class="object-cover absolute top-0 left-0"
                    :src="order.url"
                    :alt="order.url"
                  />
                </div>
              </th>
              <td
                class="px-6 py-4 text-xl text-black font-medium max-sm:text-lg"
              >
                {{ order.title }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-black bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                    type="button"
                    @click="handleDecPrice(order)"
                  >
                    <icon-remove />
                  </button>
                  <div class="ms-3">
                    <input
                      type="number"
                      max="4"
                      min="1"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-black text-sm rounded-lg focus:border-blue-500 block px-2.5 py-1"
                      v-model="order.quantity"
                      @change.key.enter="changeInputQtyCart(order)"
                    />
                  </div>
                  <button
                    class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                    type="button"
                    @click="handleIncPrice(order)"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4 text-black font-medium text-nowrap">
                {{ order.price }}р
              </td>
              <td class="px-6 py-4 text-center">
                <button class="mt-2 min-w-7" @click="handleRemoveOrder(order)">
                  <img
                    width="26px"
                    height="26px"
                    src="https://www.svgrepo.com/show/525134/trash-bin-trash.svg"
                    alt="icon"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-end py-10 border-t-2">
        <button
          class="text-white bg-gray-800 hover:bg-blue-800 active:opacity-55 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center mr-4 max-sm:mr-0 max-sm:py-3 max-sm:px-6"
          @click="handleFormPay"
        >
          Заполнить форму
        </button>
      </div>
    </div>
    <form
      class="fixed top-32 flex flex-col items-start overflow-auto rounded-xl w-2/3 hover:scale-105 transition-all duration-300 p-6 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] bg-white z-50 max-lg:w-full max-lg:h-full max-lg:top-0 max-lg:rounded-none max-lg:hover:scale-100"
      v-if="isFormPayOpen"
      @submit.prevent="submitFormPay"
    >
      <button type="button" class="self-end pb-6" @click="handleFormPay">
        <icon-close />
      </button>
      <div
        class="self-center flex gap-10 mb-4 w-full max-lg:mb-8 max-sm:flex-col"
      >
        <div class="flex flex-col flex-1">
          <label class="mb-2" for="name">Имя и Фамилия</label>
          <input
            :class="[
              'border px-2 py-2 mb-4 rounded-lg w-full bg-gray-50',
              isWrongForm ? 'border-red-600' : '',
            ]"
            id="name"
            type="text"
            placeholder="введите своё имя..."
            v-model.trim="userName"
          />
          <label class="mb-2" for="email">Email</label>
          <input
            :class="[
              'mb-4 border px-2 py-2 rounded-lg w-full bg-gray-50',
              isWrongForm ? 'border-red-600' : '',
            ]"
            id="email"
            type="email"
            placeholder="example@gmal.com"
            v-model.trim="userEmail"
          />
          <label class="mb-2" for="phone">Номер телефона</label>
          <input
            :class="[
              'border px-2 py-2 rounded-lg w-full bg-gray-50',
              isWrongForm ? 'border-red-600' : '',
            ]"
            type="tel"
            id="phone"
            placeholder="введите номер телефона"
            v-model.trim="phoneNumber"
          />
        </div>
        <div class="flex flex-col flex-1">
          <h5 :class="['mb-2', isWrongForm ? 'text-red-600' : '']">
            Доставка (стоимость уточняется при согласовании)
          </h5>
          <ul class="flex flex-col gap-2 mb-4">
            <li>
              <input
                class="mr-2 cursor-pointer"
                type="radio"
                id="radio1"
                name="radio-delivery"
                @change="() => (radioDel = true)"
              />
              <label class="cursor-pointer" for="radio1">
                По Москве и МО курьером Yandex.Go
              </label>
            </li>
            <li>
              <input
                class="'mr-2 cursor-pointer"
                type="radio"
                id="radio2"
                name="radio-delivery"
                @change="() => (radioDel = true)"
              />
              <label class="cursor-pointer" for="radio2">
                Самовывоз из г.Мытищи
              </label>
            </li>
            <li>
              <input
                class="mr-2 cursor-pointer"
                type="radio"
                id="radio3"
                name="radio-delivery"
                @change="() => (radioDel = true)"
              />
              <label class="cursor-pointer" for="radio3">
                По России почта России
              </label>
            </li>
            <li>
              <input
                class="mr-2 cursor-pointer"
                type="radio"
                id="radio4"
                name="radio-delivery"
                @change="() => (radioDel = true)"
              />
              <label class="cursor-pointer" for="radio4">
                По России СДЭК
              </label>
            </li>
            <li>
              <input
                class="mr-2 cursor-pointer"
                type="radio"
                id="radio5"
                name="radio-delivery"
                @change="() => (radioDel = true)"
              />
              <label class="cursor-pointer" for="radio5">
                Выберу при согласовании
              </label>
            </li>
          </ul>
          <h5 :class="['mb-2', isWrongForm ? 'text-red-600' : '']">
            Способ оплаты
          </h5>
          <ul class="flex flex-col gap-2 mb-4">
            <li>
              <input
                class="mr-2 cursor-pointer"
                type="radio"
                id="radio6"
                name="radio-pay"
                @change="() => (radioPay = true)"
              />
              <label class="cursor-pointer" for="radio6">
                Оплата через перевод после согласования
              </label>
            </li>
            <li>
              <input
                class="mr-2 cursor-pointer"
                type="radio"
                id="radio7"
                name="radio-pay"
                @change="() => (radioPay = true)"
              />
              <label class="cursor-pointer" for="radio7">
                Оплата наличными при самовывозе
              </label>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        class="self-center text-white bg-gray-800 hover:bg-blue-800 active:opacity-55 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center max-sm:py-3 max-sm:px-6"
      >
        Оформить покупку
      </button>
    </form>
  </div>
</template>
