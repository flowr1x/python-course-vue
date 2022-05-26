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
    async createPractice({dispatch, commit, getters}, newPractice) {
      const db = getDatabase();
      const countItem = Object.keys(getters.practice).length + 1;
      await set(ref(db, `practice/${Date.now()}` + countItem), newPractice);
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
    },
    async fetchUserPractice({dispatch, commit, getters}) {
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
    async createUserPractice({dispatch, commit, getters}, {newUserPractice, userId}) {
      console.log(userId);
      let uid;
      const db = getDatabase();
      
      if (getters.isAdmin) uid = userId;
      else uid = await dispatch("getUid");
      
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
