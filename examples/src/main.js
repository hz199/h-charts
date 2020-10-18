import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import Components from './components'

createApp(App)
.use(Components)
.mount('#app')
