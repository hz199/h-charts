import { App, defineComponent, h, PropType, Ref, ref, toRefs, watch } from 'vue'
import 'echarts/lib/chart/bar'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import { EChartOption } from 'echarts/lib/echarts'
import handlePie, { PieDataSource, PieSettings } from './pie'

const HPie = defineComponent({
  name: 'HHistogram',
  setup (props) {
    console.log(props)
    const { dataSource, settings } = toRefs(props)

    const options: Ref<EChartOption> = ref(handlePie(
      dataSource.value,
      settings.value
    ))

    watch([dataSource, settings], () => {
      options.value = handlePie(
        dataSource.value,
        settings.value
      )
    })

    return {
      Options: {}
    }
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
})

HPie.install = (app: App) => {
  app.component(HPie.name, HPie)
}

export default HPie