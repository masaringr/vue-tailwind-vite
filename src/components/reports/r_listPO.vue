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
            <div class="flex items-center">
                <button @click="getData" class="text-base capitalize mt-4 py-1 px-4 bg-indigo-600 rounded whitespace-nowrap font-light text-white tracking-wider hover:bg-indigo-500 focus:outline-none">get data</button>
            </div>
        </div>
        <MyTable :obj="objTable" @showlink="getDetail"></MyTable>
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
                    <div v-cloak v-if="objDetailPO.tabledata.header.length > 0" class="rounded-lg bg-gray-100 p-4 mb-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="block">
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">PO No.</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].PO_NO}}</span>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">PO Date</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{formatTanggal(objDetailPO.tabledata.header[0].PO_Date)}}</span>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Quotation No.</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].QUOTATION_NO}}</span>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Currency</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].CURRENCY_CODE}}</span>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Pay Code</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].TOP_}}</span>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Note</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].Remaks}}</span>
                                </div>
                            </div>
                            <div class="block">
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Vendor</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <span class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].VENDOR_NAME}}</span>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Address</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <h4 class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].Alamat_Vendor1}} <br> {{objDetailPO.tabledata.header[0].Alamat_Vendor2}}</h4>
                                </div>
                                <div class="text-sm flex justify-start mb-1">
                                    <div class="w-3/12">
                                        <span class="font-semibold text-gray-500">Ship To</span>
                                    </div>
                                    <span class="mr-2">:</span>
                                    <h4 class="font-medium text-gray-700">{{objDetailPO.tabledata.header[0].SHIP_TO}} <br> {{objDetailPO.tabledata.header[0].Alamat_Ship1}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MyTable :obj="objDetailPO"></MyTable>
                </div>
                <div class="h-8 absolute bottom-0 left-0 w-full"></div>
            </div>
        </div>
    </vue-final-modal>
    <!-- <button @click="showModal = true">show modal</button> -->
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
            showModal: false,
            range: {
                start: null,
                end: null,
            },
            masks: {
                input: 'DD MMM YYYY',
            },
            
            objDetailPO: {
                tabledata:{
                    columns: [{
                        id : "ITEM_CODE",
                        deskripsi : "Item Code",
                        tipedata : "string"
                    },{
                        id : "item_desc",
                        deskripsi : "Item Description",
                        tipedata : "string"
                    },{
                        id : "UOM",
                        deskripsi : "UoM",
                        tipedata : "string"
                    },{
                        id : "QUANTITY",
                        deskripsi : "Qty PO",
                        tipedata : "number"
                    },{
                        id : "UNIT_PRICE",
                        deskripsi : "Unit Price",
                        tipedata : "currency"
                    },{
                        id : "TOTAL_PRICE",
                        deskripsi : "Total Price",
                        tipedata : "currency"
                    },{
                        id : "arrival_date",
                        deskripsi : "Tgl. ETA",
                        tipedata : "date"
                    }],
                    rows: [],
                    header: [],
                    isLoadData: false
                },
       
            },

            objTable: {
                tabledata:{
                    columns: [{
                        id : "file_pdf",
                        deskripsi : "File",
                        tipedata : "pdf_download"
                    },{
                        id : "NoDoc",
                        deskripsi : "No PO",
                        tipedata : "link_detail"
                    },{
                        id : "Tahun",
                        deskripsi : "Tahun",
                        tipedata : "string"
                    },{
                        id : "PO_Date",
                        deskripsi : "Tgl. PO",
                        tipedata : "date"
                    },{
                        id : "PO_Buyers",
                        deskripsi : "PO Buyer",
                        tipedata : "string"
                    },{
                        id : "VENDOR_NAME",
                        deskripsi : "Vendor Name",
                        tipedata : "string"
                    },{
                        id : "QUOTATION_NO",
                        deskripsi : "Quotation No",
                        tipedata : "string"
                    }],
                    rows: [],
                    isLoadData: false
                },
            },
        }
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

            var aoth = {
                sid: "2d7d711e-cc41-45ab-a25a-3f55b382dc29",
                serverdb: "1000PO",
                sp: "listpo",
                mvitem: amv.Contents(),
                action: "1",
                othval: "listpo",
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

        getDetail(idPO) {
            console.log('ini idPO ', idPO);
            this.showModal = true;
            this.objDetailPO.tabledata.rows = [];
            this.objDetailPO.tabledata.isLoadData = true;
            let amv = new mv();

            amv.SetData3(2, 1, idPO);

            var aoth = {
                sid: "2d7d711e-cc41-45ab-a25a-3f55b382dc29",
                serverdb: "1000PO",
                sp: "listpo",
                mvitem: amv.Contents(),
                action: "1",
                othval: "detpo",
                key: "",
            }

            panggilsafe(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    this.objDetailPO.tabledata.header = iMsg.data.nilai.Table;
                    this.objDetailPO.tabledata.rows = iMsg.data.nilai.Table1;
                    this.objDetailPO.tabledata.isLoadData = false;
                } else {
                    alert(iMsg.errors[0].message);
                    this.objDetailPO.tabledata.isLoadData = false;
                }
            })
            .catch((iMsg) => {
                console.log(iMsg)
                this.objDetailPO.tabledata.isLoadData = false;
            });
        }
    }
}
</script>