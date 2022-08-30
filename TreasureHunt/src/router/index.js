import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
      path: "/phaserexamples",
      name: "phaserexamples",
      component: () => import("../views/PhaserExamplesView.vue"),
    },
    {
      path: "/treasurehunt",
      name: "treasurehunt",
      component: () => import("../views/TreasureHuntView.vue"),
    },
    {
      path: "/monstergame",
      name: "monstergame",
      component: () => import("../views/MonsterGameView.vue"),
    },
  ],
});

export default router;
