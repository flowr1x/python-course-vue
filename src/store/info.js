import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database"


export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {
    async updateInfo({dispatch, commit, getters}, toUpdate) {
      const uid = await dispatch("getUid");
      const db = getDatabase();
      const updateData = {...getters.info, ...toUpdate};
      console.log(updateData);
      await set(ref(db, `/users/${uid}/info`), updateData);
      commit("setInfo", updateData)
    },
    async fetchInfo({dispatch, commit}) {
      const uid =  await dispatch("getUid");
      const dbRef = ref(getDatabase());
      
      await get(child(dbRef, `users/${uid}/info`)).then((snapshot) => {
        if (snapshot.exists()) {
          commit("setInfo", snapshot.val());
        } 
      })
    }
  },
  getters: {
    info: s => s.info
  }
}
