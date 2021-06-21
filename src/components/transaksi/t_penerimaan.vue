<template>
  <div class="h-fit-10--5 bg-gray-50 px-6 py-4">
      <div class="h-full mx-auto max-w-sm bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
            <div class="w-full p-6">
                <form>
                    <div class="grid grid-cols-12 gap-3">
                        <div class="col-span-12">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12">
                                    <div class="relative mb-4">
                                        <label
                                        for="suratjalan"
                                        class="block mb-1 text-gray-600 font-semibold text-md"
                                        >Surat Jalan</label
                                        >
                                        <input
                                        id="suratjalan"
                                        type="text"
                                        placeholder=""
                                        class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                                        />
                                    </div>
                                    <div class="relative mb-4">
                                        <div class="border-2 border-dashed rounded-md p-6">
                                            <div class="flex flex-col justify-center items-center cursor-pointer">
                                                <span v-if="isMobile">
                                                    <svg class="icon line" width="48" height="48" id="photo-camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="primary" d="M21,7V19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V7A1,1,0,0,1,4,6H8l.72-1.45A1,1,0,0,1,9.62,4h4.76a1,1,0,0,1,.9.55L16,6h4A1,1,0,0,1,21,7Zm-9,3a3,3,0,1,0,3,3A3,3,0,0,0,12,10Z" style="fill: none; stroke: rgb(179, 180, 183); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path></svg>
                                                </span>
                                                <span v-else>
                                                    <svg class="icon line" width="48" height="48" id="folder-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,20V5A1,1,0,0,1,4,4H8a1,1,0,0,1,.71.29l2.41,2.42a1,1,0,0,0,.71.29H17a1,1,0,0,1,1,1v3" style="fill: none; stroke: rgb(179, 180, 183); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><polygon points="18 20 21 11 7 11 3 20 18 20" style="fill: none; stroke: rgb(179, 180, 183); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polygon></svg>
                                                </span>
                                                <span class="text-gray-400 font-medium text-sm capitalize">upload bukti penerimaan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <button
                                        type="submit"
                                        @click="submit"
                                        :disabled="iconLoading"
                                        class="disabled:bg-indigo-400 disabled:cursor-not-allowed w-full flex justify-center items-center bg-indigo-800 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-700 focus:outline-none"
                                    >
                                        Submit
                                        <span v-if="iconLoading" class="ml-2 w-6 h-6"
                                        ><svg
                                            width="25"
                                            viewBox="-2 -2 42 42"
                                            xmlns="http://www.w3.org/2000/svg"
                                            stroke="#FFFFFF"
                                            class="w-full h-full"
                                        >
                                            <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(1 1)" stroke-width="4">
                                                <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                                <animateTransform
                                                    attributeName="transform"
                                                    type="rotate"
                                                    from="0 18 18"
                                                    to="360 18 18"
                                                    dur="1s"
                                                    repeatCount="indefinite"
                                                ></animateTransform>
                                                </path>
                                            </g>
                                            </g></svg
                                        ></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return{
        iconLoading: false,
        }
    },

    computed: {
        isMobile() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }
    }, 

    methods: {
        submit() {

        }
    }
}
</script>