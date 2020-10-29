import { App, defineComponent } from 'vue'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'

const hLine = defineComponent({
  name: 'hLine',
  props: {
    ...commonProps,
    dataSource: {
      type: Object,
      default: () => ({})
    },
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  render() {
    const { options, ...rest } = this.$props
    return <Chart {...rest}></Chart>
  },
})

hLine.install = (app: App) => {
  app.component(hLine.name, hLine)
}

export default hLine