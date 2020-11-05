import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import Components from './components'
import router from './router'
import prism from './directives/prism'

const app = createApp(App)

app.use(router)
app.use(prism)
app.use(Components)
app.mount('#app')
