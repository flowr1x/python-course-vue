import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue")
  },
  {
    path: '/',
    name: 'home',
    meta: { layout: "main" },
    component: Home
  },
  {
    path: "/theory_1",
    name: "theory_1",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_1.vue")
  },
  {
    path: "/theory_2",
    name: "theory_2",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_2.vue")
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "middle" },
    component: () => import("../views/Profile.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
