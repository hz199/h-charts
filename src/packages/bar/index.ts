import { App, defineComponent, h, PropType, ref, toRefs, watch } from 'vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import handleBar, { BarDataSource, BarSettings } from './bar'
import { EChartOption } from 'echarts/lib/echarts'


const hBar = defineComponent({
  name: 'hBar',
  setup (props) {
    const { dataSource, settings } = toRefs(props)

    const options = ref(handleBar(dataSource.value, settings.value))

    watch([dataSource, settings], () => {
      options.value = handleBar(dataSource.value, settings.value)
    })

    return {
      barOptions: options
    }
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Object as PropType<BarDataSource<{}>>,
      default: () => ({})
    },
    settings: {
      type: Object as PropType<BarSettings>,
      default: () => ({})
    },
  },
  render() {
    const { dataSource, settings, ...rest } = this.$props

    return h(Chart, {
      ...rest,
      options: this.barOptions as EChartOption
    })
  },
})

hBar.install = (app: App) => {
  app.component(hBar.name, hBar)
}

export default hBar