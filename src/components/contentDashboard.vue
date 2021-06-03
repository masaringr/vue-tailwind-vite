<template>
    <div v-if="tipeLogin === 'distributor'" class="h-fit-6 bg-gray-50 rounded-lg p-6 overflow-y-auto overflow-x-hidden scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <DashboardDistributor />
    </div>
    <div v-else>tidak memiliki akses</div>
</template>

<script>
import DashboardDistributor from "./dashboard/d_distributor.vue";
import { getCookie } from "../assets/js/umum";

export default {
    components: {
        DashboardDistributor
    },
    data: function () {
        return{
            text1: "",
            judul: "",
            baseURL: "/uis",
            displayName: "",
            userID: "",
            tipeLogin: "",
        }
    },

    computed: {
        
    },

    methods: {
        
    },
    
    beforeMount() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
    },
    mounted() {

    },

    created() {
        
    }
}
</script>

<style>

</style>