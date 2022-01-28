import { createApp } from 'vue'
import App from './App.vue'
import './styles/import.scss'
import 'amfe-flexible/index.js'
import useVantUI from './plugins/vant'

const app = createApp(App)

// ui
useVantUI(app)

app.mount('#app')
