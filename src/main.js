import './index.css'
import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
// import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import router from './components/router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)


app.use(router).use(ViewUIPlus).use(ElementPlus).mount('#app')
