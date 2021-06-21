<template>
    <div class="w-full h-screen flex justify-center items-center bg-gray-50 px-4">
        <div class="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
            <div class="text-center mb-6 px-6 pt-4">
                <div class="flex justify-center w-full mb-6"> 
                    <div class="flex items-center">
                        <div class="w-12 mr-4">
                            <img class="w-full" src="../assets/logo-uj.png" alt="">
                        </div>
                        <div class="h-100 border-l border-gray-200 pl-4 text-left">
                            <h4 class="text-xs tracking-wider text-gray-600 font-semibold">Ultra's</h4>
                            <h4 class="text-xs tracking-wider text-gray-600 font-semibold">Integrated</h4>
                            <h4 class="text-xs tracking-wider text-gray-600 font-semibold">System</h4>
                        </div>
                    </div>
                </div>
                <h3 class="font-semibold text-xl text-indigo-800">Sign in to your account</h3>
            </div>
            <div class="px-6 py-8">
                <div class="relative mb-4">
                    <label for="username" class="block mb-1 text-gray-600 font-semibold text-md">Username</label>
                    <input v-model.trim="validate.uname.$model" id="username" type="text" placeholder="" 
                        class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                        :class="
                        validate.uname.$error
                            ? 'border-red-400 focus:ring-red-300'
                            : 'focus:ring-indigo-300'
                        "
                    />
                    <template v-if="validate.uname.$error">
                        <div
                            v-for="(error, index) in validate.uname.$errors"
                            :key="index"
                            class="text-red-600 text-xs mt-1"
                            >
                            {{ error.$message }}
                        </div>
                    </template>
                </div>
                <div class="relative mb-4">
                    <label for="password" class="block mb-1 text-gray-600 font-semibold text-md">Password</label>
                    <input v-model.trim="validate.pwd.$model" @keyup.enter="signin" id="password" type="password" placeholder="" 
                        class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                        :class="
                        validate.pwd.$error
                            ? 'border-red-400 focus:ring-red-300'
                            : 'focus:ring-indigo-300'
                        " 
                    />
                    <template v-if="validate.pwd.$error">
                        <div
                            v-for="(error, index) in validate.pwd.$errors"
                            :key="index"
                            class="text-red-600 text-xs mt-1"
                            >
                            {{ error.$message }}
                        </div>
                    </template>
                </div>
                <div class="text-right mb-8">
                    <a @click="forgotPwd" class="cursor-pointer text-indigo-800 hover:text-indigo-600 text-md">forgot your password?</a>
                </div>
                <div>
                    <button @click="signin" :disabled="iconLoading" class="disabled:bg-indigo-400 disabled:cursor-not-allowed w-full flex justify-center items-center bg-indigo-800 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-700 focus:outline-none">Sign in
                        <span v-if="iconLoading" class="ml-2 w-6 h-6"><svg width="25" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-full h-full"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="4"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  integer,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Toastify from "toastify-js";
// import { mv } from "../assets/js/mv";
import { setCookie } from "../assets/js/umum";

