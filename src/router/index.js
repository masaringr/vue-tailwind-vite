import { createWebHistory, createRouter } from "vue-router";
import { getCookie } from "../assets/js/umum.js";


let config = {
  baseURL: "/uis"
}

const routes = [{
    path: config.baseURL+"/",
    name: "index",
    component: "",
    redirect: config.baseURL+"/index.html"
  }, {
    path: config.baseURL+"/dashboard.html",
    name: "iDashboard",
    component: () => import('../components/contentDashboard.vue'),
    redirect: config.baseURL+"/dashboard"
  }, {
    path: config.baseURL+"/dashboard",
    name: "dashboard",
    component: () => import('../components/contentDashboard.vue'),
    meta: {
      deskripsi : "panel dashboard"
    }
  }, {
    path: config.baseURL+"/report",
    name: "report",
    component: () => import('../components/contentReport.vue'),
    redirect: config.baseURL+"/report/listpo",
    meta: {
      deskripsi : "activity report"
    },
    children: [{
      path: 'listpo',
      name: 'c_listpo',
      component: () => import('../components/reports/r_listPO.vue')
    },{
      path: 'other',
      name: 'c_other',
      component: () => import('../components/reports/r_other.vue')
    }]
  }, {
    path: config.baseURL+"/reportdist",
    name: "reportdist",
    component: () => import('../components/contentReport.vue'),
    redirect: getCookie('user_permission') == 'all' ? config.baseURL+"/reportdist/invoice" : config.baseURL+"/reportdist/surat_jalan",
    meta: {
      deskripsi : "activity report"
    },
    children: [{
      path: 'surat_jalan',
      name: 'c_suratjalan',
      component: () => import('../components/reports/r_suratJalan.vue')
    },{
      path: 'invoice',
      name: 'c_invoice',
      component: () => import('../components/reports/r_invoice.vue'),
    },{
      path: 'history_pembayaran',
      name: 'c_history_pembayaran',
      component: () => import('../components/reports/r_historyPembayaran.vue'),
    }]
  }, {
    path: config.baseURL+"/master",
    name: "master",
    component: () => import('../components/contentMaster.vue'),
    meta: {
      deskripsi : "panel master"
    }
  }, {
    path: config.baseURL+"/transaksi",
    name: "transaksi",
    component: () => import('../components/contentTransaksi.vue'),
    meta: {
      deskripsi : "panel transaksi"
    }
  }, {
    path: config.baseURL+"/profile",
    name: "profile",
    component: () => import('../components/contentProfile.vue'),
    meta: {
      deskripsi : "panel profile"
    },
    redirect: getCookie('tipelogin') == 'vendor_purchasing' ? config.baseURL+"/profile/personal_data" : config.baseURL+"/profile/profile_data",
    // redirect: config.baseURL+"/profile/profile_data",
    children: [{
      path: 'personal_data',
      name: 'c_pdata',
      component: () => import('../components/profile/p_personalData.vue')
    },{
      path: 'change_password',
      name: 'c_cpassword',
      component: () => import('../components/profile/p_changePassword.vue')
    },{
      path: 'profile_data',
      name: 'c_profile',
      component: () => import('../components/profile/p_profileData.vue')
    }]
  }, {
    path: config.baseURL+"/transaksi",
    name: "transaksi",
    component: () => import('../components/contentTransaksi.vue'),
    meta: {
      deskripsi : "activity transaksi"
    },
    redirect: config.baseURL+"/transaksi/penerimaan",
    children: [{
      path: 'penerimaan',
      name: 't_penerimaan',
      component: () => import('../components/transaksi/t_penerimaan.vue')
    }]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;