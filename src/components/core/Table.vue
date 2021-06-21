<template>
    <div class="w-full border rounded-md p-4">
        <div class="grid grid-cols-6 gap-4 mb-4">
            <div class="col-span-6 md:col-span-2 order-last md:order-first">
                <div>
                    <input v-model="searchData.nilai" type="text" class="w-full py-2 px-3 text-sm border rounded-md text-gray-500 border-gray-300 focus:border-indigo-800 focus:outline-none" placeholder="Cari data...">
                </div>
            </div>
            <div v-if="obj.tabledata.isExport" class="col-span-6 md:col-span-4">
                <div class="flex justify-end">
                    <button @click="exportExcel" class="w-full md:w-auto text-base capitalize py-1.5 px-4 bg-red-600 rounded whitespace-nowrap font-normal text-white tracking-wide hover:bg-red-500 focus:outline-none">export</button>
                </div>
            </div>
        </div>
        <div class="overflow-x-auto scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th v-for="(col, idx) in obj.tabledata.columns" :key="'th-'+idx">
                            <div class="text-left">
                                <span>{{col.deskripsi}}</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody v-if="dataDable.length > 0">
                    <tr v-for="(row, idx) in dataDable" :key="'tr-'+idx">
                        <td v-for="(col, idx2) in obj.tabledata.columns" :key="'td-'+idx+'-'+idx2">
                            <div v-if="col.tipedata === 'pdf_download'">
                                <a v-if="row[col.id]" :href="row[col.id]" target="_blank">
                                    <img src="../../assets/pdf24.png" alt="">
                                </a>
                            </div>
                            <div v-else-if="col.tipedata === 'pdf_from_b2b'">
                                <a v-if="row[col.id]" :href="'https://b2b.ultrajaya.co.id/foto/pdfdo/'+row[col.id]" target="_blank">
                                    <img src="../../assets/pdf24.png" alt="">
                                </a>
                            </div>
                            <div v-else-if="col.tipedata === 'pdf_from_sj'">
                                <a v-if="row[col.id]" :href="'https://b2b.ultrajaya.co.id/foto/pdfdo/'+row[col.id]" target="_blank">
                                    <div class="flex items-center">
                                        <img src="../../assets/pdf24.png" alt="">
                                        <span class="cursor-pointer font-semibold text-blue-500 ml-1">{{row[col.id+'_NILAI']}}</span>
                                    </div>
                                </a>
                            </div>
                            <div v-else-if="col.tipedata === 'pdf_from_inv'">
                                <a v-if="row[col.id]" :href="'https://b2b.ultrajaya.co.id/foto/pdfinv/'+row[col.id]" target="_blank">
                                    <img src="../../assets/pdf24.png" alt="">
                                </a>
                            </div>
                            <div v-else-if="col.tipedata === 'pdf_from_fp'">
                                <a v-if="row[col.id]" :href="'https://b2b.ultrajaya.co.id/foto/pdfpajak/'+row[col.id]" target="_blank">
                                    <img src="../../assets/pdf24.png" alt="">
                                </a>
                            </div>
                            
                            <div v-else-if="col.tipedata === 'link_detail'">
                                <span @click="showLink(row[col.id])" class="cursor-pointer font-semibold text-blue-500">{{row[col.id]}}</span>
                            </div>
                            <div v-else-if="col.tipedata === 'date'">
                                <span>{{formatTanggal(row[col.id])}}</span>
                            </div>
                            <div v-else-if="col.tipedata === 'foto'">
                                <span v-if="row[col.id] === 'add-image.png' || !row[col.id]">-</span>
                                <span v-else @click="showPhoto(row[col.id])" class="cursor-pointer flex items-center text-indigo-800 text-sm font-semibold tracking-wide border-2 border-indigo-800 rounded-md px-1 py-0.5">
                                    <svg class="mr-1 stroke-current icon line text-indigo-800" width="24" height="24" id="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><polyline points="3.29 19.71 9 14 11 16 14 13 20.71 19.71" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><circle cx="11" cy="9" r="1" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></svg>
                                    View
                                </span>
                            </div>
                            <div v-else-if="col.tipedata === 'number'" class="text-right">
                                <span class="tracking-wide font-mono">{{numeralFormat(row[col.id], '0,0.00')}}</span>
                            </div>
                            <div v-else-if="col.tipedata === 'integer'" class="text-right">
                                <span class="tracking-wider">{{numeralFormat(row[col.id], '0,0.00')}}</span>
                            </div>
                            <div v-else-if="col.tipedata === 'rupiah'" class="text-right">
                                <span class="tracking-wide font-mono">Rp.{{numeralFormat(row[col.id], '0,0.00')}}</span>
                            </div>
                            <div v-else>
                                <span>{{row[col.id]}}</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td :colspan="obj.tabledata.columns.length">
                            <div class="flex justify-center items-center">
                                <span v-if="obj.tabledata.isLoadData" class="my-1">
                                    <svg width="25" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="#2d3748" class="w-8 h-8"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="4"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
                                </span>
                                <span v-else class="text-red-500 font-medium">Tidak ada data</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="obj.tabledata.footer" class="w-full flex flex-col items-end p-3">
            <div class="w-1/3 flex flex-col text-sm text-gray-500">
                <div class="flex justify-between">
                    <span class="text-sm font-semibold">Sub Jumlah</span>
                    <span class="tracking-wide font-mono ">{{numeralFormat(obj.tabledata.footer.subjumlah, '0,0.00')}}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm font-semibold">Potongan</span>
                    <span class="tracking-wide font-mono ">{{numeralFormat(obj.tabledata.footer.potongan, '0,0.00')}}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm font-semibold">Jumlah DPP</span>
                    <span class="tracking-wide font-mono ">{{numeralFormat((obj.tabledata.footer.subjumlah + obj.tabledata.footer.potongan), '0,0.00')}}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm font-semibold">PPN</span>
                    <span class="tracking-wide font-mono ">{{numeralFormat((obj.tabledata.footer.ppn), '0,0.00')}}</span>
                </div>
                <div class="flex justify-between border-t mt-1.5 pt-1.5">
                    <span class="text-sm font-semibold">Total Bayar</span>
                    <span class="tracking-wide font-mono ">{{numeralFormat(((obj.tabledata.footer.subjumlah + obj.tabledata.footer.potongan) + obj.tabledata.footer.ppn), '0,0.00')}}</span>
                </div>
            </div>
        </div>
        <div class="mt-4 grid grid-cols-6 gap-4">
            <div class="col-span-6 md:col-span-3">
                <div class="flex justify-center md:justify-start items-center">
                    <span class="text-sm text-gray-500">Show</span>
                    <select name="showby" id="show-by" v-model="showBy.nilai" class="py-1 px-2 border-2 rounded-md font-semibold text-indigo-500 mx-3 text-sm focus:outline-none focus:border-indigo-300">
                        <option v-for="(option, idx) in showBy.options" :key="option.id+'-'+idx" :value="option.nilai">{{option.text}}</option>
                    </select>
                    <span class="text-sm text-gray-500">From <b>{{totalData}}</b> Entries</span>
                </div>
            </div>
            <div class="col-span-6 md:col-span-3">
                <div class="flex justify-center md:justify-end items-center h-full">
                    <v-pagination
                        v-model="currentPage"
                        :pages="totalPage"
                        :range-size="1"
                        active-color="#DCEDFF"
                        @update:modelValue="currentPage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VPagination from "vue3-pagination";
