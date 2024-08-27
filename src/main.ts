import 'virtual:uno.css'
// import '@/assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app').$nextTick(window.$loading.end)
