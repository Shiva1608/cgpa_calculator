import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SemesterPage from "@/views/SemesterPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Course",
    component: HomeView,
  },
  {
    path: "/:sem",
    name: "SemPage",
    component: SemesterPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
