<script setup>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import { useCartStore } from "~/store/activites";
import { ref, onMounted, computed } from "vue";

const { toggleCart, cartOrders } = useCartStore();
const phoneNumber = ref();
const regexForPhone = /[a-zA-Z]/g;
const countryCode = ref("FR");
const isFormPayOpen = ref(false);
const userEmail = ref("");
const userName = ref("");
const radioDel = ref(false);
const radioPay = ref(false);
const isWrongForm = ref(false);

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
  if (order.quantity < 2) return null;

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
  if (cartOrders.length < 1) return null;
  return (isFormPayOpen.value = !isFormPayOpen.value);
};

const submitFormPay = () => {
  const dataIdPhoneInput = computed(() => {
    if (isFormPayOpen.value) {
      return document
        .querySelectorAll("[data-v-e9e7fe2d]")[10]
        .classList.contains("maz-text-danger-600");
    }
  });

  if (
    userName.value.length < 3 ||
    userEmail.value.length < 2 ||
    phoneNumber.value == undefined ||
    dataIdPhoneInput.value ||
    regexForPhone.test(phoneNumber.value) ||
    radioDel.value === false ||
    radioPay.value === false
  ) {
    return (isWrongForm.value = true);
  }
  alert("Покупка прошла успешно!");
};
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-3xl font-semibold text-center p-10">
      Оформите покупку в два клика
    </h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
      <table
        class="w-full text-left rtl:text-right text-gray-500 bg-[#f1f1f1c7]"
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
            <th colspan="5" class="py-12">
              Перейдите в каталог чтобы выбрать товар
            </th>
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
            <td class="px-6 py-4 text-xl text-black font-medium">
              {{ order.title }}
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <button
                  class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-black bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                  type="button"
                  @click="handleDecPrice(order)"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
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
        class="text-white bg-gray-800 hover:bg-blue-800 active:opacity-55 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center mr-4"
        @click="handleFormPay"
      >
        Заполнить форму
      </button>
    </div>
    <form
      class="flex flex-col items-start border-t-2 pt-10"
      v-if="isFormPayOpen"
      @submit.prevent="submitFormPay"
    >
      <div class="self-center flex flex-wrap gap-10">
        <div class="flex flex-col">
          <label class="mb-2" for="name">Имя и Фамилия</label>
          <input
            :class="[
              'border px-2 py-2 mb-4 rounded-lg',
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
              'mb-4 border px-2 py-2 rounded-lg',
              isWrongForm ? 'border-red-600' : '',
            ]"
            id="email"
            type="email"
            placeholder="example@gmal.com"
            v-model.trim="userEmail"
          />
          <label class="mb-2" for="phone">Номер телефона</label>
          <MazPhoneNumberInput
            v-model.trim="phoneNumber"
            v-model:country-code="countryCode"
            show-code-on-list
          />
          <h5>Комментарий (необязательно)</h5>
          <textarea
            name="Комментарий необязательно"
            :class="['text-black border border-black p-4 mb-6']"
            rows="3"
            cols="40"
          ></textarea>
        </div>
        <div class="flex flex-col">
          <h5 :class="['mb-2', isWrongForm ? 'text-red-600' : '']">
            Доставка (стоимость уточняется при согласовании)
          </h5>
          <ul class="flex flex-col gap-2 mb-4">
            <li>
              <input
                class="mr-2"
                type="radio"
                id="radio1"
                name="radio-delivery"
                v-model="radioDel"
              />
              <label for="radio1"> По Москве и МО курьером Yandex.Go </label>
            </li>
            <li>
              <input
                :class="[
                  'mr-2',
                  isWrongForm ? 'border border-red-600 text-red-600' : '',
                ]"
                type="radio"
                id="radio2"
                name="radio-delivery"
                v-model="radioDel"
              />
              <label for="radio2"> Самовывоз из г.Мытищи </label>
            </li>
            <li>
              <input
                class="mr-2"
                type="radio"
                id="radio3"
                name="radio-delivery"
                v-model="radioDel"
              />
              <label for="radio3"> По России почта России </label>
            </li>
            <li>
              <input
                class="mr-2"
                type="radio"
                id="radio4"
                name="radio-delivery"
                v-model="radioDel"
              />
              <label for="radio4"> По России СДЭК </label>
            </li>
            <li>
              <input
                class="mr-2"
                type="radio"
                id="radio5"
                name="radio-delivery"
                v-model="radioDel"
              />
              <label for="radio5"> Выберу при согласовании </label>
            </li>
          </ul>
          <h5 :class="['mb-2', isWrongForm ? 'text-red-600' : '']">
            Способ оплаты
          </h5>
          <ul class="flex flex-col gap-2 mb-4">
            <li>
              <input
                class="mr-2"
                type="radio"
                id="radio6"
                name="radio-pay"
                v-model="radioPay"
              />
              <label for="radio6">
                Оплата через перевод после согласования
              </label>
            </li>
            <li>
              <input
                class="mr-2"
                type="radio"
                id="radio7"
                name="radio-pay"
                v-model="radioPay"
              />
              <label for="radio7"> Оплата наличными при самовывозе </label>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        class="self-center text-white bg-gray-800 hover:bg-blue-800 active:opacity-55 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center mr-4"
      >
        Оформить покупку
      </button>
    </form>
  </div>
</template>
