import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SplitSystem from "../views/SplitSystem";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/split",
    name: "splitSystem",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SplitSystem,
  },
  {
    path: "/lighting",
    name: "lighting",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Lighting.vue"),
  },
  {
    path: "/alarms",
    name: "alarms",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Alarms.vue"),
  },
  {
    path: "/schedules",
    name: "schedules",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Schedules.vue"),
  },
  {
    path: "/histories",
    name: "histories",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Histories.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  var currentPath = router.app.$route.path.toString();
  var message = {};
  message[currentPath] = "CurrentPath";
  router.app.$mqttClient.publish("/currentPath", JSON.stringify(message));
});

export default router;
