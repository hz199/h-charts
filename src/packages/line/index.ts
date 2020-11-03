import { App, defineComponent, h, PropType } from 'vue'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'

export interface Columns {
  title: string
  key: string | number
}

export interface LineDataSource<T = {}> {
  columns: Array<Columns>
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
  computed: {
    
  },
  render() {
    const { dataSource, settings, ...rest } = this.$props
    return h(Chart, {
      ...rest
    })
  },
})

hLine.install = (app: App) => {
  app.component(hLine.name, hLine)
}

export default hLine