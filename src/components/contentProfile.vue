<template>
    <div class="flex gap-4 pb-4 border-b-2 border-gray-200 overflow-x-auto">
        <router-link v-for="item in userMenu[0].children" :key="item.id" :to="baseURL+item.link" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg v-html="item.icon" :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" :id="item.id" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">{{item.judul}}</span>
            </div>
        </router-link>
    </div>
    <div class="pt-4">
        <router-view />
    </div>
</template>
<script>
import { getCookie } from "../assets/js/umum";

export default {
    data: function () {
        return{
            storageKey: "UIS_APP",
            text1: "",
            judul: "",
            baseURL: "/uis",
            displayName: "",
            userID: "",
            tipeLogin: "",
            userPermission: "",
            userData: []
        }
    },

    computed: {
        userMenu() {
            return this.userData.menu.filter((item) => item.id == 'profile' );
        }
    },

    watch: {
        // '$route': function(value) {
        //     this.judul = value.name;
        // }
    },

    methods: {
        
    },

    mounted() {
        
    },

    created() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
        this.userPermission = getCookie('user_permission');

        const storage = localStorage.getItem(this.storageKey)
        this.userData = JSON.parse(storage)
    }
}
</script>