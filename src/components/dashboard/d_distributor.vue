<template>
  <div class="grid grid-cols-12 gap-6">
    <div v-if="userPermission === 'all' || userPermission === 'operasional'" class="col-span-3">
      <div class="bg-white shadow-lg p-4 rounded-lg">
        <div class="mb-4">
          <span class="font-semibold text-base text-indigo-800"
            >Summary Surat Jalan {{ yearNow }}</span
          >
        </div>
        <div
          v-if="
            objTable.tabledata.isLoadData &&
            objTable.tabledata.rows.length === 0
          "
          class="flex justify-center items-center"
          style="min-height: 15rem"
        >
          <span class="my-1">
            <svg
              width="25"
              viewBox="-2 -2 42 42"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#2d3748"
              class="w-8 h-8"
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
              </g>
            </svg>
          </span>
        </div>
        <div
          v-else-if="
            !objTable.tabledata.isLoadData &&
            totalDO === 0
          "
          class="flex justify-center items-center"
        >
          <span class="text-red-500 font-medium">Tidak ada data</span>
        </div>
        <div
          v-else-if="
            !objTable.tabledata.isLoadData && totalDO > 0
          "
        >
          <div class="w-full min-h-53">
            <PieChart
              v-bind:chartData="state.chartData"
              v-bind:chartOptions="state.chartOptions"
            />
          </div>
          <div v-cloak>
            <div class="mt-5 flex text-sm items-center">
              <div class="w-4 h-4 bg-green-600 rounded-sm mr-1"></div>
              <div class="font-medium text-gray-600">
                <span
                  >SJ Close
                  <span class="text-gray-800 font-semibold"
                    >({{ DOClose }})</span
                  ></span
                >
              </div>
              <div class="flex-auto text-right font-semibold text-gray-600">
                <span
                  >{{
                    ((DOClose / totalDO) * 100).toFixed(
                      0
                    )
                  }}%</span
                >
              </div>
            </div>
            <div class="mt-2 flex text-sm items-center">
              <div class="w-4 h-4 bg-yellow-500 rounded-sm mr-1"></div>
              <div class="font-medium text-gray-600">
                <span
                  >SJ Outstand...
                  <span class="text-gray-800 font-semibold"
                    >({{ DOOutStanding }})</span
                  ></span
                >
              </div>
              <div class="flex-auto text-right font-semibold text-gray-600">
                {{
                  (
                    (DOOutStanding / totalDO) *
                    100
                  ).toFixed(0)
                }}%
              </div>
            </div>
            <div class="mt-2 flex text-sm items-center">
              <div class="w-4 h-4 bg-white rounded-sm mr-1"></div>
              <div class="font-medium text-gray-600">
                <span
                  >Total SJ
                  <span class="text-gray-800 font-semibold"
                    >({{ totalDO }})</span
                  ></span
                >
              </div>
              <div class="flex-auto text-right font-semibold text-gray-600">
                100%
              </div>
            </div>
            <div
              class="border-t border-gray-200 mt-4 pt-3 flex justify-center items-center"
            >
              <router-link :to="baseURL + '/reportdist/surat_jalan'">
                <span
                  class="font-semibold text-blue-600 text-sm flex items-center cursor-pointer"
                  >Lihat report lebih detail
                  <svg
                    class="stroke-current icon line text-blue-600 ml-2"
                    width="16"
                    height="16"
                    id="right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      points="14 5 21 12 14 19"
                      style="
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 2;
                      "
                    ></polyline>
                    <line
                      x1="21"
                      y1="12"
                      x2="3"
                      y2="12"
                      style="
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 2;
                      "
                    ></line>
                  </svg>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="userPermission === 'all'" class="col-span-9">
      <div class="bg-white shadow-lg p-4 rounded-lg">
        <div class="mb-4">
          <span class="font-semibold text-base text-indigo-800"
            >Summary Invoice {{ yearNow }}</span
          >
        </div>
        <div
          v-if="
            objTableInvoice.tabledata.isLoadData &&
            objTableInvoice.tabledata.rows.length === 0
          "
          class="flex justify-center items-center"
          style="min-height: 15rem"
        >
          <span class="my-1">
            <svg
              width="25"
              viewBox="-2 -2 42 42"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#2d3748"
              class="w-8 h-8"
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
              </g>
            </svg>
          </span>
        </div>
        <div
          v-else-if="
            !objTableInvoice.tabledata.isLoadData &&
            objTableInvoice.tabledata.rows.length === 0
          "
          class="flex justify-center items-center"
        >
          <span class="text-red-500 font-medium">Tidak ada data</span>
        </div>
        <div
          v-else-if="
            !objTableInvoice.tabledata.isLoadData &&
            objTableInvoice.tabledata.rows.length > 0
          "
        >
          <div id="canvas-inv" class="w-full min-h-53">
            <LineChart
              v-bind:chartData="stateInvoice.chartData"
              v-bind:chartOptions="stateInvoice.chartOptions"
            />
          </div>
          <div v-cloak class="mt-6">
            <!-- <div class="w-1/2">
              <span class="font-semibold text-base text-indigo-800">Summary Piutang {{ yearNow }}</span>
              <div v-for="(piutang, idx) in summaryPiutang" :key="idx">
                <div class="mt-2 flex text-sm items-center">
                  <div class="font-medium text-gray-600">
                    <span>{{getMonthName(piutang.AT13)}}</span>
                  </div>
                  <div class="flex-auto text-right font-semibold text-gray-600">
                    <span class="font-mono">Rp. {{numeralFormat(piutang.totalPiutang, '0,0.00')}}</span>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="w-1/2">
              <span class="font-semibold text-base text-indigo-800">Outstanding Invoice</span>
              <div>
                <span v-if="outstandinginvoice.isLoading" class="my-2">
                  <svg
                    width="25"
                    viewBox="-2 -2 42 42"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#2d3748"
                    class="w-8 h-8"
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
                    </g>
                  </svg>
                </span>
                <span v-else class="font-mono text-pink-600 font-bold text-xl">Rp.{{numeralFormat(outstandinginvoice.total, '0,0.00')}}</span>
              </div>
            </div>
            <div
              class="border-t border-gray-200 mt-4 pt-3 flex justify-center items-center"
            >
              <router-link :to="baseURL + '/reportdist/invoice'">
                <span
                  class="font-semibold text-blue-600 text-sm flex items-center cursor-pointer"
                  >Lihat report lebih detail
                  <svg
                    class="stroke-current icon line text-blue-600 ml-2"
                    width="16"
                    height="16"
                    id="right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      points="14 5 21 12 14 19"
                      style="
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 2;
                      "
                    ></polyline>
                    <line
                      x1="21"
                      y1="12"
                      x2="3"
                      y2="12"
                      style="
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 2;
                      "
                    ></line>
                  </svg>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "../core/Pie.vue";
