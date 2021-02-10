<template>
    <div class="w-full h-screen flex justify-center items-center bg-gray-50 px-4">
        <div class="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
            <div class="text-center mb-6 px-6 pt-4">
                <div class="flex justify-center w-full"> 
                    <div class="w-16 mr-4 mb-6">
                        <img class="w-full" src="../assets/logo-uj.png" alt="">
                    </div>
                </div>
                <h3 class="font-semibold text-xl text-indigo-900">Sign in to your account</h3>
            </div>
            <div class="px-6 py-8">
                <div class="relative mb-4">
                    <label for="username" class="block mb-1 text-gray-600 font-semibold text-md">Username</label>
                    <input v-model="uname" id="username" type="text" placeholder="" 
                        class="border-2 font-medium text-gray-500 border-gray-300 appearance-none rounded-md w-full px-3 py-2 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-600">
                </div>
                <div class="relative mb-4">
                    <label for="password" class="block mb-1 text-gray-600 font-semibold text-md">Password</label>
                    <input v-model="pwd" id="password" type="password" placeholder="" 
                        class="border-2 font-medium text-gray-500 border-gray-300 appearance-none rounded-md w-full px-3 py-2 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-600">
                </div>
                <div class="text-right mb-8">
                    <a @click="forgotPwd" class="cursor-pointer text-indigo-500 hover:text-indigo-400 text-md">forgot your password?</a>
                </div>
                <div>
                    <button @click="signin" class="w-full bg-indigo-500 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-400 focus:outline-none">Sign in</button>
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
            uname: "",
            pwd: ""
        }
    },

    computed: {
        
    },

    methods: {
        signin() {
            alert('go '+ this.uname+"-"+this.pwd);
        },

        forgotPwd() {
            alert('forgot pwd');
        }
    },

    mounted() {
        
    }
}
</script>