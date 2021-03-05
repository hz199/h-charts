import { App, defineComponent, h, PropType } from 'vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import handleHistogram, { HistogramDataSource, HistogramSettings } from './histogram'
import { EChartOption } from 'echarts/lib/echarts'

interface HHistogramData {
  Options: EChartOption
}

const HHistogram = defineComponent({
  name: 'HHistogram',
  data () {
    return {
      Options: {}
    } as HHistogramData
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
      options: this.Options
    })
  },
  mounted () {
    const { dataSource, settings, ariaShow } = this.$props

    this.Options = handleHistogram(dataSource, settings, ariaShow)
  },
  watch: {
    $props () {
      const { dataSource, settings, ariaShow } = this.$props

      this.Options = handleHistogram(dataSource, settings, ariaShow)
    }
  }
})

HHistogram.install = (app: App) => {
  app.component(HHistogram.name, HHistogram)
}

export default HHistogram