import "vue3-pagination/dist/vue3-pagination.css";
import moment from 'moment';

export default {
    props:{
        obj: Object
    },
    components: {
        VPagination,
    },

    data: function () {
        return{
            currentPage: 1,
            lengthPages: [],

            showBy: {
                id: "showBy",
                nilai: 10,
                options: [{
                    id: "5",
                    nilai: "5",
                    text: "5",
                }, {
                    id: "10",
                    nilai: "10",
                    text: "10",
                }, {
                    id: "25",
                    nilai: "25",
                    text: "25",
                }, {
                    id: "50",
                    nilai: "50",
                    text: "50",
                }, {
                    id: "100",
                    nilai: "100",
                    text: "100",
                }, {
                    id: "all",
                    nilai: "999999999",
                    text: "All",
                }],
            },

            searchData: {
                nilai: "",
            },
        }
    },

    computed: {
        dataDable: function () {
            var adatas = [];
     
            if (this.searchData.nilai != undefined) {
                if (this.searchData.nilai.toString() != "") {
                    adatas = this.obj.tabledata.rows.filter((obj) => {
                        var bb;
                        this.obj.tabledata.columns.forEach((aitem) => {
                            var cc;
                            if (aitem.tipedata == "pdf_download") {
                                cc = false;
                            } else if (aitem.tipedata == "number") {
                                if ( obj[aitem.id] == this.searchData.nilai.toString().toLowerCase() ) {
                                    cc = true;
                                } else {
                                    cc = false;
                                }
                            } else {
                                if (obj[aitem.id]== undefined) {
                                    cc = false;
                                } else {
                                    if (obj[aitem.id]== null) {
                                        cc = false;
                                    } else {
                                        cc = obj[aitem.id].toString().toLowerCase().indexOf(this.searchData.nilai.toString().toLowerCase()) > -1;
                                    }
                                }
                            }
                            bb = bb || cc;
                        });
                        return bb;
                    });
                } else {
                    adatas = this.obj.tabledata.rows;
                }
            } else {
                adatas = this.obj.tabledata.rows;
            }

            this.lengthPages = adatas;

            return adatas.filter((row, index) => {
                let start = (this.currentPage - 1) * this.showBy.nilai;
                let end = this.currentPage * this.showBy.nilai;
                if (index >= start && index < end) return true;
            });
        },

        totalData: function () {
            return this.lengthPages.length;
        },

        totalPage: function () {
            return Math.ceil(this.lengthPages.length / this.showBy.nilai);
        },
    },

    methods: {
        formatTanggal(val) {
            return val ? moment(val).format('DD MMM YYYY') : '-';
        },

        showLink(id) {
            this.$emit('showlink', id);
        },

        showPhoto(filename) {
            this.$emit('showphoto', filename);
        },

        exportExcel() {
            this.$emit('exportexcel');
        }
    }
}
</script>