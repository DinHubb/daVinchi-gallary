<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cart";

const { cartOrder } = storeToRefs(useCartStore());
const { toggleCart } = useCartStore();

const handleRemoveOrder = (order) => {
  toggleCart(order);
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
            class="bg-white border-b"
            v-if="cartOrder"
            v-for="order in cartOrder"
            :key="order.id"
          >
            <th scope="row" class="px-6 py-4 font-mediu whitespace-nowrap">
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
              <div class="flex items-center font-semibold">
                <input
                  type="text"
                  class="w-9 h-9 p-2 text-center rounded shadow-[0_0_2px_#13212c]"
                  value="1"
                  size="3"
                />
                <div
                  class="flex flex-col justify-center border border-[#8d8d8f] box-border border-l-0 rounded-r text-base leading-[5px] font-bold"
                >
                  <button
                    type="button"
                    class="w-4 h-4 cursor-pointer transition-all ease-in bg-none"
                    @click="handleIncPrice(order.price)"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="w-4 h-4 cursor-pointer transition-all ease-in bg-none border-t border-[#8d8d8f]"
                    @click="handleDecPrice(order.price)"
                  >
                    -
                  </button>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 text-black font-medium">{{ order.price }}р</td>
            <td class="px-6 py-4 text-center">
              <button class="mt-2" @click="handleRemoveOrder(order)">
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
