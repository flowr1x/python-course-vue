import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database";
import {getAuth} from "firebase/auth";
export default {
  state: {
    listAllUsers: {},
  },
  mutations: {
    setListAllUsers(state, listAllUsers) {
      state.listAllUsers = listAllUsers;
    },
    clearListAllUsers(state) {
      state.listAllUsers = {};
    }
  },
  actions: {
    async fetchListAllUser({commit}) {
      const dbRef = ref(getDatabase());

      await get(child(dbRef, "users")).then(snapshot => {
        if (snapshot.exists) commit("setListAllUsers", snapshot.val()); 
      }).catch(e => console.log(e));
    },
  },
  getters: {
    getListAllUsers: s => s.listAllUsers,
  }
}
