import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import Components from './components'
import router from './router'

import HLine from '@es/line'

const app = createApp(App)

app.use(HLine)

app.use(router)
app.use(Components)
app.mount('#app')
