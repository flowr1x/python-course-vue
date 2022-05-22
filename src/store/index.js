import { createStore } from 'vuex';
import auth from "./auth.js";
import info from "./info.js";
import practice from "./practice.js";

export default createStore({
  state: {
    error: null,
    mode: "default"
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    setMode(state, mode) {
      state.mode = mode
    }
  },
  actions: {
    changeDarkMode({commit}, mode) {
      commit("setMode", mode);
    }
  },
  getters: {
    error: state => state.error,
    mode: state => state.mode,
  },
  modules: {
    auth, info, practice
  }
})
