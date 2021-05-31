<template>
    <div class="flex gap-4 pb-4 border-b-2 border-gray-200 overflow-x-auto">
        <router-link :to="baseURL+'/profile/profile_data'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" id="file-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,20H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h8.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M15.05,21H12.22V18.17l5.66-5.66a1,1,0,0,1,1.41,0l1.42,1.42a1,1,0,0,1,0,1.41Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">profile data</span>
            </div>
        </router-link>
        <router-link :to="baseURL+'/profile/change_password'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-700' : 'border-gray-400 hover:border-indigo-700'" class="flex items-center group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <div class="mr-2">
                    <svg :class="isExactActive ? 'text-indigo-700' : 'text-gray-400'" class="stroke-current icon line group-hover:text-indigo-700" width="24" height="24" id="scan-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="8" y="11" width="8" height="6" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><path d="M3,7V4A1,1,0,0,1,4,3H7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M21,7V4a1,1,0,0,0-1-1H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M3,17v3a1,1,0,0,0,1,1H7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M21,17v3a1,1,0,0,1-1,1H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path d="M12,7h0a3,3,0,0,1,3,3v1a0,0,0,0,1,0,0H9a0,0,0,0,1,0,0V10A3,3,0,0,1,12,7Z" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
                </div>
                <span :class="isExactActive ? 'text-indigo-700' : 'text-gray-400 group-hover:text-indigo-700'" class="capitalize font-medium whitespace-nowrap">change password</span>
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
            baseURL: "/uis"
        }
    },

    computed: {
        
    },

    watch: {

    },

    methods: {
        
    },

    mounted() {
        
    }
}
</script>