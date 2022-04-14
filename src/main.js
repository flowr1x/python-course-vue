import { createApp } from 'vue'
import App from './App.vue'
import Maska from "maska"
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/layouts/index.scss"

const app = createApp(App);

app.use( Maska);

app.use(store).use(router).mount('#app');

