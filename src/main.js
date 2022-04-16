import { createApp } from 'vue'
import App from './App.vue'

import Maska from "maska"
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/layouts/index.scss"

import components from "@/components/UI/index.js";

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.use( Maska);

app.use(store).use(router).mount('#app');

