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
                    <input v-model="uname" id="username" type="text" placeholder="" 
                        class="border-2 font-medium text-gray-500 border-gray-300 appearance-none rounded-md w-full px-3 py-2 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-600">
                </div>
                <div class="relative mb-4">
                    <label for="password" class="block mb-1 text-gray-600 font-semibold text-md">Password</label>
                    <input v-model="pwd" id="password" type="password" placeholder="" 
                        class="border-2 font-medium text-gray-500 border-gray-300 appearance-none rounded-md w-full px-3 py-2 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-600">
                </div>
                <div class="text-right mb-8">
                    <a @click="forgotPwd" class="cursor-pointer text-indigo-800 hover:text-indigo-600 text-md">forgot your password?</a>
                </div>
                <div>
                    <button @click="signin" class="w-full bg-indigo-800 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-700 focus:outline-none">Sign in</button>
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
            pwd: "",
            baseURL: ""
        }
    },

    computed: {
        
    },

    methods: {
        signin() {
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
                if (iMsg.isError == true) {
                    alert(iMsg.errMsg);
                } else {
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