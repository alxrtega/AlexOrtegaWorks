import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/bio",
    name: "Bio",
    component: () => import("../views/Bio.vue")
  },
  {
    path: "/academia",
    name: "Academia",
    component: () => import("../views/Education.vue")
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../views/Experience.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
