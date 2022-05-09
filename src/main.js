import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "@/assets/layouts/index.scss";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Maska from "maska"
import { GlobalEvents } from 'vue-global-events'
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import components from "@/components/UI/index.js";

let app;

//fireabse

initializeApp({
  apiKey: "AIzaSyChUwkELeiInxLEBCoHl6CvtTR_xHRkBsw",
  authDomain: "python-learn-vue.firebaseapp.com",
  projectId: "python-learn-vue",
  storageBucket: "python-learn-vue.appspot.com",
  messagingSenderId: "699182418792",
  appId: "1:699182418792:web:8dae841fabd1e04efc64dd"
});

onAuthStateChanged(getAuth(), () => {
  if (!app) {
    app = createApp(App);

    app.component('GlobalEvents', GlobalEvents);
    app.provide("mode", "dark");
    components.forEach(component => {
      app.component(component.name, component);
    });
    app
      .use(Toast)
      .use(Maska)
      .use(store)
      .use(router)
      .mount('#app');
    
      
  }
}); 

