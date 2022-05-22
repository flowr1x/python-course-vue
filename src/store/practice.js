import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database"

export default {
  state: {
    practice: {},
  },
  mutations: {
    setPractice(state, practice) {
      state.practice = practice;
    },
    clearPractice(state) {
      state.practice = {};
    }
  },
  actions: {
    async fetchPractice({dispatch, commit}) {
      const dbRef = ref(getDatabase());

      await get(child(dbRef, "practice")).then(snapshot => {
        if (snapshot.exists()) {
          commit("setPractice", snapshot.val());
        }
        else console.log("No data available");
      }).catch(e => console.log(e));
    }
  },
  getters: {
    practice: s => s.practice
  }
}
