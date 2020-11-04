import { App, defineComponent, h, PropType, computed } from 'vue'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import lineHandle, { LineDataSource, LineSettings } from './line'


const hLine = defineComponent({
  name: 'hLine',
  setup (context) {
    const { dataSource, settings } = context
    const options = computed(() => lineHandle(dataSource, settings))
    console.log(options, 55)

    return {
      lineOptions: options
    }
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Object as PropType<LineDataSource>,
      default: () => ({})
    },
    settings: {
      type: Object as PropType<LineSettings>,
      default: () => ({})
    },
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