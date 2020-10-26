import { App, defineComponent, PropType, CSSProperties } from 'vue'
import echarts, { EChartOption, ECharts } from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/grid' // 布局
import 'echarts/lib/component/legend' // 标注
import { bind, clear } from 'size-sensor'
import { throttle } from '../../utils/index'
import { defaultTheme } from '../../utils/theme'

export interface ChartData {
  chartInstance: ECharts | null;
}

export interface ChartData {
  chartInstance: ECharts | null;
}

const hChart = defineComponent({
  name: 'hChart',
  props: {
    renderer: {
      type: String as PropType<'canvas' | 'svg'>,
      default: () => 'canvas'
    },
    style: {
      type: Object as PropType<CSSProperties | null>,
      default: () => null
    },
    notMerge: {
      type: Boolean,
      default: () => false
    },
    lazyUpdate: { // 在设置完 option 是否不立即更新视图，默认 false 立即更新
      type: Boolean,
      default: () => false
    },
    silent: { // 是否阻止抛出事件 默认false 抛出
      type: Boolean,
      default: () => false
    },
    options: {
      type: Object as PropType<EChartOption>,
      default: () => ({})
    }
  },
  data () {
    return {
      chartInstance: null,
    } as ChartData
  },
  methods: {
    initChart (el: HTMLDivElement): Promise<ECharts> {
      const renderer = this.renderer
      return new Promise((resolve) => {
        setTimeout(() => {
          // 设置主题
          echarts.registerTheme('defaultTheme', defaultTheme)
          this.chartInstance = echarts.init(el, 'defaultTheme', {
            renderer,
            width: 'auto',
            height: 'auto'
          })
          resolve(this.chartInstance)
        }, 0)
      })
    },
    setOption () {
      if (!this.chartInstance) {
        return
      }

      const notMerge = this.notMerge
      const lazyUpdate = this.lazyUpdate
      const silent = this.silent
      const options = this.options

      this.chartInstance &&
        this.chartInstance.setOption(options, {
          notMerge,
          lazyUpdate,
          silent
        })
    },
    resize () {
      this.chartInstance && this.chartInstance.resize()
    },
    getInstance () {
      return this.chartInstance as ECharts
    },
    dispose () {
      if (!this.chartInstance) {
        return
      }
      this.chartInstance.dispose()
      this.chartInstance = null
      clear(this.$el)
    }
  },
  render() {
    const { style } = this
    const initStyle = Object.assign({}, {
      width: '100%',
      height: '100%',
      minHeight: '300px'
    }, style || {})

    return <div style={initStyle}></div>
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
  mounted () {
    this.initChart(this.$el as HTMLDivElement).then(() => {
      this.setOption()
      bind(this.$el as HTMLDivElement, throttle(this.resize, 500))
    })
  }
})

hChart.install = (app: App) => {
  app.component(hChart.name, hChart)
}

export default hChart