export default {
    setup() {
        const formData = reactive({
            uname: "",
            pwd: "",
        
        });
        const rules = {
            uname: {
                required,
            },
            pwd: {
                required,
            },
        }

        const validate = useVuelidate(rules, toRefs(formData));
        
        return {
            validate,
            formData,
        };
    },
    data: function () {
        return{
            storageKey: "UIS_APP",
            iconLoading: false,
            text1: "",
            baseURL: "/uis",
            userLogin: [{
                id: "purchasing",
                username: "purchasing",
                password: "ujmi",
                displayName: "Purchasing",
                tipe: "vendor_purchasing",
                permission: "all",
                menu: [{
                    id: "dashboard",
                    link: "/dashboard",
                    icon: `<rect x="3" y="3" width="7" height="9" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="14" y="3" width="7" height="5" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="3" y="16" width="7" height="5" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="14" y="12" width="7" height="9" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>`,
                    judul: "dashboard",
                    content: ['no-content']
                }, {
                    id: "profile",
                    link: "/profile",
                    icon: `<path d="M19,13v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V13" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><path d="M16.5,10.75A2.25,2.25,0,0,1,14.25,13h0A2.25,2.25,0,0,1,12,10.75m4.5,0A2.25,2.25,0,0,0,18.75,13h0A2.25,2.25,0,0,0,21,10.75h0a5.22,5.22,0,0,0-.21-1.47L19.21,3.73a1,1,0,0,0-1-.73H12M7.5,10.75A2.25,2.25,0,0,0,9.75,13h0A2.25,2.25,0,0,0,12,10.75M12,3H5.75a1,1,0,0,0-1,.73L3.21,9.28A5.22,5.22,0,0,0,3,10.75H3A2.25,2.25,0,0,0,5.25,13h0A2.25,2.25,0,0,0,7.5,10.75" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>`,
                    judul: "profile",
                    children: [{
                        id: "profile_personaldata",
                        link: "/profile/personal_data",
                        icon: `<path d="M8,20H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h8.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M15.05,21H12.22V18.17l5.66-5.66a1,1,0,0,1,1.41,0l1.42,1.42a1,1,0,0,1,0,1.41Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>`,
                        judul: "personal data"
                    }]
                }]
            }, {
                id: "1111",
                username: "1111",
                password: "1111",
                displayName: "Super Admin",
                tipe: "admin",
                permission: "all",
                menu: []
            }, {
                id: "2222",
                username: "2222",
                password: "2222",
                displayName: "vendor 1",
                tipe: "vendor",
                permission: "all"
            }, {
                id: "3333",
                username: "3333",
                password: "3333",
                displayName: "distributor 1",
                tipe: "distributor",
                permission: "all"
            }, {
                id: "1231",
                username: "1231",
                password: "ujmi",
                displayName: "VIARDI",
                tipe: "distributor",
                permission: "all",
                menu: [{
                    id: "dashboard",
                    link: "/dashboard",
                    icon: `<rect x="3" y="3" width="7" height="9" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="14" y="3" width="7" height="5" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="3" y="16" width="7" height="5" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="14" y="12" width="7" height="9" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>`,
                    judul: "dashboard",
                    content: ['summary-sj', 'summary-inv']
                }, {
                    id: "report",
                    link: "/reportdist",
                    icon: `<path d="M4,4H20a0,0,0,0,1,0,0V16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V4A0,0,0,0,1,4,4Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                        <line x1="3" y1="4" x2="21" y2="4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="10.4" y1="17" x2="8" y2="20" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="13.6" y1="17" x2="16" y2="20" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="12" y1="13" x2="12" y2="8" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="16" y1="13" x2="16" y2="10" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="8" y1="13" x2="8" y2="10" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`,
                    judul: "report",
                    children: [{
                        id: "report_invoice",
                        link: "/reportdist/invoice",
                        judul: "invoice",
                        icon: `<path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`
                    }, {
                        id: "report_suratjalan",
                        link: "/reportdist/surat_jalan",
                        judul: "surat jalan",
                        icon: `<path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`
                    }, {
                        id: "report_histpembayaran",
                        link: "/reportdist/history_pembayaran",
                        judul: "history pembayaran",
                        icon: `<path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`
                    }]
                }, {
                    id: "transaksi",
                    link: "/transaksi",
                    icon: `<path id="primary" d="M17,16v4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16a1,1,0,0,1,1,1v6M7,6A1,1,0,0,0,8,7h4a1,1,0,0,0,1-1V3H7Zm13.71,4.69-1.4-1.4a1,1,0,0,0-1.4,0L13,14.2V17h2.8l4.91-4.91A1,1,0,0,0,20.71,10.69Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>
                    </svg>`,
                    judul: "transaksi",
                    children: [{
                        id: "trans_penerimaan",
                        link: "/transaksi/penerimaan",
                        judul: "penerimaan",
                        icon: `<path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`
                    }]
                }, {
                    id: "profile",
                    link: "/profile",
                    icon: `<path d="M19,13v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V13" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><path d="M16.5,10.75A2.25,2.25,0,0,1,14.25,13h0A2.25,2.25,0,0,1,12,10.75m4.5,0A2.25,2.25,0,0,0,18.75,13h0A2.25,2.25,0,0,0,21,10.75h0a5.22,5.22,0,0,0-.21-1.47L19.21,3.73a1,1,0,0,0-1-.73H12M7.5,10.75A2.25,2.25,0,0,0,9.75,13h0A2.25,2.25,0,0,0,12,10.75M12,3H5.75a1,1,0,0,0-1,.73L3.21,9.28A5.22,5.22,0,0,0,3,10.75H3A2.25,2.25,0,0,0,5.25,13h0A2.25,2.25,0,0,0,7.5,10.75" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>`,
                    judul: "profile",
                    children: [{
                        id: "profile_profiledata",
                        link: "/profile/profile_data",
                        icon: `<path d="M8,20H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h8.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M15.05,21H12.22V18.17l5.66-5.66a1,1,0,0,1,1.41,0l1.42,1.42a1,1,0,0,1,0,1.41Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>`,
                        judul: "profile data"
                    }, {
                        id: "profile_changepass",
                        link: "/profile/change_password",
                        icon: `<rect x="8" y="11" width="8" height="6" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><path d="M3,7V4A1,1,0,0,1,4,3H7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M21,7V4a1,1,0,0,0-1-1H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M3,17v3a1,1,0,0,0,1,1H7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M21,17v3a1,1,0,0,1-1,1H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M12,7h0a3,3,0,0,1,3,3v1a0,0,0,0,1,0,0H9a0,0,0,0,1,0,0V10A3,3,0,0,1,12,7Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>`,
                        judul: "change password"
                    }]
                }]
            }, {
                id: "1231",
                username: "1231-opr",
                password: "ujmi",
                displayName: "VIARDI",
                tipe: "distributor",
                permission: "operasional",
                menu: [{
                    id: "dashboard",
                    link: "/dashboard",
                    icon: `<rect x="3" y="3" width="7" height="9" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="14" y="3" width="7" height="5" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="3" y="16" width="7" height="5" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                        <rect x="14" y="12" width="7" height="9" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>`,
                    judul: "dashboard",
                    content: ['summary-sj']
                }, {
                    id: "report",
                    link: "/reportdist",
                    icon: `<path d="M4,4H20a0,0,0,0,1,0,0V16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V4A0,0,0,0,1,4,4Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                        <line x1="3" y1="4" x2="21" y2="4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="10.4" y1="17" x2="8" y2="20" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="13.6" y1="17" x2="16" y2="20" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="12" y1="13" x2="12" y2="8" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="16" y1="13" x2="16" y2="10" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                        <line x1="8" y1="13" x2="8" y2="10" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`,
                    judul: "report",
                    children: [{
                        id: "report_suratjalan",
                        link: "/reportdist/surat_jalan",
                        judul: "surat jalan",
                        icon: `<path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`
                    }]
                }, {
                    id: "transaksi",
                    link: "/transaksi",
                    icon: `<path id="primary" d="M17,16v4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16a1,1,0,0,1,1,1v6M7,6A1,1,0,0,0,8,7h4a1,1,0,0,0,1-1V3H7Zm13.71,4.69-1.4-1.4a1,1,0,0,0-1.4,0L13,14.2V17h2.8l4.91-4.91A1,1,0,0,0,20.71,10.69Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>
                    </svg>`,
                    judul: "transaksi",
                    children: [{
                        id: "trans_penerimaan",
                        link: "/transaksi/penerimaan",
                        judul: "penerimaan",
                        icon: `<path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>`
                    }]
                }, {
                    id: "profile",
                    link: "/profile",
                    icon: `<path d="M19,13v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V13" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><path d="M16.5,10.75A2.25,2.25,0,0,1,14.25,13h0A2.25,2.25,0,0,1,12,10.75m4.5,0A2.25,2.25,0,0,0,18.75,13h0A2.25,2.25,0,0,0,21,10.75h0a5.22,5.22,0,0,0-.21-1.47L19.21,3.73a1,1,0,0,0-1-.73H12M7.5,10.75A2.25,2.25,0,0,0,9.75,13h0A2.25,2.25,0,0,0,12,10.75M12,3H5.75a1,1,0,0,0-1,.73L3.21,9.28A5.22,5.22,0,0,0,3,10.75H3A2.25,2.25,0,0,0,5.25,13h0A2.25,2.25,0,0,0,7.5,10.75" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>`,
                    judul: "profile",
                    children: [{
                        id: "profile_profiledata",
                        link: "/profile/profile_data",
                        icon: `<path d="M8,20H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h8.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M15.05,21H12.22V18.17l5.66-5.66a1,1,0,0,1,1.41,0l1.42,1.42a1,1,0,0,1,0,1.41Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>`,
                        judul: "profile data"
                    }, {
                        id: "profile_changepass",
                        link: "/profile/change_password",
                        icon: `<rect x="8" y="11" width="8" height="6" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><path d="M3,7V4A1,1,0,0,1,4,3H7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M21,7V4a1,1,0,0,0-1-1H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M3,17v3a1,1,0,0,0,1,1H7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M21,17v3a1,1,0,0,1-1,1H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M12,7h0a3,3,0,0,1,3,3v1a0,0,0,0,1,0,0H9a0,0,0,0,1,0,0V10A3,3,0,0,1,12,7Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>`,
                        judul: "change password"
                    }]
                }]
            }]
        }
    },

    computed: {
        
    },

    methods: {
        signin() {
            this.validate.$touch();
            if (this.validate.$invalid)
                return
            this.iconLoading = true;

            const users = this.userLogin.filter(user => user.username === this.formData.uname);
            if (users.length) {
                const passwords = users.filter(user => user.password === this.formData.pwd);
                if (!passwords.length) {
                    this.iconLoading = false;
                    Toastify({
                        text: "Kombinasi username & password salah.",
                        duration: 3000,
                        newWindow: true,
                        close: false,
                        className: "danger-notif",
                        stopOnFocus: true
                    }).showToast();
                } else {
                    const userValid = this.userLogin.filter(user => (user.username === this.formData.uname) && (user.password === this.formData.pwd));
                    setCookie("displayname", userValid[0].displayName);
                    setCookie("userid", userValid[0].id);
                    setCookie("tipelogin", userValid[0].tipe);
                    setCookie("user_permission", userValid[0].permission);

                    localStorage.setItem(this.storageKey, JSON.stringify(userValid[0]));

                    this.iconLoading = false;

                    window.location.href = this.baseURL+"/dashboard.html"
                }
            } else {
                this.iconLoading = false;
                Toastify({
                    text: "User '" + this.formData.uname + "' belum terdaftar.",
                    duration: 3000,
                    newWindow: true,
                    close: false,
                    className: "danger-notif",
                    stopOnFocus: true
                }).showToast();
            }


            // let amv = new mv();

            // amv.SetData3(1, 1, this.uname);
            // amv.SetData3(2, 1, this.pwd);

            // var aoth = {
            //     sid: 0,
            //     serverdb: "1000PO",
            //     sp: "[dbo].[master_read]",
            //     mvitem: amv.Contents(),
            //     action: "1",
            //     othval: "user",
            //     key: "",
            // }

            // panggilsafe(aoth)
            // .then((iMsg) => {
            //     if (iMsg.Message) {
            //         this.iconLoading = false;
            //         alert(iMsg.Message);
            //     } else if (iMsg.errors) {
            //         this.iconLoading = false;
            //         Toastify({
            //             text: iMsg.errors[0].message,
            //             duration: 3000,
            //             newWindow: true,
            //             close: false,
            //             className: "danger-notif",
            //             stopOnFocus: true
            //         }).showToast();
            //     } else {
            //         this.iconLoading = false;
            //         var anama = iMsg.data.nilai.Table[0].nama;
            //         var acompany = iMsg.data.nilai.Table[0].idvendor;
            //         var asesid = iMsg.data.nilai.Table[0].sid;
            //         var namavendor = iMsg.data.nilai.Table[0].nama_vendor;
                    
            //         setCookie("uiqid", asesid);
            //         setCookie("nama", anama);
            //         setCookie("co", acompany);
            //         setCookie("nmvendor", namavendor);
            //         setCookie("uid", this.uname);

            //         window.location.href = this.baseURL+"/dashboard.html"
            //     }
            // })
            // .catch((iMsg) => {
            //     console.log(iMsg)
            // });
        },

        forgotPwd() {
            Toastify({
                text: "Saat ini fitur belum tersedia.",
                duration: 3000,
                newWindow: true,
                close: false,
                className: "danger-notif",
                stopOnFocus: true
            }).showToast();
        },

        isStorageExist() {
            if (typeof (Storage) === undefined) {
                alert("Browser kamu tidak mendukung local storage");
                return false
            }
            return true;
        }
    },

    mounted() {
        this.isStorageExist();
    }
}
</script>