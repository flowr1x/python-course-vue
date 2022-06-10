import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database"


export default {
  state: {
    infoUser: {}
  },
  mutations: {
    setInfoUser(state, infoUser) {
      state.infoUser = infoUser;
    },
    clearInfoUser(state) {
      state.infoUser = {};
    }
  },
  actions: {
    async updateInfo({dispatch, commit, getters}, toUpdate) {
      const uid = await dispatch("getUid");
      const db = getDatabase();
      const updateData = {...getters.getInfoUser, ...toUpdate};
      await set(ref(db, `/users/${uid}/info`), updateData);
      commit("setInfoUser", updateData)
    },
    async fetchInfo({dispatch, commit}) {
      const uid =  await dispatch("getUid");
      const dbRef = ref(getDatabase());
      
      await get(child(dbRef, `users/${uid}/info`)).then((snapshot) => {
        if (snapshot.exists()) {
          commit("setInfoUser", snapshot.val());
        } 
      })
    },
  },
  getters: {
    getInfoUser: s => s.infoUser,
  }
}
