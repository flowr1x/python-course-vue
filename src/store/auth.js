import { signInWithEmailAndPassword, 
  getAuth, 
  signOut, 
  createUserWithEmailAndPassword,
  } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"

export default {
  state: {
    isAdmin: null,
  },
  mutations: {
    setAdmin(state, isAdmin) {
      console.log("Это админ");
      state.isAdmin = isAdmin === "ZPxOXM1h8WO1EzZj6qVDiK8l6hx2";
    },
    clearAdmin(state) {
      console.log("clear");
      state.isAdmin = null;
    }
  },
  actions: {
    async login( {dispatch, commit}, {email, password}) {      
      try {
        await signInWithEmailAndPassword(getAuth(), email, password)
      } catch(e) {
        commit("setError",e); // получение ошибки 
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, group, firstName, lastName}) {
      try {
        await createUserWithEmailAndPassword(getAuth(), email, password);
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
      commit("clearInfo");
      commit("clearAdmin");
      commit("clearPractice");
      commit("clearUserPractice");
    }
  },
  getters: {
    isAdmin: s => s.isAdmin,
  }
}
