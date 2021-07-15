import Vue from "vue";
import axios from "axios";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import BlogDetail from "../views/BlogDetail.vue";

import Paginate from 'vuejs-paginate'

import VueCookies from 'vue-cookies'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.use(axios, axios)
Vue.use(VueCookies)

Vue.component('paginate', Paginate)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
  },
  {
    path: "/blogs/:id",
    name: "blogDetail",
    component: BlogDetail
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
