import { App, defineComponent, h, PropType, ref, toRefs, watch } from 'vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import handleHistogram, { HistogramDataSource, HistogramSettings } from './histogram'
import { EChartOption } from 'echarts/lib/echarts'


const HHistogram = defineComponent({
  name: 'HHistogram',
  setup (props) {
    const { dataSource, settings, ariaShow } = toRefs(props)

    const options = ref(handleHistogram(dataSource.value, settings.value, ariaShow.value))

    watch([dataSource, settings, ariaShow], () => {
      options.value = handleHistogram(dataSource.value, settings.value, ariaShow.value)
    })

    return {
      Options: options
    }
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Object as PropType<HistogramDataSource<{}>>,
      default: () => ({})
    },
    settings: {
      type: Object as PropType<HistogramSettings>,
      default: () => ({})
    },
  },
  render() {
    const { dataSource, settings, ...rest } = this.$props

    return h(Chart, {
      ...rest,
      options: this.Options as EChartOption
    })
  },
})

HHistogram.install = (app: App) => {
  app.component(HHistogram.name, HHistogram)
}

export default HHistogram