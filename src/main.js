import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/normolize.css'
import '@/assets/css/global.css'
import 'aos/dist/aos.css'

createApp(App).use(router).mount('#app')
