import { App, defineComponent, h, PropType } from 'vue'
import 'echarts/lib/chart/pie'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import { EChartOption } from 'echarts/lib/echarts'
import handlePie, { PieDataSource, PieSettings } from './pie'

interface HPieData {
  Options: EChartOption
}

const HPie = defineComponent({
  name: 'HPie',
  data () {
    return {
      Options: {}
    } as HPieData
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Object as PropType<PieDataSource<{}>>,
      default: () => ({})
    },
    settings: {
      type: Object as PropType<PieSettings>,
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

    this.Options = handlePie(dataSource, settings, ariaShow)
  },
  watch: {
    $props () {
      const { dataSource, settings, ariaShow } = this.$props

      this.Options = handlePie(dataSource, settings, ariaShow)
    }
  }
})

HPie.install = (app: App) => {
  app.component(HPie.name, HPie)
}

export default HPie