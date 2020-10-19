import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import Components from './components'
import router from './router'

createApp(App)
.use(router)
.use(Components)
.mount('#app')
