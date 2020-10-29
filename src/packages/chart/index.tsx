import { App, defineComponent } from 'vue'
import echarts, { ECharts } from 'echarts/lib/echarts'
import commonProps from '../../utils/commonProps'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/legend' // 标注
import { bind, clear } from 'size-sensor'
import { throttle } from '../../utils/index'
import { defaultTheme } from '../../utils/themes'

export interface ChartData {
  chartInstance: ECharts | null;
}

export interface ChartData {
  chartInstance: ECharts | null;
}

const hChart = defineComponent({
  name: 'hChart',
  props: {
    ...commonProps
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
          const currentTheme = this.theme || defaultTheme
          // 设置主题
          echarts.registerTheme(currentTheme.name, currentTheme.value)
          this.chartInstance = echarts.init(el, currentTheme.name, {
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