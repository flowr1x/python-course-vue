import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "@/assets/layouts/index.scss";
import messagePlugin from './plugins/message.plugin'

import vSelect from 'vue-select'

import Toast from "vue-toastification";
import Maska from "maska"
import pdf from "pdfvuer"
import { GlobalEvents } from 'vue-global-events'


import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import {TippyDirective, Tippy} from 'tippy.vue';
import components from "@/components/UI/index.js";

let app;

//  fireabse

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

    app.use(Toast);
    app.use(messagePlugin);
    app.directive("tippy", TippyDirective);
    app.component("tippy", Tippy);
    app.component("pdf", pdf);
    app.component('GlobalEvents', GlobalEvents);
    app.component('v-select', vSelect);

    components.forEach(component => {
      app.component(component.name, component);
    });
    app
      .use(Maska)
      .use(store)
      .use(router)
      .mount('#app'); 
  }
}); 
