import { createWebHistory, createRouter } from "vue-router";
// import Home from "../components/HomePage.vue";
import cDashboard from "../components/contentDashboard.vue";
import cReport from "../components/contentReport.vue";
import cMaster from "../components/contentMaster.vue";
import cTransaksi from "../components/contentTransaksi.vue";

const routes = [
  {
    path: "/uis/dashboard.html",
    name: "iDashboard",
    component: cDashboard,
    redirect: "/uis/dashboard"
  }, {
    path: "/uis/dashboard",
    name: "dashboard",
    component: cDashboard,
  }, {
    path: "/uis/report",
    name: "report",
    component: cReport,
  }, {
    path: "/uis/master",
    name: "master",
    component: cMaster,
  }, {
    path: "/uis/transaksi",
    name: "transaksi",
    component: cTransaksi,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;