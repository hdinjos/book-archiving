import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add-book",
    name: "add-book",
    component: () => import(/* webpackChunkName: "about" */ "../pages/AddBook"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
