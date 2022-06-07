import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import listTheory from "@/views/theory/index.js"; 

const routes = [
  {
    path: "/:pathMatch(.*)*",
    meta: {layout: "empty"},
    component: () => import("../views/404.vue"),
  },
  {
    path: "/practice_1",
    meta: {layout: "contentPractice"},
    component: () => import("../views/practice/Practice_1.vue"),
  },
  {
    path: "/practice_2",
    meta: {layout: "contentPractice"},
    component: () => import("../views/practice/Practice_2.vue"),
  },
  {
    path: "/practice",
    meta: {layout: "mainPractice"},
    component: () => import("../views/Practice.vue"),
  },
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
    path: "/profile",
    name: "profile",
    meta: { layout: "middle" },
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/welcome",
    name: "welcome",
    meta: { layout: "empty" },
    component: () => import("../views/Welcome.vue")
  },
  {
    path: "/instruction",
    name: "instruction",
    meta: { layout: "empty" },
    component: () => import("../views/Instruction.vue")
  },
];

listTheory.forEach((component) => {
  routes.push({
    path: `/${component.name}`,
    meta: {layout: "content"},
    name: component.name,
    component
  });
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        top: 80,
        el: to.hash,
        behavior: "smooth",
      }
    }
    else {
      return {
        top: 0, left: 0
      }
    }
  },
  routes,
})

export default router