import LineChart from "../core/Line.vue";
import moment from 'moment';
import { mv } from "../../assets/js/mv";
import { getCookie, panggilsafe, panggilorc } from "../../assets/js/umum";

export default {
  components: {
        PieChart,
        LineChart
    },
    data: function () {
        return{
            userPermission: "",
            text1: "",
            judul: "",
            baseURL: "/uis",
            displayName: "",
            userID: "",
            tipeLogin: "",
            DOClose: 0,
            DOOutStanding: 0,
            totalDO: 0,
            outstandinginvoice: {
              isLoading: false,
              total: 0
            },
            summaryPiutang : [],
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

            stateInvoice: {
                chartData: {
                    datasets: [{
                        label: 'Total Invoice ',
                        data: [],
                        backgroundColor: '#6ebc8878',
                    }],
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: []
                },
                chartOptions: {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return 'Total Invoice : '+tooltipItem.yLabel.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                            }
                        }
                    },
                    // events: [],
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                    }
                }
            },

            objTable:{
                tabledata:{
                    rows: [],
                    isLoadData: false
                },
            },

            objTableInvoice: {
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
        
        // doOutstanding() {
        //     const items = this.objTable.tabledata.rows.filter(item => {
        //         item.Desc_ListTrack = item.Desc_ListTrack ? item.Desc_ListTrack : "";
        //         let status = item.Desc_ListTrack.toString().toLowerCase()
        //         return !status.includes("setelah unloading");
        //     });
        //     return items.length;
        // },

        // doClose() {
        //     const items = this.objTable.tabledata.rows.filter(item => {
        //         item.Desc_ListTrack = item.Desc_ListTrack ? item.Desc_ListTrack : "";
        //         let status = item.Desc_ListTrack.toString().toLowerCase()
        //         return status.includes("setelah unloading");
        //     });
        //     return items.length;
        // }
    },

    methods: {
        getMonthName(aDate) {
            return moment(aDate).format('MMMM');
        },

        getOutstandingInvoice() {
            this.outstandinginvoice.isLoading = true;
            let amv = new mv();

            amv.SetData3(1, 1, moment().format('YYYYMMDD'));
            amv.SetData3(2, 1, this.userID);

            var aoth = {
                sid: "",
                serverdb: "1000ORC",
                sp: "XITAR_READ_INV_OUTSTANDING",
                mvitem: amv.Contents(),
                action: "1",
                othval: "",
                key: "",
            }
            panggilorc(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    this.outstandinginvoice.total = iMsg.data.nilai.Table[0].AT5;
                    this.outstandinginvoice.isLoading = false;
                } else {
                    console.log(iMsg);
                    this.outstandinginvoice.isLoading = false;
                }
            })
            .catch((iMsg) => {
                console.log(iMsg);
                this.outstandinginvoice.isLoading = false;
            });
        },

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
                othval: "REKAPSJ",
                key: "",
            }

            panggilsafe(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    this.DOClose = iMsg.data.nilai.Table[0].DoClose;
                    this.DOOutStanding = iMsg.data.nilai.Table[0].DoStd;
                    this.totalDO = iMsg.data.nilai.Table[0].Total;

                    this.state.chartData.datasets[0].data.push(this.DOOutStanding);
                    this.state.chartData.datasets[0].data.push(this.DOClose);
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
        },

        getDataInvoice() {
            this.objTableInvoice.tabledata.isLoadData = true;
            let amv = new mv();

            amv.SetData3(1, 1, moment().startOf('year').format('YYYYMMDD'));
            amv.SetData3(2, 1, moment().format('YYYYMMDD'));
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
            panggilorc(aoth)
            .then((iMsg) => {
                if (iMsg.meta.http_status === 200){
                    this.objTableInvoice.tabledata.rows = iMsg.data.nilai.Table.reverse();
                    this.mappingDataInvoice(this.objTableInvoice.tabledata.rows);
                    this.objTableInvoice.tabledata.isLoadData = false;
                } else {
                    console.log(iMsg);
                    this.objTableInvoice.tabledata.isLoadData = false;
                }
            })
            .catch((iMsg) => {
                console.log(iMsg);
                this.objTableInvoice.tabledata.isLoadData = false;
            });
        },

        mappingDataInvoice(aData) {

            // untuk mendapatkan total invoice per bulan
            const result = [...aData.reduce((r, o) => {
              const key = moment(o.AT13).format('MMMM');
              
              const item = r.get(key) || Object.assign({}, o, {
                totalInvoice: 0,
              });
              
              item.totalInvoice += o.AT14;

              return r.set(key, item);
            }, new Map).values()];

            result.forEach(res => {
              this.stateInvoice.chartData.labels.push(moment(res.AT13).format('MMMM'));
              this.stateInvoice.chartData.datasets[0].data.push(res.totalInvoice);
            });

            // untuk mendapatkan total invoice per bulan


            // untuk mendapatkan summary piutang per bulan
            // const result = [...aData.reduce((r, o) => {
            //   const key = moment(o.AT13).format('MMMM');
              
            //   const item = r.get(key) || Object.assign({}, o, {
            //     totalPiutang: 0,
            //   });
              
            //   item.totalPiutang += o.AT16;

            //   return r.set(key, item);
            // }, new Map).values()];

            // this.summaryPiutang = result;
            // console.log(this.summaryPiutang);
            // untuk mendapatkan summary piutang per bulan


            // untuk mendapatkan summary jumlah invoice per bulan
            // let allMonth = [];
            // let months = [];
            // let monthLength = {};

            // aData.forEach((data, idx) => {
            //     const bln = moment(data.AT13).format('MMMM');
            //     allMonth.push(bln);
            //     !months.includes(bln) ? months.push(bln) : true;
            // });

            // allMonth.forEach(function(i) { monthLength[i] = (monthLength[i]||0) + 1;});

            // this.stateInvoice.chartData.labels = months

            // months.forEach(month => {
            //     this.stateInvoice.chartData.datasets[0].data.push(monthLength[month]);
            // });
            // untuk mendapatkan summary jumlah invoice per bulan
        }
    },
    
    beforeMount() {
        this.displayName = getCookie('displayname');
        this.userID = getCookie('userid');
        this.tipeLogin = getCookie('tipelogin');
        this.userPermission = getCookie('user_permission');
    },
    mounted() {
        this.getData();
        this.getDataInvoice();
        this.getOutstandingInvoice();
    }
};
</script>