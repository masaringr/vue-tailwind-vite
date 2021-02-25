<template>
    <div class="flex gap-4 pb-4 border-b-2 border-gray-200">
        <router-link :to="baseURL+'/report/listpo'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-900' : 'border-gray-400 hover:border-indigo-900'" class="group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <span :class="isExactActive ? 'text-indigo-900' : 'text-gray-400 group-hover:text-indigo-900'" class="capitalize font-medium">list PO</span>
            </div>
        </router-link>
        <router-link :to="baseURL+'/report/other'" exact v-slot="{ isExactActive }">
            <div :class="isExactActive ? 'border-indigo-900' : 'border-gray-400 hover:border-indigo-900'" class="group cursor-pointer px-4 py-1 rounded-full bg-white border-2">
                <span :class="isExactActive ? 'text-indigo-900' : 'text-gray-400 group-hover:text-indigo-900'" class="capitalize font-medium">other report</span>
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
            baseURL: ""
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
        
    }
}
</script>