import { getDatabase, 
  ref, 
  get, 
  child, 
  set } from "firebase/database";
import {getAuth} from "firebase/auth";
export default {
  state: {
    users: {},
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    clearUsers(state) {
      state.users = {};
    }
  },
  actions: {
    async fetchListAllUser({commit}) {
      const dbRef = ref(getDatabase());

      await get(child(dbRef, "users")).then(snapshot => {
        if (snapshot.exists) commit("setUsers", snapshot.val()); 
      }).catch(e => console.log(e));
    },
    async removeUser(uid) {
      getAuth()
        .deleteUser(uid)
        .then(() => {
          console.log('Successfully deleted user');
        })
        .catch((error) => {
          console.log('Error deleting user:', error);
        });
    }
  },
  getters: {
    users: s => s.users,
  }
}
