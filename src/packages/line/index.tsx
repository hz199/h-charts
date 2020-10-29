import { App, defineComponent } from 'vue'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'

const hLine = defineComponent({
  name: 'hLine',
  props: {
    ...commonProps
  },
  render() {
    const { options, ...rest } = this.$props
    console.log(options)
    return <Chart {...rest}></Chart>
  },
})

hLine.install = (app: App) => {
  app.component(hLine.name, hLine)
}

export default hLine