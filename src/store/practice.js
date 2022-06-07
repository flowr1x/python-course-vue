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
    async createPractice({dispatch}, newPractice) {
      const db = getDatabase();
      console.log(newPractice);
      newPractice.id = Date.now() + 5;
      await set(ref(db, `practice/${Date.now()}`), newPractice);
      dispatch("fetchPractice");
    },
    async fetchPractice({commit}) {
      const dbRef = ref(getDatabase());

      await get(child(dbRef, "practice")).then(snapshot => {
        if (snapshot.exists()) {
          commit("setPractice", snapshot.val());
        }
        else console.log("No data available");
      }).catch(e => console.log(e));
    },
    async removePractice({commit}, newListPractice) {
      const db = getDatabase();
      await set(ref(db, "practice/"), newListPractice);
      commit("setPractice", newListPractice);
    },
    async fetchUserPractice({dispatch, commit}) {
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
    async createUserPractice({dispatch, getters}, {newUserPractice, userId}) {
      console.log(userId + "-----STORE");
      const uid = getters.isAdmin ? userId : await dispatch("getUid");
      const db = getDatabase();
      
      await set(ref(db, `/users/${uid}/practice/${newUserPractice.id}`), newUserPractice);
      await dispatch("fetchUserPractice");
      await dispatch("fetchListAllUser");
    },
  },
  getters: {
    practice: s => s.practice,
    userPractice: s => s.userPractice,
  }
}
