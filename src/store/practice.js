import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database"

export default {
  state: {
    practice: {},
    userPractice: {},
  },
  mutations: {
    setPractice(state, practice) {
      state.practice = practice;
    },
    clearPractice(state) {
      state.practice = {};
    },
    setUserPractice(state, userPractice) {
      state.userPractice = userPractice;
    },
    clearUserPractice(state) {
      state.userPractice = {};
    }
  },
  actions: {
    // 
    // ИЗМЕНЕНИЕ ДАННЫХ
    // 
    async createPractice({dispatch}, newPractice) {
      // СОЗДАНИЕ ПРАТИЧЕСКИХ РАБОТ ADMIN
      await set(ref(getDatabase(), `practice/${Date.now()}`), newPractice);
      dispatch("fetchPractice");
    },
    async removePractice({commit}, newListPractice) {
      // УДАЛЕНИЕ ПРАТИЧЕСКИХ РАБОТ ADMIN
      await set(ref(getDatabase(), "practice/"), newListPractice);
      commit("setPractice", newListPractice);
    },
    async createUserPractice({dispatch, getters}, {newUserPractice, userId}) {
      const uid = getters.isAdmin ? userId : await dispatch("getUid");
      const db = getDatabase();
      
      await set(ref(db, `/users/${uid}/practice/${newUserPractice.name}`), newUserPractice);
      await dispatch("fetchUserPractice");
      await dispatch("fetchListAllUser");
    },
    // 
    // ЗАПРОС ДАННЫХ
    // 
    async fetchPractice({commit}) {
      // ЗАПРОС АКТУАЛЬНЫХ ПРАКТИЧЕСКИХ РАБОТ(которые создал админ)
      const dbRef = ref(getDatabase());

      await get(child(dbRef, "practice")).then(snapshot => {
        if (snapshot.exists()) {
          commit("setPractice", snapshot.val());
        } else {
          console.log("No data available");
        } 
      }).catch(e => console.log(e));
    },
    async fetchUserPractice({dispatch, commit}) {
      // ЗАПРОС ПЕРСОНАЛЬНЫХ ПРАТКИЧЕСКИХ РАБОТ(те что у user)
      const uid = await dispatch("getUid");
      const dbRef = ref(getDatabase());

      await get(child(dbRef, `users/${uid}/practice`)).then(snapshot => {
        if (snapshot.exists) {
          commit("setUserPractice", snapshot.val());
        } else {
          console.log("Error: Non Data");
        }
      }).catch(e => console.log(e));
    },
  },
  getters: {
    practice: s => s.practice,
    userPractice: s => s.userPractice,
  }
}
