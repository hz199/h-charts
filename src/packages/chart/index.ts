import { App, defineComponent, h, CSSProperties, PropType } from 'vue'
import echarts, { EChartOption, ECharts } from 'echarts/lib/echarts'
import commonProps from '../../utils/commonProps'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/legend' // 标注
import { bind, clear } from 'size-sensor'
import { throttle } from '../../utils/index'
import { defaultTheme } from '../../utils/themes'

const defaultStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: '400px'
}

export interface HChartData {
}

const HChart = defineComponent({
  props: {
    ...commonProps,
    options: {
      type: Object as PropType<EChartOption>,
      default: () => ({})
    }
  },
  data () {
    return {
    } as HChartData
  },
  methods: {
    initChart (el: HTMLDivElement): Promise<ECharts> {
      const renderer = this.renderer || 'canvas'
      return new Promise((resolve) => {
        this.$nextTick(() => {
          const currentTheme = this.theme || defaultTheme
          // 设置主题
          echarts.registerTheme(currentTheme.name, currentTheme.value)
          // 好坑啊 CHART_INSTANCE 不能做代理proxy 也就是不能用data 里面的参数 不然 resize 会报错。。。。。
          HChart.CHART_INSTANCE = echarts.init(el, currentTheme.name, {
            renderer,
            width: 'auto',
            height: 'auto'
          })
          resolve(HChart.CHART_INSTANCE)
        })
      })
    },
    setOption () {
      if (!HChart.CHART_INSTANCE) {
        return
      }

      const notMerge = this.notMerge
      const lazyUpdate = this.lazyUpdate
      const silent = this.silent
      const options = this.options

      HChart.CHART_INSTANCE.setOption(options, {
        notMerge,
        lazyUpdate,
        silent
      })
    },
    resizeChart () {
      HChart.CHART_INSTANCE && HChart.CHART_INSTANCE.resize()
    },
    getInstance () {
      return HChart.CHART_INSTANCE as ECharts
    },
    dispose () {
      if (this.resizeAble) {
        clear(this.$el)
      }

      if (!HChart.CHART_INSTANCE) {
        return
      }
      HChart.CHART_INSTANCE.dispose()
      HChart.CHART_INSTANCE = null
    }
  },
  beforeUnmount () {
    this.dispose()
  },
  mounted () {
    this.initChart(this.$el as HTMLDivElement).then(() => {
      this.setOption()

      if (this.resizeAble) {
        bind(this.$el as HTMLDivElement, throttle(this.resizeChart, 100))
      }
    })
  },
  created () {
    HChart.CHART_INSTANCE = null
  },
  watch: {
    options: {
      deep: true,
      handler (v) {
        if (v) {
          this.setOption()
        }
      }
    }
  },
  render () {
    const { style } = this
    const initStyle = Object.assign({}, defaultStyle, style || {})

    return h('div', {
      style: initStyle
    })
  }
})

HChart.install = (app: App) => {
  app.component(HChart.name, HChart)
}

export default HChart