import { App, defineComponent, h, PropType } from 'vue'
import commonProps from '../utils/commonProps'
import HChart from '../chart'
import handleHistogram, { HistogramDataSource, HistogramSettings } from './histogram'
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import { EChartsOption } from 'echarts/types/dist/shared'
echarts.use([BarChart, LineChart])

interface HHistogramData {
  Options: EChartsOption
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

    const options = this.Options as EChartsOption;

    return h(HChart, {
      ...rest,
      options
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

export default HHistogram