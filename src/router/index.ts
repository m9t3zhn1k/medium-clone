import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Article from "@/views/Article.vue";
import CreateArticle from "@/views/CreateArticle.vue";
import EditArticle from "@/views/EditArticle.vue";
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
    path: "/articles/new",
    name: "new-article",
    component: CreateArticle,
  },
  {
    path: "/articles/:slug",
    name: "articles",
    component: Article,
  },
  {
    path: "/articles/:slug/edit",
    name: "edit-article",
    component: EditArticle,
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
