import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/TreasureHuntView.vue"),
    },
    {
      path: "/phaserexamples",
      name: "phaserexamples",
      component: () => import("../views/PhaserExamplesView.vue"),
    }
  ],
});

export default router;
