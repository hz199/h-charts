import { App, defineComponent, h, PropType, Ref, ref, toRefs, watch } from 'vue'
import 'echarts/lib/chart/radar'
import commonProps from '@yyr1994/h-charts/packages/utils/commonProps'
import Chart from '../chart'
// import { EChartOption } from 'echarts/lib/echarts'
import { EChartsOption } from 'echarts/types/dist/shared'
// import * as echarts from 'echarts/core'
import handleradar, { RadarDataSource, radarSettings } from './radar'

const Hradar = defineComponent({
  name: 'Hradar',
  setup (props) {
    const { dataSource, settings } = toRefs(props)

    // const options: Ref<EChartsOption> = ref(handleradar(
    //   dataSource.value,
    //   settings.value
    // ))
    const options = ref({})

    watch([dataSource, settings], () => {
      options.value = handleradar(
        dataSource.value,
        settings.value
      )
    })

    return {
      Options: options
    }
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Object as PropType<RadarDataSource<{}>>,
      default: () => ({})
    },
    settings: {
      type: Object as PropType<radarSettings>,
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
})

Hradar.install = (app: App) => {
  app.component(Hradar.name, Hradar)
}

export default Hradar