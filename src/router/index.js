import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/HomePage.vue";
import Login from "../components/LoginPage.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;