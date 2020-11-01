import { App, defineComponent, PropType } from 'vue'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import { EChartOption } from 'echarts/lib/echarts';

export interface LineDataSource<T = {}> {
  columns: Array<keyof T>
  rows: Array<T>
}


const hLine = defineComponent({
  name: 'hLine',
  props: {
    ...commonProps,
    dataSource: {
      type: Object as PropType<LineDataSource>,
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