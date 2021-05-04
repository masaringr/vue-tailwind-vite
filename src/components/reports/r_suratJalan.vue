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
                    <strong class="cs text-gray-500 font-medium">Total DO</strong>
                    <span class="ml-2 p-1 px-2 font-semibold rounded-full text-xs bg-pink-600 text-white">{{objTable.tabledata.rows.length}}</span>
                </div>
                <div class="asd bg-gray-100 px-3 py-2 rounded-md mr-4 text-sm">
                    <strong class="cs text-gray-500 font-medium">DO Outstanding</strong>
                    <span class="ml-2 p-1 px-2 font-semibold rounded-full text-xs bg-pink-600 text-white">{{doOutstanding}}</span>
                </div>
                <div class="asd bg-gray-100 px-3 py-2 rounded-md mr-4 text-sm">
                    <strong class="cs text-gray-500 font-medium">DO Close</strong>
                    <span class="ml-2 p-1 px-2 font-semibold rounded-full text-xs bg-pink-600 text-white">{{doClose}}</span>
                </div>
            </div>
        </div>
        <MyTable :obj="objTable" @showphoto="showPhoto" @blobToFile="downloadBlobFile"></MyTable>
    </div>
    <vue-final-modal v-model="showModal">
        <div class="flex justify-center items-center h-screen">
            <div class="h-100-10 w-3/4 bg-white px-4 pb-12 pt-3 rounded-lg relative">
                <div class="flex justify-end mb-3">
                    <span @click="showModal = false" class="cursor-pointer">
                        <svg class="icon line" width="16" height="16" id="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="19" y1="19" x2="5" y2="5" style="fill: none; stroke: rgb(107, 114, 128); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3;"></line><line x1="19" y1="5" x2="5" y2="19" style="fill: none; stroke: rgb(107, 114, 128); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3;"></line></svg>
                    </span>
                </div>
                <div class="w-full h-full flex justify-center px-4 overflow-y-auto scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <img :src="filePhoto" alt="">
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
                        id : "FilePDF",
                        deskripsi : "File",
                        tipedata : "pdf_from_b2b"
                    },{
                        id : "TglDO",
                        deskripsi : "Tgl. DO",
                        tipedata : "date"
                    },{
                        id : "ID_DO",
                        deskripsi : "ID",
                        tipedata : "string"
                    },{
                        id : "Dari",
                        deskripsi : "From",
                        tipedata : "string"
                    },{
                        id : "Tujuan",
                        deskripsi : "To",
                        tipedata : "string"
                    },{
                        id : "namatransporter",
                        deskripsi : "Transporter",
                        tipedata : "string"
                    },{
                        id : "NoPolisi",
                        deskripsi : "No Polisi",
                        tipedata : "string"
                    },{
                        id : "Desc_ListTrack",
                        deskripsi : "Status Terakhir",
                        tipedata : "string"
                    },{
                        id : "File_Foto",
                        deskripsi : "Foto",
                        tipedata : "foto"
                    }],
                    rows: [],
                    isLoadData: false
                },
            },
        }
    },

    computed: {
        doOutstanding() {
            const items = this.objTable.tabledata.rows.filter(item => {
                item.Desc_ListTrack = item.Desc_ListTrack ? item.Desc_ListTrack : "";
                let status = item.Desc_ListTrack.toString().toLowerCase()
                return !status.includes("setelah unloading");
            });
            return items.length;
        },

        doClose() {
            const items = this.objTable.tabledata.rows.filter(item => {
                item.Desc_ListTrack = item.Desc_ListTrack ? item.Desc_ListTrack : "";
                let status = item.Desc_ListTrack.toString().toLowerCase()
                return status.includes("setelah unloading");
            });
            return items.length;
        }
    },

    methods: {
        downloadBlobFile(obj) {
            // var myBlob = new File([obj.blob], {type: "application/pdf"});
            // myBlob.lastModifiedDate = new Date();
            // myBlob.name = obj.filename;
            // myBlob.contentType = "application/pdf";
            // myBlob.type = "application/pdf";

            // "application/pdf"
            const myBlob = new File([obj.blob], 
                obj.filename, { 
                    lastModified: new Date().getTime(), 
                    type: "application/pdf"
                }
            )

            console.log(myBlob);

            const link = document.createElement('a');
            // create a blobURI pointing to our Blob
            link.href = URL.createObjectURL(myBlob);
            link.target = '_blank';
            link.download = obj.filename;
            // some browser needs the anchor to be in the doc
            document.body.append(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(link.href);
        },

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

            amv.SetData3(1, 1, moment(this.range.start).format('YYYYMMDD'));
            amv.SetData3(2, 1, moment(this.range.end).format('YYYYMMDD'));
            amv.SetData3(3, 1, this.userID);

            var aoth = {
                sid: "",
                serverdb: "1000PO",
                sp: "[trp].[TrackSJDist_Read]",
                mvitem: amv.Contents(),
                action: "1",
                othval: "SJ2",
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

        showPhoto(filename) {
            this.showModal = true;
            this.filePhoto = 'https://b2b.ultrajaya.co.id/foto/epod/'+filename;
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