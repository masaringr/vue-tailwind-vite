import { createApp } from 'vue'
import App from './DashboardApp.vue'
import '../css/style.css'
import router from '../router' // <---
import VCalendar from 'v-calendar';
import VueFinalModal from 'vue-final-modal';
import VueNumerals from 'vue-numerals';

createApp(App)
.use(router)
.use(VCalendar, {})
.use(VueFinalModal())
.use(VueNumerals)
.mount('#dashboardApp')
