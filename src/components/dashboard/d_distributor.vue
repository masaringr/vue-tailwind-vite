<template>
  
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

    methods: {
        getData() {
            
        }
    }

    beforeMount() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
    }
}
</script>