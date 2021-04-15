import { createWebHistory, createRouter } from "vue-router";
// import Home from "../components/HomePage.vue";
import cDashboard from "../components/contentDashboard.vue";
import cReport from "../components/contentReport.vue";
import cMaster from "../components/contentMaster.vue";
import cTransaksi from "../components/contentTransaksi.vue";
import cProfile from "../components/contentProfile.vue";
import rListPO from "../components/reports/r_listPO.vue";
import rSuratJalan from "../components/reports/r_suratJalan.vue";
import rOther from "../components/reports/r_other.vue";
import rInvoice from "../components/reports/r_invoice.vue";
import pPersonalData from "../components/profile/p_personalData.vue";
import pProfileData from "../components/profile/p_profileData.vue";
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
    path: baseURL+"/reportdist",
    name: "reportdist",
    component: cReport,
    redirect: baseURL+"/reportdist/surat_jalan",
    meta: {
      deskripsi : "panel report"
    },
    children: [{
      path: 'surat_jalan',
      name: 'c_suratjalan',
      component: rSuratJalan
    },{
      path: 'invoice',
      name: 'c_invoice',
      component: rInvoice,
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
    redirect: baseURL+"/profile/profile_data",
    children: [{
      path: 'personal_data',
      name: 'c_pdata',
      component: pPersonalData
    },{
      path: 'change_password',
      name: 'c_cpassword',
      component: pChangePass
    },{
      path: 'profile_data',
      name: 'c_profile',
      component: pProfileData
    }]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;