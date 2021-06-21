<template>
  <div class="grid grid-cols-12 gap-6">
    <div v-if="userData.menu[0].content.includes('no-content')" class="col-span-12">
      <div class="flex items-center">
        <span class="capitalize text-base font-semibold text-gray-400">tidak ada content</span>
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
            storageKey: "UIS_APP",
            userData: [],
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
    },

    created() {
      const storage = localStorage.getItem(this.storageKey)
      this.userData = JSON.parse(storage)
    }
};
</script>