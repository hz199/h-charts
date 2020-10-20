import { App, defineComponent, PropType } from 'vue'
import echarts, { EChartOption } from 'echarts/lib/echarts'
import { bind, clear } from 'size-sensor'
import { ChartData } from './index.d'
import { throttle } from 'lodash'

const hChart = defineComponent({
  name: 'hChart',
  props: {
    renderer: {
      type: String as PropType<'canvas' | 'svg'>,
      default: () => 'canvas'
    },
    style: {
      type: Object as PropType<{} | null>,
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
      el: null
    } as ChartData
  },
  methods: {
    initChart (el: HTMLDivElement) {
      const renderer = this.renderer
      return new Promise((resolve) => {
        setTimeout(() => {
          this.chartInstance = echarts.init(el, undefined, {
            renderer,
            width: 'auto',
            height: 'auto'
          })
          resolve()
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
      const option = this.options

      this.chartInstance &&
        this.chartInstance.setOption(option, {
          notMerge,
          lazyUpdate,
          silent
        })
    },
    resize () {
      this.chartInstance && this.chartInstance.resize()
    },
    getInstance () {
      return this.chartInstance
    },
    dispose () {
      if (!this.chartInstance) {
        return
      }
      this.chartInstance.dispose()
      this.chartInstance = null
      clear(this.el)
    }
  },
  render() {
    const { style } = this
    const initStyle = Object.assign({}, style || {}, {
      width: '100%',
      height: '100%',
      minHeight: '300px'
    })

    return <div style={initStyle} ref='chartDom'></div>
  },
  async mounted () {
    await this.initChart(this.el!)
    this.setOption()
    const chartDom = this.$refs.chartDom as HTMLDivElement
    bind(chartDom, throttle(this.resize, 100))
  }
})

hChart.install = (app: App) => {
  app.component(hChart.name, hChart)
}

export default hChart