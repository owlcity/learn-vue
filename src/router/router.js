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
    //  路由对象模式
    // props: {
    //   food: "banana",
    // },
    // 路由函数模式
    props: (route) => ({
      food: route.query.food,
    }),
  },
  {
    path: "/argu/:name",
    name: "Argu",
    component: () => import("../views/Argu.vue"),
    /**
     * 路由传参
     * 1  属性模式
     * 2 对象模式
     * 3 函数模式
     */
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login"),
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
  {
    path: "*",
    component: () => import("../views/error_404.vue"),
  },
];

export default routes;
