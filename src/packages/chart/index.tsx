import { App, defineComponent } from 'vue'
import echarts, { ECharts } from 'echarts/lib/echarts'
import commonProps from '../../utils/commonProps'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/legend' // 标注
// import { bind, clear } from 'size-sensor'
import { throttle } from '../../utils/index'
import { defaultTheme } from '../../utils/themes'

export interface ChartData {
  chartInstance: ECharts | null;
  handleResize: () => void
  _once: {
    onresize: boolean
  }
}

const hChart = defineComponent({
  name: 'hChart',
  props: {
    ...commonProps
  },
  data () {
    return {
      chartInstance: null,
      handleResize: () => {},
      _once: {
        onresize: false
      }
    } as ChartData
  },
  methods: {
    initChart (el: HTMLDivElement): Promise<ECharts> {
      const renderer = this.renderer
      return new Promise((resolve) => {
        this.$nextTick(() => {
          const currentTheme = this.theme || defaultTheme
          // 设置主题
          echarts.registerTheme(currentTheme.name, currentTheme.value)
          this.chartInstance = echarts.init(el, currentTheme.name, {
            renderer,
            width: 'auto',
            height: 'auto'
          })
          resolve(this.chartInstance)
        })
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
    addResizeListener () {
      window.addEventListener('resize', this.handleResize)
      this._once.onresize = true
    },
    removeResizeListener () {
      window.removeEventListener('resize', this.handleResize)
      this._once.onresize = false
    },
    resizeChart () {
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
      // clear(this.$el)
    }
  },
  beforeUnmount () {
    this.dispose()
  },
  created () {
    this.chartInstance = null
    this.handleResize = throttle(this.resizeChart, 300)
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

      if (this.resizeAble && !this._once.onresize) {
        this.addResizeListener()
      }
    })
  }
})

hChart.install = (app: App) => {
  app.component(hChart.name, hChart)
}

export default hChart