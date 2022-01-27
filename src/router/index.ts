import { createRouter, createWebHistory, RouteLocationRaw } from "vue-router";

const textRoutes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/test-page/home.vue"),
    children: [
      {
        path: "",
        components: {
          default: () => import("@/components/about.vue"),
          footer: () => import("@/views/test-page/footer.vue"),
        },
        meta: {
          code: "as",
          title: "about",
        },
      },
      {
        path: "one",
        components: {
          default: () => import("@/views/test-page/userOne.vue"),
          footer: () => import("@/views/test-page/footer.vue"),
        },
        meta: {
          code: "one",
          title: "one",
        },
      },
      {
        path: "user",
        component: () => import("@/views/test-page/user.vue"),
        meta: {
          code: "user",
          title: "user",
        },
      },
      {
        path: "virtual-list",
        component: () => import("@/views/test-page/virtual-list.vue"),
        meta: {
          code: "virtual-list",
          title: "virtual-list",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/test-page/login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...textRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/test-page/404.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(to, from);
  console.log("发生了路由跳转");
});

export default router;
