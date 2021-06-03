<template>
    <div class="h-fit-10--5 overflow-y-auto overflow-x-hidden scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4">
                <div class="mb-4">
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
                            <div class="flex flex-col sm:flex-row justify-start items-center">
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
            <div class="col-span-2 flex items-center">
                <button @click="getData" class="text-base capitalize mt-4 py-1.5 px-4 bg-indigo-600 rounded whitespace-nowrap font-normal text-white tracking-wide hover:bg-indigo-500 focus:outline-none">get data</button>
            </div>
        </div>
        <MyTable :obj="objTable" @exportexcel="exportExcel"></MyTable>
    </div>
</template>
<script>
import MyTable from "../core/Table.vue";
import moment from 'moment';
import { JSONToEXCELConvertor } from '../../assets/js/exportExcel';
import { mv } from "../../assets/js/mv";
import { getCookie, panggilsafe } from "../../assets/js/umum";

export default {
    components: {
        MyTable,
    },
    data: function () {
        return{
            displayName: "",
            userID: "",
            tipeLogin: "",
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
           
            objTable: {
                tabledata:{
                    columns: [{
                        id : "TglTrans",
                        deskripsi : "Tanggal Transaksi",
                        tipedata : "string"
                    },{
                        id : "ID_VAC",
                        deskripsi : "VA Number",
                        tipedata : "string"
                    },{
                        id : "Bank",
                        deskripsi : "Bank",
                        tipedata : "string"
                    },{
                        id : "TotalAmount",
                        deskripsi : "Total",
                        tipedata : "number"
                    }],
                    rows: [],
                    isLoadData: false,
                    isExport: true
                },
            },
        }
    },

    computed: {

    },

    methods: {
        updateCurrentPage() {
            this.currentPage = 1;
        },

        formatTanggal(val) {
            return val ? moment(val).format('DD MMM YYYY') : '-';
        },

        getData() {
            this.objTable.tabledata.rows = [];
            this.objTable.tabledata.isLoadData = true;
            let amv = new mv();

            amv.SetData3(2, 1, moment(this.range.start).format('YYYYMMDD'));
            amv.SetData3(3, 1, moment(this.range.end).format('YYYYMMDD'));
            amv.SetData3(1, 1, this.userID)//102599 / 1228)//

            var aoth = {
                sid: "",
                serverdb: "1000",
                sp: "FI.VAC2_RptPay",
                mvitem: amv.Contents(),
                action: "1",
                othval: "OI",
                key: "",
            }

            panggilsafe(aoth)
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

        exportExcel() {
            let excel = [];
            let tglawal = moment(this.range.start).format('YYYYMMDD')
            let tglakhir = moment(this.range.end).format('YYYYMMDD')
            let filename = "Report_Hist_Pembayaran_"+tglawal+"_"+tglakhir

            this.objTable.tabledata.rows.forEach(data => {
                let adata = {
                    tgl_transaksi: data.TglTrans,
                    va_number: data.ID_VAC,
                    bank: data.Bank,
                    total: data.TotalAmount,
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