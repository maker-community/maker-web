import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 配置路由信息
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>import("../views/About.vue"),
}
];

const router = createRouter({
  //history: createWebHistory('/maker-web/'),
  history: createWebHistory(),
  routes,
});

export default router;
