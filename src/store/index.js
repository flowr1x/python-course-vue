import { createStore } from 'vuex'
import auth from "./auth.js"
import info from "./info.js";

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
    auth, info
  }
})
