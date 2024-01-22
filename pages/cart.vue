<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cart";
import { ref, onMounted } from "vue";
import data from "~/static/data.json";

const { cartOrders } = useCartStore();
const { toggleCart } = useCartStore();

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
                  class="w-full h-auto object-cover absolute top-0 left-0"
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
    <div class="text-end pt-10 border-t-2">
      <button
        class="text-white bg-gray-800 hover:bg-blue-800 active:opacity-55 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center mr-4"
      >
        Оформить покупку
      </button>
    </div>
  </div>
</template>
