<template>
    <div :class="isMobile ? '' : 'scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'" class="h-fit-10--5 overflow-y-auto overflow-x-hidden">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-4">
                <div class="md:mb-4">
                    <span class="block text-gray-700 text-md text-left font-medium mb-2 capitalize">pilih periode</span>
                    <v-date-picker
                    v-model="range"
                    mode="date"
                    color="purple"
                    :columns="2"
                    :attributes="dateAttributes"
                    :masks="masks"
                    is-range>
                        <template v-slot="{ inputValue, inputEvents, isDragging }">
                            <div class="flex flex-row justify-start items-center">
                                <div class="relative flex-grow">
                                    <svg class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <input class="flex-grow pl-8 pr-2 py-2 text-sm bg-gray-100 border rounded w-full focus:outline-none"
                                    :class="isDragging ? 'text-gray-600' : 'text-gray-500'"
                                    :value="inputValue.start"
                                    v-on="inputEvents.start" />
                                </div>
                                <span class="flex-shrink-0 m-2">
                                    <svg class="w-4 h-4 stroke-current text-gray-600" viewBox="0 0 24 24" >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                                <div class="relative flex-grow">
                                    <svg class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" ></path>
                                    </svg>
                                    <input class="flex-grow pl-8 pr-2 py-2 text-sm bg-gray-100 border rounded w-full focus:outline-none"
                                    :class="isDragging ? 'text-gray-600' : 'text-gray-500'"
                                    :value="inputValue.end"
                                    v-on="inputEvents.end" />
                                </div>
                            </div>
                        </template>
                    </v-date-picker>
                </div>
            </div>
            <div class="col-span-12 md:col-span-2 flex items-center mb-4 md:mb-0">
                <button @click="getData" class="w-full text-base capitalize md:mt-4 py-1.5 px-4 bg-indigo-600 rounded whitespace-nowrap font-normal text-white tracking-wide hover:bg-indigo-500 focus:outline-none">get data</button>
            </div>
            <!-- <div v-if="objTable.tabledata.rows.length" class="col-span-6 flex items-center pt-4">
                <div class="asd bg-gray-100 px-3 py-2 rounded-md mr-4 text-sm">
                    <strong class="cs text-gray-500 font-medium">Total Piutang</strong>
                    <span class="ml-2 p-1 px-2 font-semibold rounded-full text-xs bg-pink-600 text-white tracking-wider">Rp. {{numeralFormat(totalPiutang, '0,0[.]00')}}</span>
                </div>
            </div> -->
        </div>
        <MyTable :obj="objTable" @showlink="showLink" @exportexcel="exportExcel"></MyTable>
    </div>
    <vue-final-modal v-model="showModal">
        <div class="flex justify-center items-center h-screen">
            <div class="h-100-10 w-3/4 bg-white px-4 pb-12 pt-3 rounded-lg relative">
                <div class="flex justify-end mb-3">
                    <span @click="showModal = false" class="cursor-pointer">
                        <svg class="icon line" width="16" height="16" id="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="19" y1="19" x2="5" y2="5" style="fill: none; stroke: rgb(107, 114, 128); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3;"></line><line x1="19" y1="5" x2="5" y2="19" style="fill: none; stroke: rgb(107, 114, 128); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3;"></line></svg>
                    </span>
                </div>
                <div class="w-full h-full px-4 overflow-y-auto scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <MyTable :obj="objTableDetail"></MyTable>
                </div>
                <div class="h-8 absolute bottom-0 left-0 w-full"></div>
            </div>
        </div>
    </vue-final-modal>
</template>
<script>
import MyTable from "../core/Table.vue";
import moment from 'moment';
import { JSONToEXCELConvertor } from '../../assets/js/exportExcel';
import { mv } from "../../assets/js/mv";
import { getCookie, panggilorc } from "../../assets/js/umum";

