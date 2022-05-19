import { signInWithEmailAndPassword, 
  getAuth, 
  signOut, 
  createUserWithEmailAndPassword,
  } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"

export default {
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
    getUid() {
      const auth = getAuth();
      const user = auth.currentUser;
      return user ? user.uid : null;
    },
    async logout({commit}) {
      const auth = getAuth();
      await signOut(auth);
      commit("clearInfo");
    }
  }
}
