import { createWebHistory, createRouter } from "vue-router";
// import Home from "../components/HomePage.vue";
import cDashboard from "../components/contentDashboard.vue";
import cReport from "../components/contentReport.vue";
import cMaster from "../components/contentMaster.vue";
import cTransaksi from "../components/contentTransaksi.vue";

const routes = [
  {
    path: "/dashboard.html",
    name: "iDashboard",
    component: cDashboard,
    redirect: "/dashboard"
  }, {
    path: "/dashboard",
    name: "dashboard",
    component: cDashboard,
  }, {
    path: "/report",
    name: "report",
    component: cReport,
  }, {
    path: "/master",
    name: "master",
    component: cMaster,
  }, {
    path: "/transaksi",
    name: "transaksi",
    component: cTransaksi,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;