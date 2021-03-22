<template>
    <div class="h-full bg-gray-50 rounded-lg p-6" v-if="tipeLogin === 'distributor'">
        <div class="grid grid-cols-12 gap-6">
            
            <div class="col-span-3 bg-white shadow-lg p-4 rounded-lg">
                <div class="mb-4">
                    <span class="font-semibold text-base text-indigo-800">Summary {{yearNow}}</span>
                </div>
                <div v-if="objTable.tabledata.isLoadData && objTable.tabledata.rows.length === 0" class="flex justify-center items-center" style="min-height: 15rem">
                    <span class="my-1">
                        <svg width="25" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="#2d3748" class="w-8 h-8"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="4"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
                    </span>
                </div>
                <div v-else-if="!objTable.tabledata.isLoadData && objTable.tabledata.rows.length === 0" class="flex justify-center items-center">
                    <span class="text-red-500 font-medium">Tidak ada data</span>
                </div>
                <div v-else-if="!objTable.tabledata.isLoadData && objTable.tabledata.rows.length > 0">
                    <div class="w-full min-h-53">
                        <PieChart v-bind:chartData="state.chartData" v-bind:chartOptions="state.chartOptions" />
                    </div>
                    <div v-cloak>
                        <div  class="mt-5 flex text-sm items-center">
                            <div class="w-4 h-4 bg-green-600 rounded-sm mr-1"></div>
                            <div class="font-medium text-gray-600"><span>DO Close <span class="text-gray-800 font-semibold">({{doClose}})</span></span></div>
                            <div class="flex-auto text-right font-semibold text-gray-600"><span>{{((doClose / objTable.tabledata.rows.length) * 100).toFixed(0)}}%</span></div>
                        </div>
                        <div class="mt-2 flex text-sm items-center">
                            <div class="w-4 h-4 bg-yellow-500 rounded-sm mr-1"></div>
                            <div class="font-medium text-gray-600"><span>DO Outstand... <span class="text-gray-800 font-semibold">({{doOutstanding}})</span></span></div>
                            <div class="flex-auto text-right font-semibold text-gray-600">{{((doOutstanding / objTable.tabledata.rows.length) * 100).toFixed(0)}}%</div>
                        </div>
                        <div class="mt-2 flex text-sm items-center">
                            <div class="w-4 h-4 bg-white rounded-sm mr-1"></div>
                            <div class="font-medium text-gray-600"><span>Total DO <span class="text-gray-800 font-semibold">({{objTable.tabledata.rows.length}})</span></span></div>
                            <div class="flex-auto text-right font-semibold text-gray-600">100%</div>
                        </div>
                        <div class="border-t border-gray-200 mt-4 pt-3 flex justify-center items-center">
                            <router-link :to="baseURL+'/report/surat_jalan'">
                                <span class="font-semibold text-blue-600 text-sm flex items-center cursor-pointer">Lihat report lebih detail
                                    <svg class="stroke-current icon line text-blue-600 ml-2" width="16" height="16" id="right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="14 5 21 12 14 19" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><line x1="21" y1="12" x2="3" y2="12" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>asd tot</div>
</template>

<script>
import PieChart from "./core/Pie.vue";
import moment from 'moment';

export default {
    components: {
        PieChart
    },
    data: function () {
        return{
            text1: "",
            judul: "",
            baseURL: "",
            displayName: "",
            userID: "",
            tipeLogin: "",
            state: {
                chartData: {
                    datasets: [{
                        data: [],
                        backgroundColor: ['#F59E0B', '#059669'],
                        borderWidth: 4,
                    }],
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    // labels: ['Red', 'Yellow', 'Blue', 'Green']
                },
                chartOptions: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        enabled: false,
                    },
                    events: []
                }
            },

            objTable:{
                tabledata:{
                    rows: [],
                    isLoadData: false
                },
            }
        }
    },

    computed: {
        yearNow () {
            return moment().year();
        },
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
        getData() {
            this.objTable.tabledata.isLoadData = true;
            let amv = new mv();

            amv.SetData3(1, 1, moment().startOf('year').format('YYYYMMDD'));
            amv.SetData3(2, 1, moment().format('YYYYMMDD'));
            amv.SetData3(3, 1, this.userID);

            var aoth = {
                sid: "",
                serverdb: "1000PO",
                sp: "[trp].[TrackSJDist_Read]",
                mvitem: amv.Contents(),
                action: "1",
                othval: "SJ",
                key: "",
            }

            panggilsafe(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    this.objTable.tabledata.rows = iMsg.data.nilai.Table;
                    
                    this.state.chartData.datasets[0].data.push(this.doOutstanding);
                    this.state.chartData.datasets[0].data.push(this.doClose);
                    this.objTable.tabledata.isLoadData = false;
                } else {
                    console.log(iMsg);
                    this.objTable.tabledata.isLoadData = false;
                }
            })
            .catch((iMsg) => {
                console.log(iMsg);
                this.objTable.tabledata.isLoadData = false;
            });
        }
    },
    
    beforeMount() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
    },
    mounted() {
        this.getData()
    }
}
</script>

<style>

</style>