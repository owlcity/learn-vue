import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    alias: "/home_page",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/argu/:name",
    name: "Argu",
    component: () => import("../views/Argu.vue"),
  },
  {
    path: "/parent",
    component: () => import("../views/Parent"),
    children: [
      {
        path: "child",
        component: () => import("../views/Child"),
      },
    ],
  },
  {
    path: "/named_view",
    components: {
      default: () => import("../views/Child"),
      email: () => import("../views/email"),
      tel: () => import("../views/tel"),
    },
  },
  {
    path: "/main",
    redirect: (to) => {
      console.log(to);
      return {
        name: "Home",
      };
    },
  },
];

export default routes;
