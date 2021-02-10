<template>
    <div class="w-full h-screen bg-white p-4">
        <div class="grid grid-cols-6 gap-4 h-full">
            <!-- grid kiri menu -->
            <div class="">
                <div class="h-full my-bg-indigo rounded-2xl shadow-lg relative">
                    <!-- logo header -->
                    <div class="absolute top-0 left-0 w-full p-4 rounded-t-2xl my-bg-indigo">
                        <div class="flex justify-center items-center">
                            <div class="w-12 mr-3">
                                <img class="w-full" src="../assets/logo-uj-white.png" alt="">
                            </div>
                            <div class="h-100 border-l border-gray-300 pl-3">
                                <h4 class="text-xs tracking-wider my-text-white font-normal">Ultra's</h4>
                                <h4 class="text-xs tracking-wider my-text-white font-normal">Integrated</h4>
                                <h4 class="text-xs tracking-wider my-text-white font-normal">System</h4>
                            </div>
                        </div>
                    </div>

                    <!-- main menu -->
                    <div class="px-4 pt-24 pb-20 h-full">
                        <ul>
                            <router-link to="/dashboard" exact v-slot="{ href, route, navigate, isActive, isExactActive }">
                                <li :class="[isActive && 'router-link-active', isExactActive ? 'my-bg-white' : 'hover:bg-opacity-20 hover:bg-purple-100']" class="rounded-xl cursor-pointer mb-2">
                                    <div class="flex items-center p-2">
                                        <div v-if="isExactActive" class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="dashboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <rect x="3" y="3" width="7" height="9" rx="1" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <rect x="14" y="3" width="7" height="5" rx="1" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <rect x="3" y="16" width="7" height="5" rx="1" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <rect x="14" y="12" width="7" height="9" rx="1" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                            </svg>
                                        </div>
                                        <div v-else class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="dashboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <rect x="3" y="3" width="7" height="9" rx="1" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <rect x="14" y="3" width="7" height="5" rx="1" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <rect x="3" y="16" width="7" height="5" rx="1" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <rect x="14" y="12" width="7" height="9" rx="1" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                            </svg>
                                        </div>
                                        <span :class="isExactActive ? 'my-text-indigo font-semibold' : 'my-text-white font-normal'" class="capitalize tracking-wider text-sm">dashboard</span>
                                    </div>
                                </li>
                            </router-link>
                            <router-link to="/report" exact v-slot="{ href, route, navigate, isActive, isExactActive }">
                                <li :class="[isActive && 'router-link-active', isExactActive ? 'my-bg-white' : 'hover:bg-opacity-20 hover:bg-purple-100']" class="rounded-xl cursor-pointer mb-2">
                                    <div class="flex items-center p-2">
                                        <div v-if="isExactActive" class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="present-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M4,4H20a0,0,0,0,1,0,0V16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V4A0,0,0,0,1,4,4Z" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                                <line x1="3" y1="4" x2="21" y2="4" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="10.4" y1="17" x2="8" y2="20" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="13.6" y1="17" x2="16" y2="20" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="12" y1="13" x2="12" y2="8" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="16" y1="13" x2="16" y2="10" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="8" y1="13" x2="8" y2="10" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                            </svg>
                                        </div>
                                        <div v-else class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="present-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M4,4H20a0,0,0,0,1,0,0V16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V4A0,0,0,0,1,4,4Z" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                                <line x1="3" y1="4" x2="21" y2="4" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="10.4" y1="17" x2="8" y2="20" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="13.6" y1="17" x2="16" y2="20" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="12" y1="13" x2="12" y2="8" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="16" y1="13" x2="16" y2="10" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                                <line x1="8" y1="13" x2="8" y2="10" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
                                            </svg>
                                        </div>
                                        <span :class="isExactActive ? 'my-text-indigo font-semibold' : 'my-text-white font-normal'" class="capitalize tracking-wider text-sm">report</span>
                                    </div>
                                </li>
                            </router-link>
                            <router-link to="/transaksi" exact v-slot="{ href, route, navigate, isActive, isExactActive }">
                                <li :class="[isActive && 'router-link-active', isExactActive ? 'my-bg-white' : 'hover:bg-opacity-20 hover:bg-purple-100']" class="rounded-xl cursor-pointer mb-2">
                                    <div class="flex items-center p-2">
                                        <div v-if="isExactActive" class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="money-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <rect x="3" y="5" width="14" height="10" rx="1" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <path d="M17,9h3a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V15" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                                <circle cx="10" cy="10" r="1" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle>
                                            </svg>
                                        </div>
                                        <div v-else class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="money-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <rect x="3" y="5" width="14" height="10" rx="1" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect>
                                                <path d="M17,9h3a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V15" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                                <circle cx="10" cy="10" r="1" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle>
                                            </svg>
                                        </div>
                                        <span :class="isExactActive ? 'my-text-indigo font-semibold' : 'my-text-white font-normal'" class="capitalize tracking-wider text-sm">Transaksi</span>
                                    </div>
                                </li>
                            </router-link>
                            <router-link to="/master" exact v-slot="{ href, route, navigate, isActive, isExactActive }">
                                <li :class="[isActive && 'router-link-active', isExactActive ? 'my-bg-white' : 'hover:bg-opacity-20 hover:bg-purple-100']" class="rounded-xl cursor-pointer mb-2">
                                    <div class="flex items-center p-2">
                                        <div v-if="isExactActive" class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="folder-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M3,20V5A1,1,0,0,1,4,4H8a1,1,0,0,1,.71.29l2.41,2.42a1,1,0,0,0,.71.29H17a1,1,0,0,1,1,1v3" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                                <polygon points="18 20 21 11 7 11 3 20 18 20" style="fill: none; stroke: rgb(92, 93, 151); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon>
                                            </svg>
                                        </div>
                                        <div v-else class="mr-2">
                                            <svg class="icon line" width="24" height="24" id="folder-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M3,20V5A1,1,0,0,1,4,4H8a1,1,0,0,1,.71.29l2.41,2.42a1,1,0,0,0,.71.29H17a1,1,0,0,1,1,1v3" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                                <polygon points="18 20 21 11 7 11 3 20 18 20" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon>
                                            </svg>
                                        </div>
                                        <span :class="isExactActive ? 'my-text-indigo font-semibold' : 'my-text-white font-normal'" class="capitalize tracking-wider text-sm">Master</span>
                                    </div>
                                </li>
                            </router-link>
                        </ul>
                    </div>

                    <!-- button logout -->
                    <div class="absolute bottom-0 left-0 w-full rounded-b-2xl my-bg-indigo p-4">
                        <div class="flex border-2 border-transparent hover:border-gray-200 items-center justify-center p-2 cursor-pointer bg-opacity-20 bg-purple-100 rounded-xl">
                            <div class="mr-2">
                                <svg class="icon line" width="24" height="24" id="sign-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M20.24,19.19l-6,1.5a1,1,0,0,1-1.24-1V4.28a1,1,0,0,1,1.24-1l6,1.5a1,1,0,0,1,.76,1V18.22A1,1,0,0,1,20.24,19.19ZM13,6H10A1,1,0,0,0,9,7V8m0,8v1a1,1,0,0,0,1,1h3" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                    <path d="M5,15,2,12,5,9M2,12H9" style="fill: none; stroke: rgb(241, 240, 242); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
                                </svg>
                            </div>
                            <span class="capitalize my-text-white font-normal text-sm tracking-wider">sign out</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- grid kanan konten -->
            <div class="col-span-5">
                <div class="h-full relative">
                    <!-- header konten -->
                    <div class="block w-full absolute top-0 left-0">
                        <div class="flex justify-between">
                            <div class="flex items-center py-2 px-4">
                                <span class="font-semibold tracking-wide capitalize text-indigo-900 text-xl">{{judul}}</span>
                            </div>
                            <div class="flex items-center py-2 px-4 cursor-pointer rounded-xl hover:bg-purple-50 border-2 border-purple-50 hover:border-purple-200">
                                <h4 class="mr-4 font-light text-indigo-800 capitalize tracking-wide">hi, eichiro oda</h4>
                                <div>
                                    <svg id="bold" enable-background="new 0 0 32 32" 
                                        height="36" 
                                        viewBox="0 0 32 32" 
                                        width="36" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z" fill="#f5e6fe"/>
                                        <circle cx="16" cy="12" fill="#be63f9" r="2.667"/>
                                        <path d="m18.167 16h-4.334c-1.746 0-3.167 1.421-3.167 3.167v1.667c0 .276.224.5.5.5h9.667c.276 0 .5-.224.5-.5v-1.667c.001-1.746-1.42-3.167-3.166-3.167z" fill="#be63f9"/>
                                        <g fill="#d9a4fc">
                                            <path d="m11.333 8h-1.333c-1.103 0-2 .897-2 2v1.333c0 .369.298.667.666.667s.667-.298.667-.667v-1.333c0-.368.299-.667.667-.667h1.333c.368 0 .667-.298.667-.666s-.299-.667-.667-.667z"/>
                                            <path d="m11.333 22.667h-1.333c-.368 0-.667-.299-.667-.667v-1.333c0-.369-.299-.667-.667-.667s-.666.298-.666.667v1.333c0 1.103.897 2 2 2h1.333c.368 0 .667-.298.667-.667s-.299-.666-.667-.666z"/>
                                            <path d="m22 8h-1.333c-.368 0-.667.298-.667.667s.299.667.667.667h1.333c.368 0 .667.299.667.667v1.333c0 .368.299.667.667.667s.666-.299.666-.668v-1.333c0-1.103-.897-2-2-2z"/>
                                            <path d="m23.334 20c-.368 0-.667.298-.667.667v1.333c0 .368-.299.667-.667.667h-1.333c-.368 0-.667.298-.667.667s.299.666.667.666h1.333c1.103 0 2-.897 2-2v-1.333c0-.369-.298-.667-.666-.667z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- body konten -->
                    <div class="pt-20 px-6 pb-4">
                        <router-view />
                        <!-- <span>asdasd</span> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return{
            text1: "",
            judul: ""
        }
    },

    computed: {
        
    },

    watch: {
        '$route': function(value) {
            this.judul = value.name;
        }
    },

    methods: {
        gotoPage() {
            window.location.href = "./tes/"
        }
    },

    mounted() {
        
    }
}
</script>