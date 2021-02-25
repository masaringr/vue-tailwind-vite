import { createWebHistory, createRouter } from "vue-router";
// import Home from "../components/HomePage.vue";
import cDashboard from "../components/contentDashboard.vue";
import cReport from "../components/contentReport.vue";
import cMaster from "../components/contentMaster.vue";
import cTransaksi from "../components/contentTransaksi.vue";
import cProfile from "../components/contentProfile.vue";
import rListPO from "../components/reports/r_listPO.vue";
import rOther from "../components/reports/r_other.vue";
import pData from "../components/profile/p_personalData.vue";
import pChangePass from "../components/profile/p_changePassword.vue";

let baseURL = "";

const routes = [
  {
    path: baseURL+"/dashboard.html",
    name: "iDashboard",
    component: cDashboard,
    redirect: baseURL+"/dashboard"
  }, {
    path: baseURL+"/dashboard",
    name: "dashboard",
    component: cDashboard,
    meta: {
      deskripsi : "panel dashboard"
    }
  }, {
    path: baseURL+"/report",
    name: "report",
    component: cReport,
    redirect: baseURL+"/report/listpo",
    meta: {
      deskripsi : "panel report"
    },
    children: [{
      path: 'listpo',
      name: 'c_listpo',
      component: rListPO
    },{
      path: 'other',
      name: 'c_other',
      component: rOther
    }]
  }, {
    path: baseURL+"/master",
    name: "master",
    component: cMaster,
    meta: {
      deskripsi : "panel master"
    }
  }, {
    path: baseURL+"/transaksi",
    name: "transaksi",
    component: cTransaksi,
    meta: {
      deskripsi : "panel transaksi"
    }
  }, {
    path: baseURL+"/profile",
    name: "profile",
    component: cProfile,
    meta: {
      deskripsi : "profile"
    },
    redirect: baseURL+"/profile/pdata",
    children: [{
      path: 'pdata',
      name: 'c_pdata',
      component: pData
    },{
      path: 'cpassword',
      name: 'c_cpassword',
      component: pChangePass
    }]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;