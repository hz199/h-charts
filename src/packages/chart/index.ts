import { App, defineComponent, h, Component, CSSProperties } from 'vue'
import echarts, { ECharts } from 'echarts/lib/echarts'
import commonProps from '../../utils/commonProps'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/legend' // 标注
import { bind, clear } from 'size-sensor'
import { throttle } from '../../utils/index'
import { redTheme } from '../../utils/themes'

const defaultStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: '300px'
}

export interface HChartData {
}

let CHART_INSTANCE: null | ECharts = null

const HChart = defineComponent({
  props: {
    ...commonProps
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
          const currentTheme = this.theme || redTheme
          // 设置主题
          echarts.registerTheme(currentTheme.name, currentTheme.value)
          // 好坑啊 CHART_INSTANCE 不能做代理proxy 不然 resize 会报错。。。。。
          CHART_INSTANCE = echarts.init(el, currentTheme.name, {
            renderer,
            width: 'auto',
            height: 'auto'
          })
          resolve(CHART_INSTANCE)
        })
      })
    },
    setOption () {
      if (!CHART_INSTANCE) {
        return
      }

      const notMerge = this.notMerge
      const lazyUpdate = this.lazyUpdate
      const silent = this.silent
      const options = this.options

      CHART_INSTANCE.setOption(options, {
        notMerge,
        lazyUpdate,
        silent
      })
    },
    resizeChart () {
      CHART_INSTANCE && CHART_INSTANCE.resize()
    },
    getInstance () {
      return CHART_INSTANCE as ECharts
    },
    dispose () {
      clear(this.$el)

      if (!CHART_INSTANCE) {
        return
      }
      CHART_INSTANCE.dispose()
      CHART_INSTANCE = null
    }
  },
  beforeUnmount () {
    this.dispose()
  },
  mounted () {
    this.initChart(this.$el as HTMLDivElement).then(() => {
      this.setOption()

      bind(this.$el as HTMLDivElement, throttle(this.resizeChart, 100))
    })
  },
  created () {
    CHART_INSTANCE = null
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