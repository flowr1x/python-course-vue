import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database"

export default {
  state: {
    currentPractices: {},
    practiceCurrentUser: {},
  },
  mutations: {
    setCurrentPractices(state, currentPractices) {
      state.currentPractices = currentPractices;
    },
    clearCurrentPractices(state) {
      state.currentPractices = {};
    },
    setPracticeCurrentUser(state, practiceCurrentUser) {
      state.practiceCurrentUser = practiceCurrentUser;
    },
    clearPracticeCurrentUser(state) {
      state.practiceCurrentUser = {};
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
      commit("setCurrentPractices", newListPractice);
    },
    async createUserPractice({dispatch, getters}, {newUserPractice, userId}) {
      // СОЗДАНИЕ ПОЛЯ С ПРАТИЧЕСКИМИ РАБОТАМИ 
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
          commit("setCurrentPractices", snapshot.val());
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
          commit("setPracticeCurrentUser", snapshot.val());
        } else {
          console.log("Error: Non Data");
        }
      }).catch(e => console.log(e));
    },
  },
  getters: {
    getCurrentPractices: s => s.currentPractices,
    getPracticeCurrentUser: s => s.practiceCurrentUser,
  }
}
