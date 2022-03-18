import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginViewVue from "../components/LoginView.vue";
import Profile from "../components/ProFile.vue";
import product from "../components/ProDuct.vue";
import productDetail from "../components/ProductDetel.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginViewVue,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/RegisterView.vue"),
    },
    {
      path: "/store",
      name: "store",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/StoreView.vue"),
    },
    {
      path: "/carttable",
      name: "CartTable",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/CartTable.vue"),
    },
    {
      path: "/product",
      name: "product",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: product,
      children: [
        {
          path: "/productdetel/:id",
          component: productDetail,
        },
      ],
    },
    {
      path: "/admin",
      name: "admiin",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/AdminView.vue"),
    },
  ],
});

export default router;
