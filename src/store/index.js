import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems: []
  },
  getters: {
  },
  mutations: {
    addToCart (state, item) {
      state.cartItems.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
