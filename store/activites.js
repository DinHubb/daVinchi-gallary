import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    collection: [],
  }),
  getters: {
    cartCount: (state) => state.cart.length,
    cartOrders: (state) => state.cart,
    collectionCount: (state) => state.collection.length,
    collectionProducts: (state) => state.collection,
  },
  actions: {
    loadCart() {
      const loadedCart = localStorage.getItem("cart");
      loadedCart ? (this.cart = JSON.parse(loadedCart)) : (this.cart = []);
    },

    removeCart() {
      localStorage.removeItem("cart");
    },

    toggleCart(product) {
      const index = this.cart.findIndex((p) => p.id === product.id);

      if (index === -1) {
        this.cart.push(product);
      } else {
        this.cart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    loadCollection() {
      const loadedCollection = localStorage.getItem("collection");
      loadedCollection
        ? (this.collection = JSON.parse(loadedCollection))
        : (this.collection = []);
    },

    toggleFavorite(product) {
      const index = this.collection.findIndex((p) => p.id === product.id);

      if (index === -1) {
        this.collection.push(product);
      } else {
        this.collection.splice(index, 1);
      }

      localStorage.setItem("collection", JSON.stringify(this.collection));
    },
  },
});
