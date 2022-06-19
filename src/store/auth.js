import { signInWithEmailAndPassword, 
  getAuth, 
  signOut, 
  createUserWithEmailAndPassword,
  } from "firebase/auth"
import { getDatabase, 
  ref, 
  set } from "firebase/database"

export default {
  state: {
    isAdmin: null,
  },
  mutations: {
    setAdmin(state, isAdmin) {
      if (isAdmin)
        state.isAdmin = (isAdmin === "ZPxOXM1h8WO1EzZj6qVDiK8l6hx2") || (isAdmin === "Ew80ujjbvydngzYPBfCxpOuCTgB3");
    },
    clearAdmin(state) {
      state.isAdmin = null;
    },
    setLoadingStatus(state, loadingStatus) {
      state.loadingStatus = loadingStatus;
    }
  },
  actions: {
    async login( {dispatch, commit}, {email, password}) { 
      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        await dispatch("getUid");
      } catch(e) {
        commit("setError",e); // получение ошибки 
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, group, firstName, lastName}) {
      try {
        await createUserWithEmailAndPassword(getAuth(), email, password)
        const uid = await dispatch("getUid");

        const db = getDatabase();
        await set(ref(db, `/users/${uid}/info`), {
          email,
          group,
          firstName,
          lastName
        });
      } catch(e) {
        commit("setError", e); // получение ошибки 
        throw e;
      }
    },
    getUid({commit}) {
      const user = getAuth().currentUser;
      const isAuth = user ? user.uid : null;
      commit("setAdmin", isAuth)
      return isAuth;
    },
    async logout({commit}) {
      const auth = getAuth();
      await signOut(auth);
      commit("clearInfoUser");
      commit("clearAdmin");
      commit("clearCurrentPractices");
      commit("clearPracticeCurrentUser");
      commit("clearListAllUsers");
    }
  },
  getters: {
    isAdmin: s => s.isAdmin,
  }
}
