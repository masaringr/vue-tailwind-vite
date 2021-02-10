import { createApp } from 'vue'
import App from './DashboardApp.vue'
import '../css/style.css'
import router from '../router' // <---

createApp(App).use(router).mount('#dashboardApp')
