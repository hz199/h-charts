import { App, defineComponent, h, PropType } from 'vue'
import commonProps from '@yyr1994/h-charts/libs/packages/utils/commonProps'
import Chart from '@yyr1994/h-charts/libs/packages/chart'
import * as echarts from 'echarts/core'
import { EChartsOption } from 'echarts/types/dist/shared'
import { PieChart } from 'echarts/charts'
import handlePie, { PieDataSource, PieSettings } from './pie'
echarts.use([PieChart])

interface HPieData {
  Options: EChartsOption
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

    const options = this.Options as EChartsOption;

    return h(Chart, {
      ...rest,
      options
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