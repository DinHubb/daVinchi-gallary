import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartCount: (state) => state.cart.length,
    cartOrders: (state) => state.cart,
  },
  actions: {
    toggleCart(product) {
      const index = this.cart.findIndex((p) => p.id === product.id);

      if (index === -1) {
        this.cart.push(product);
      } else {
        this.cart.splice(index, 1);
      }
    },
  },
});
