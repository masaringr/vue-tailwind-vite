<template>
    <div class="bg-white h-screen">
        <header class="z-10 fixed w-full flex justify-between px-4 md:px-16 py-4 border-b border-gray-200 bg-white">
            <div class="flex items-center cursor-pointer">
                <div class="w-8 md:w-12 mr-4">
                    <img class="w-full" src="./assets/logo-uj.png" alt="">
                </div>
                <div class="hidden md:block h-100 md:border-l border-gray-200 md:pl-4">
                    <h4 class="text-xs tracking-wider text-gray-600 font-semibold">Ultra's</h4>
                    <h4 class="text-xs tracking-wider text-gray-600 font-semibold">Integrated</h4>
                    <h4 class="text-xs tracking-wider text-gray-600 font-semibold">System</h4>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <a href="#home" class="md:mr-6 tracking-wide text-indigo-800 hover:text-indigo-500 font-semibold text-sm md:text-base">Home</a>
                <a href="#product" @click="toProduct" class="md:mr-6 tracking-wide text-indigo-800 hover:text-indigo-500 font-semibold text-sm md:text-base">Product</a>
                <a href="#mitra" class="md:mr-6 tracking-wide text-indigo-800 hover:text-indigo-500 font-semibold text-sm md:text-base">Mitra</a>
                <div class="md:border-l border-gray-200 md:pl-6">
                    <a :href="baseURL+'/login.html'" class="flex flex-row items-center w-auto bg-indigo-500 rounded-lg font-light text-white px-4 py-2 hover:bg-indigo-400 focus:outline-none text-sm md:text-base">
                        Sign In
                        <svg class="hidden md:block icon line ml-2" width="24" height="24" id="sign-in-alt2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.24,19.19l-6,1.5a1,1,0,0,1-1.24-1V4.28a1,1,0,0,1,1.24-1l6,1.5a1,1,0,0,1,.76,1V18.22A1,1,0,0,1,20.24,19.19ZM10,6h3m0,12H10" style="fill: none; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><path d="M6,9l3,3L6,15m3-3H2" style="fill: none; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path></svg>
                    </a>
                </div>
            </div>
        </header>
        <main class="px-6 md:px-16 h-full">
            <section id="home" class="pt-20 grid grid-cols-12 gap-3 h-full items-center">
                <div class="col-span-12 md:col-span-6">
                    <div class="md:pl-12">
                        <h2 class="font-semibold text-4xl tracking-wide text-gray-800 mb-3">Portal Penghubung<br>Mitra dengan Ultrajaya</h2>
                        <h4 class="font-light text-lg tracking-wider text-gray-500">Semua aktifitas Mitra Ultrajaya<br>
                            akan difasilitasi dengan portal ini.<br>
                            dengan demikian, kualitas kerjasama<br>
                            antar Mitra dan Ultrajaya<br>
                            bisa lebih ditingkatkan.
                        </h4>
                    </div>
                </div>
                <div class="hidden md:block col-span-12 md:col-span-6">
                    <div class="w-10/12">
                        <img class="w-100 h-auto" src="./assets/bg-home.png" alt="">
                    </div>
                </div>
            </section>
            <section id="div-product" class="bg-gray-100 -mx-6 pb-12">
                <div class="w-full text-center py-6">
                    <h2 class="text-gray-800 font-bold text-3xl capitalize tracking-wide">our product</h2>
                </div>
                <div class="grid grid-cols-12 gap-3 text-center py-4 px-4 md:px-16">
                    <div class="col-span-12 md:col-span-4 p-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div class="bg-white rounded-md shadow-md p-4">
                            <div class="h-60 w-auto mb-4">
                                <img class="w-full h-full img-fit-div rounded" src="./assets/thumb-westgate.jpg" alt="">
                            </div>
                            <h4 class="capitalize font-semibold mb-2 text-indigo-800">Westgate</h4>
                            <p class="font-extralight text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4 p-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div class="bg-white rounded-md shadow-md p-4">
                            <div class="h-60 w-auto mb-4">
                                <img class="w-full h-full img-fit-div rounded" src="./assets/thumb-safemobile.jpg" alt="">
                            </div>
                            <h4 class="capitalize font-semibold mb-2 text-indigo-800">safe mobile</h4>
                            <p class="font-extralight text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4 p-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div class="bg-white rounded-md shadow-md p-4">
                            <div class="h-60 w-auto mb-4">
                                <img class="w-full h-full img-fit-div rounded" src="./assets/thumb-epod.jpg" alt="">
                            </div>
                            <h4 class="capitalize font-semibold mb-2 text-indigo-800">E-POD</h4>
                            <p class="font-extralight text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mitra" class="-mx-6 pb-16">
                <div class="w-full text-center py-6">
                    <h2 class="text-gray-800 font-bold text-3xl capitalize tracking-wide">our mitra</h2>
                </div>
                <div class="py-4 px-4 md:px-16">
                    <div class="flex flex-row flex-nowrap items-center overflow-auto">
                        <div class="w-96 md:w-40 px-4">
                            <img class="w-full h-auto" src="./assets/logo-ark.png" alt="">
                        </div>
                        <div class="w-96 md:w-40 px-4">
                            <img class="w-full h-auto" src="./assets/logo-orc.png" alt="">
                        </div>
                        <div class="w-96 md:w-40 px-4">
                            <img class="w-full h-auto" src="./assets/logo-campina.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="-mx-6 py-4 border-t border-gray-200 text-center">
                <h4 class="font-light text-md text-gray-500">{{yearNow}} &copy; it@ultrajaya.co.id</h4>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    data: function () {
        return{
            text1: "",
            baseURL: "/uis"
        }
    },

    computed: {
        yearNow() {
            let date = new Date;
            return date.getFullYear()
        }
    },

    methods: {
        testclick() {
            var nama = 'ari nugroho';
            alert(nama);
        },

        toProduct() {
            const elmnt = document.getElementById('home');
            let aHeight = elmnt.offsetHeight;
            window.scrollTo({
                top: (aHeight - 80),
                behavior: 'smooth',
            })
        }
    }
}

</script>