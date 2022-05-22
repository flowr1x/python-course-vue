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
    async createPractice({dispatch, commit, getters}, newPractice) {
      const db = getDatabase();
      const countItem = Object.keys(getters.practice).length + 1;
      await set(ref(db, "practice/work_" + countItem), newPractice);
      dispatch("fetchPractice");
    },
    async fetchPractice({dispatch, commit}) {
      const dbRef = ref(getDatabase());

      await get(child(dbRef, "practice")).then(snapshot => {
        if (snapshot.exists()) {
          commit("setPractice", snapshot.val());
        }
        else console.log("No data available");
      }).catch(e => console.log(e));
    },
    async removePractice({dispatch, commit}, newListPractice) {
      const db = getDatabase();
      await set(ref(db, "practice/"), newListPractice);
      commit("setPractice", newListPractice);
    }
  },
  getters: {
    practice: s => s.practice
  }
}
