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
            iconLoading: false,
            text1: "",
            baseURL: ""
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
            let amv = new mv();

            amv.SetData3(1, 1, this.uname);
            amv.SetData3(2, 1, this.pwd);

            var aoth = {
                sid: 0,
                serverdb: "1000PO",
                sp: "[dbo].[master_read]",
                mvitem: amv.Contents(),
                action: "1",
                othval: "user",
                key: "",
            }

            panggilsafe(aoth)
            .then((iMsg) => {
                if (iMsg.Message) {
                    this.iconLoading = false;
                    alert(iMsg.Message);
                } else if (iMsg.errors) {
                    this.iconLoading = false;
                    Toastify({
                        text: iMsg.errors[0].message,
                        duration: 3000,
                        newWindow: true,
                        close: false,
                        className: "danger-notif",
                        stopOnFocus: true
                    }).showToast();
                } else {
                    this.iconLoading = false;
                    var anama = iMsg.data.nilai.Table[0].nama;
                    var acompany = iMsg.data.nilai.Table[0].idvendor;
                    var asesid = iMsg.data.nilai.Table[0].sid;
                    var namavendor = iMsg.data.nilai.Table[0].nama_vendor;
                    
                    setCookie("uiqid", asesid);
                    setCookie("nama", anama);
                    setCookie("co", acompany);
                    setCookie("nmvendor", namavendor);
                    setCookie("uid", this.uname);

                    window.location.href = this.baseURL+"/dashboard.html"
                }
            })
            .catch((iMsg) => {
                console.log(iMsg)
            });
        },

        forgotPwd() {
            alert('forgot pwd');
        }
    },

    mounted() {
        
    }
}
</script>