import { App, defineComponent } from 'vue'
import 'echarts/lib/chart/line'
import Chart from '../chart'

const hLine = defineComponent({
  name: 'hLine',
  render() {
    return <Chart></Chart>
  },
})

hLine.install = (app: App) => {
  app.component(hLine.name, hLine)
}

export default hLine