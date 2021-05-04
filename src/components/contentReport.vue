<template>
    <div v-if="tipeLogin === 'distributor'" class="flex gap-4 pb-4 border-b-2 border-gray-200 overflow-x-auto">
        <router-link :to="baseURL+'/reportdist/surat_jalan'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" id="note-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">Surat Jalan</span>
            </div>
        </router-link>
        <router-link :to="baseURL+'/reportdist/invoice'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" id="note-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">Invoice</span>
            </div>
        </router-link>
    </div>
    <div v-else class="flex gap-4 pb-4 border-b-2 border-gray-200">
        <router-link :to="baseURL+'/report/listpo'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" id="note-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect x="9" y="3" width="6" height="3" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line x1="9" y1="11" x2="15" y2="11" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="9" y1="15" x2="15" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">list PO</span>
            </div>
        </router-link>
        <router-link :to="baseURL+'/report/other'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" id="question" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="primary" d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12Zm-9,2c0-2,3-1,3-4S9,7,9,10" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><line id="secondary" x1="12" y1="17" x2="12" y2="17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.5;"></line></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">other report</span>
            </div>
        </router-link>
    </div>
    <div class="pt-4">
        <router-view />
    </div>
</template>
<script>
export default {
    data: function () {
        return{
            text1: "",
            judul: "",
            baseURL: "",
            displayName: "",
            userID: "",
            tipeLogin: ""
        }
    },

    computed: {
        
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

    beforeMount() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
    }
}
</script>