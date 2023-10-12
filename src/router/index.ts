import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Article from "@/views/Article.vue";
import Settings from "@/views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile/:slug",
    name: "profile",
    component: Profile,
  },
  {
    path: "/article",
    name: "article",
    component: Article,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
