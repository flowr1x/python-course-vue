import { createStore } from 'vuex'
import auth from "./auth.js"

export default createStore({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error: state => state.error,
  },
  modules: {
    auth
  }
})
