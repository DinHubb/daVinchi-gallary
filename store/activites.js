import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    favoriteCollects: [],
  }),
  getters: {
    cartCount: (state) => state.cart.length,
    cartOrders: (state) => state.cart,
    favoriteCount: (state) => state.favoriteCollects.length,
    favoriteProducts: (state) => state.favoriteCollects,
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

    toggleFavorite(product) {
      const index = this.favoriteCollects.findIndex((p) => p.id === product.id);

      if (index === -1) {
        this.favoriteCollects.push(product);
      } else {
        this.favoriteCollects.splice(index, 1);
      }
    },
  },
});
