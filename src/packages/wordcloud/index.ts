import { App, defineComponent, h } from 'vue'
import 'echarts-wordcloud'
import commonProps from '../../utils/commonProps'
import Chart from '../chart'
import { EChartOption } from 'echarts/lib/echarts'


const hBar = defineComponent({
  name: 'hBar',
  setup (props) {
    // const { dataSource, settings } = toRefs(props)

    // const options = ref(handleBar(dataSource.value, settings.value))

    // watch([dataSource, settings], () => {
    //   options.value = handleBar(dataSource.value, settings.value)
    // })

    // return {
    //   barOptions: options
    // }
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Object,
      default: () => ({})
    },
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  render() {
    const { dataSource, settings, ...rest } = this.$props

    return h(Chart, {
      ...rest,
      options: {}
    })
  },
})

hBar.install = (app: App) => {
  app.component(hBar.name, hBar)
}

export default hBar