export default {
    components: {
        MyTable,
    },
    data: function () {
        return{
            displayName: "",
            userID: "",
            tipeLogin: "",
            showModal: false,
            filePhoto: "",
            aMonth: null,
            range: {
                start: new Date().setDate(new Date().getDate()-14),
                end: new Date()
            },
            masks: {
                input: 'DD MMM YYYY',
            },
            dateAttributes: [{
                key: 'today',
                highlight: {
                    color: 'purple',
                    fillMode: 'outline',
                },
                dates: new Date(),
            }],
            
            objTableDetail: {
                tabledata:{
                    columns: [{
                        id : "AT11",
                        deskripsi : "Item Code",
                        tipedata : "string"
                    },{
                        id : "AT12",
                        deskripsi : "Item Description",
                        tipedata : "string"
                    },{
                        id : "AT13",
                        deskripsi : "UoM",
                        tipedata : "string"
                    },{
                        id : "AT14",
                        deskripsi : "QTY",
                        tipedata : "number"
                    },{
                        id : "AT15",
                        deskripsi : "Amount",
                        tipedata : "number"
                    }],
                    rows: [],
                    header: [],
                    isLoadData: false,
                    isExport: false,
                    footer: {
                        potongan: 0,
                        ppn: 0,
                        subjumlah: 0
                    }
                },
            },
            objTable: {
                tabledata:{
                    columns: [{
                        id : "AT11",
                        deskripsi : "No Invoice",
                        tipedata : "link_detail"
                    },
                    {
                        id : "AT12",
                        deskripsi : "Tipe",
                        tipedata : "string"
                    },{
                        id : "AT13",
                        deskripsi : "Tgl Invoice",
                        tipedata : "date"
                    },{
                        id : "AT14",
                        deskripsi : "Amount",
                        tipedata : "number"
                    },{
                        id : "AT15",
                        deskripsi : "Sudah Dibayar",
                        tipedata : "number"
                    },{
                        id : "AT16",
                        deskripsi : "Sisa Piutang",
                        tipedata : "number"
                    },{
                        id : "AT19",
                        deskripsi : "Surat Jalan",
                        tipedata : "pdf_from_sj"
                    }
                    ,{
                        id : "AT17",
                        deskripsi : "Invoice",
                        tipedata : "pdf_from_inv"
                    },{
                        id : "AT18",
                        deskripsi : "Faktur Pajak",
                        tipedata : "pdf_from_fp"
                    }],
                    rows: [],
                    isLoadData: false,
                    isExport: true
                },
            },
        }
    },

    computed: {
        isMobile() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }
        // totalAmount() {
        //     let total = 0
        //     this.objTable.tabledata.rows.forEach(element => {
        //         let val = element.AT14 ? element.AT14 : 0;
        //         total += val;
        //     });
        //     return total;
        // }
        // totalPiutang() {
        //     let total = 0
        //     this.objTable.tabledata.rows.forEach(element => {
        //         let val = element.AT16 ? element.AT16 : 0;
        //         total += val;
        //     });
        //     return total;
        // }
    },

    methods: {
        formatTanggal(val) {
            return val ? moment(val).format('DD MMM YYYY') : '-';
        },

        getData() {
            this.objTable.tabledata.rows = [];
            this.objTable.tabledata.isLoadData = true;
            let amv = new mv();

            amv.SetData3(1, 1, moment(this.range.start).format('YYYYMMDD'));
            amv.SetData3(2, 1, moment(this.range.end).format('YYYYMMDD'));
            amv.SetData3(3, 1, this.userID);

            var aoth = {
                sid: "",
                serverdb: "1000ORC",
                sp: "XITAR_READ_LIST_INV_HEAD",
                mvitem: amv.Contents(),
                action: "1",
                othval: "",
                key: "",
            }
            console.log(amv.Contents());
            panggilorc(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    this.objTable.tabledata.rows = iMsg.data.nilai.Table;
                    this.objTable.tabledata.isLoadData = false;
                } else {
                    alert(iMsg.errors[0].message);
                    this.objTable.tabledata.isLoadData = false;
                }
            })
            .catch((iMsg) => {
                console.log(iMsg)
                this.objTable.tabledata.isLoadData = false;
            });
        },

        getDetail(id) {
            this.objTableDetail.tabledata.rows = [];
            this.objTableDetail.tabledata.isLoadData = true;
            
            this.objTableDetail.tabledata.footer.potongan = 0
            this.objTableDetail.tabledata.footer.ppn = 0
            this.objTableDetail.tabledata.footer.subjumlah = 0
            
            let amv = new mv();

            amv.SetData3(1, 1, id);

            var aoth = {
                sid: "",
                serverdb: "1000ORC",
                sp: "XITAR_READ_LIST_INV_DTL",
                mvitem: amv.Contents(),
                action: "1",
                othval: "",
                key: "",
            }

            panggilorc(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    iMsg.data.nilai.Table.forEach( item => {
                        if (item.AT12.includes("1508-")) {
                            this.objTableDetail.tabledata.footer.potongan += item.AT15;
                        } else if (item.AT12 === "TAX") {
                            this.objTableDetail.tabledata.footer.ppn = item.AT15;
                        } else {
                            this.objTableDetail.tabledata.footer.subjumlah += item.AT15;
                            this.objTableDetail.tabledata.rows.push(item); 
                        }
                    });
                    this.objTableDetail.tabledata.isLoadData = false;
                } else {
                    alert(iMsg.errors[0].message);
                    this.objTableDetail.tabledata.isLoadData = false;
                }
            })
            .catch((iMsg) => {
                console.log(iMsg)
                this.objTableDetail.tabledata.isLoadData = false;
            });
        },

        showLink(id) {
            this.showModal = true;
            this.getDetail(id);
        },

        exportExcel() {
            let excel = [];
            let tglawal = moment(this.range.start).format('YYYYMMDD')
            let tglakhir = moment(this.range.end).format('YYYYMMDD')
            let filename = "Report_Invoice_"+tglawal+"_"+tglakhir

            this.objTable.tabledata.rows.forEach(data => {
                let adata = {
                    no_invoice: data.AT11,
                    tipe: data.AT12,
                    tgl_invoice: data.AT13 ? moment(data.AT13).format('DD MMM YYYY') : '-',
                    total_invoice: data.AT14,
                    sudah_dibayar: data.AT15,
                    sisa_piutang: data.AT16,
                    pdf_surat_jalan: data.AT19 ? "https://b2b.ultrajaya.co.id/foto/pdfdo/"+data.AT19 : "",
                    pdf_invoice: data.AT17 ? "https://b2b.ultrajaya.co.id/foto/pdfinv/"+data.AT17 : "",
                    pdf_faktur_pajak: data.AT18 ? "https://b2b.ultrajaya.co.id/foto/pdfpajak/"+data.AT18 : ""
                }

                excel.push(adata);
            });
            
            JSONToEXCELConvertor(JSON.stringify(excel), filename, true);
        }
    },

    beforeMount() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
    },

    mounted() {
        this.getData();
    }
}
</script>