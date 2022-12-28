import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "User Identification",
    component: () => import("../views/UserIdentification.vue"),
  },
  {
    path: "/main",
    name: "Main Page",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/Cart.vue")
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../components/Users.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../components/Products.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
