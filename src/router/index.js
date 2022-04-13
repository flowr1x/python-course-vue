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
    path: "/theory_3",
    name: "theory_3",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_3.vue")
  },
  {
    path: "/theory_4",
    name: "theory_4",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_4.vue")
  },
  {
    path: "/theory_5",
    name: "theory_5",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_5.vue")
  },
  {
    path: "/theory_5",
    name: "theory_5",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_5.vue")
  },
  {
    path: "/theory_6",
    name: "theory_6",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_6.vue")
  },
  {
    path: "/theory_7",
    name: "theory_7",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_7.vue")
  },
  {
    path: "/theory_8",
    name: "theory_8",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_8.vue")
  },
  {
    path: "/theory_9",
    name: "theory_9",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_9.vue")
  },
  {
    path: "/theory_10",
    name: "theory_10",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_10.vue")
  },
  {
    path: "/theory_11",
    name: "theory_11",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_11.vue")
  },
  {
    path: "/theory_12",
    name: "theory_12",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_12.vue")
  },
  {
    path: "/theory_13",
    name: "theory_13",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_13.vue")
  },
  {
    path: "/theory_14",
    name: "theory_14",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_14.vue")
  },
  {
    path: "/theory_15",
    name: "theory_15",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_15.vue")
  },
  {
    path: "/theory_16",
    name: "theory_16",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_16.vue")
  },
  {
    path: "/theory_17",
    name: "theory_17",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_17.vue")
  },
  {
    path: "/theory_18",
    name: "theory_18",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_18.vue")
  },
  {
    path: "/theory_19",
    name: "theory_19",
    meta: { layout: "main" },
    component: () => import("../views/theory/Theory_19.vue")
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
