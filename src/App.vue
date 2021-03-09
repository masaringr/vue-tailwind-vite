<template>
    <div class="bg-white h-screen">
        <header class="z-10 fixed w-full flex justify-between px-16 py-4 border-b border-gray-200 bg-white">
            <div class="flex items-center cursor-pointer">
                <div class="w-12 mr-4">
                    <img class="w-full" src="./assets/logo-uj.png" alt="">
                </div>
                <div class="h-100 border-l border-gray-200 pl-4">
                    <h4 class="text-xs tracking-wider text-gray-600 font-semibold">Ultra's</h4>
                    <h4 class="text-xs tracking-wider text-gray-600 font-semibold">Integrated</h4>
                    <h4 class="text-xs tracking-wider text-gray-600 font-semibold">System</h4>
                </div>
            </div>
            <div class="flex items-center">
                <a href="#home" class="mr-6 tracking-wide text-indigo-800 hover:text-indigo-500 font-semibold">Home</a>
                <a href="#product" @click="toProduct" class="mr-6 tracking-wide text-indigo-800 hover:text-indigo-500 font-semibold">Product</a>
                <a href="#mitra" class="mr-6 tracking-wide text-indigo-800 hover:text-indigo-500 font-semibold">Mitra</a>
                <div class="border-l border-gray-200 pl-6">
                    <a :href="baseURL+'/login.html'" class="w-24 bg-indigo-500 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-400 focus:outline-none">Sign in</a>
                </div>
            </div>
        </header>
        <main class="px-16 h-full">
            <section id="home" class="pt-20 grid grid-cols-2 gap-12 h-full items-center">
                <div class="flex justify-center">
                    <div class="pl-12">
                        <h2 class="font-semibold text-4xl tracking-wide text-gray-800 mb-3">Portal Penghubung<br>Mitra dengan Ultrajaya</h2>
                        <h4 class="font-light text-lg tracking-wider text-gray-500">Semua aktifitas Mitra Ultrajaya<br>
                            akan difasilitasi dengan portal ini.<br>
                            dengan demikian, kualitas kerjasama<br>
                            antar Mitra dan Ultrajaya<br>
                            bisa lebih ditingkatkan.
                        </h4>
                    </div>
                </div>
                <div class="flex justify-left">
                    <div class="w-10/12">
                        <img class="w-100 h-auto" src="./assets/bg-home.png" alt="">
                    </div>
                </div>
            </section>
            <section id="div-product" class="bg-gray-100 -mx-16 pb-12">
                <div class="w-full text-center py-6">
                    <h2 class="text-gray-800 font-bold text-3xl capitalize tracking-widest">our product</h2>
                </div>
                <div class="grid grid-cols-3 gap-12 text-center py-4 px-16">
                    <div class="p-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div class="bg-white rounded-md shadow-md p-4">
                            <div class="h-60 w-auto mb-4">
                                <img class="w-full h-full img-fit-div rounded" src="./assets/thumb-westgate.jpg" alt="">
                            </div>
                            <h4 class="capitalize font-semibold mb-2 text-indigo-800">Westgate</h4>
                            <p class="font-extralight text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="p-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div class="bg-white rounded-md shadow-md p-4">
                            <div class="h-60 w-auto mb-4">
                                <img class="w-full h-full img-fit-div rounded" src="./assets/thumb-safemobile.jpg" alt="">
                            </div>
                            <h4 class="capitalize font-semibold mb-2 text-indigo-800">safe mobile</h4>
                            <p class="font-extralight text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="p-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
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
            <section id="mitra" class="-mx-16 pb-16">
                <div class="w-full text-center py-6">
                    <h2 class="text-gray-800 font-bold text-3xl capitalize tracking-widest">our mitra</h2>
                </div>
                <div class="py-4 px-16">
                    <div class="flex items-center">
                        <div class="w-40 px-4">
                            <img class="w-full h-auto" src="./assets/logo-ark.png" alt="">
                        </div>
                        <div class="w-40 px-4">
                            <img class="w-full h-auto" src="./assets/logo-orc.png" alt="">
                        </div>
                        <div class="w-40 px-4">
                            <img class="w-full h-auto" src="./assets/logo-campina.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="-mx-16 py-4 border-t border-gray-200 text-center">
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
            baseURL: ""
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