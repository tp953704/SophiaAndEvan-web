import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SophiaIndex from "../views/SophiaIndex.vue";
import SophiaProfio from "../views/SophiaProfio.vue";
import EvanIndex from '../views/EvanIndex.vue';
import EvanProfio from '../views/EvanProfio.vue';
import EvanProfioCoding from '../views/profiochild/EvanProfioCoding.vue';
import EvanProfioCoding_2 from '../views/profiochild/EvanProfioCoding_2.vue';
import EvanChat from '../views/EvanChat.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Sophia/Index",
    name: "SophiaIndex",
    component: SophiaIndex
  },
  {
    path: "/Sophia/Profio",
    name: "SophiaProfio",
    component: SophiaProfio
  },
  {
    path: "/Evan/Index",
    name: "EvanIndex",
    component: EvanIndex
  },
  {
    path: "/Evan/Profio",
    name: "EvanProfio",
    component: EvanProfio
  },
  {
    path: "/Evan/Profio/Coding",
    name: "EvanProfioCoding",
    component: EvanProfioCoding
  },
  {
    path: "/Evan/Profio/B&GCoding",
    name: "EvanProfioCoding",
    component: EvanProfioCoding_2
  },
  {
    path: "/Evan/Chat",
    name: "EvanChat",
    component: EvanChat
  },
  {
      path: '*',
      name: 'NotFound',
      component: EvanIndex
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
