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
            <div v-if="objTable.tabledata.rows.length" class="col-span-6 flex items-center pt-4">
                <div class="asd bg-gray-100 px-3 py-2 rounded-md mr-4 text-sm">
                    <strong class="cs text-gray-500 font-medium">Total Piutang</strong>
                    <span class="ml-2 p-1 px-2 font-semibold rounded-full text-xs bg-pink-600 text-white tracking-wider">Rp. {{numeralFormat(totalPiutang, '0,0[.]00')}}</span>
                </div>
            </div>
        </div>
        <MyTable :obj="objTable" @showlink="showLink"></MyTable>
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
                        tipedata : "integer"
                    },{
                        id : "AT15",
                        deskripsi : "Amount",
                        tipedata : "number"
                    }],
                    rows: [],
                    header: [],
                    isLoadData: false
                },
            },
            objTable: {
                tabledata:{
                    columns: [{
                        id : "AT11",
                        deskripsi : "No Invoice",
                        tipedata : "link_detail"
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
                        id : "AT17",
                        deskripsi : "PDF",
                        tipedata : "pdf_from_b2b"
                    },{
                        id : "AT18",
                        deskripsi : "Faktur Pajak",
                        tipedata : "pdf_from_b2b"
                    }],
                    rows: [],
                    isLoadData: false
                },
            },
        }
    },

    computed: {
        // totalAmount() {
        //     let total = 0
        //     this.objTable.tabledata.rows.forEach(element => {
        //         let val = element.AT14 ? element.AT14 : 0;
        //         total += val;
        //     });
        //     return total;
        // }
        totalPiutang() {
            let total = 0
            this.objTable.tabledata.rows.forEach(element => {
                let val = element.AT16 ? element.AT16 : 0;
                total += val;
            });
            return total;
        }
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
                    this.objTableDetail.tabledata.rows = iMsg.data.nilai.Table;
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