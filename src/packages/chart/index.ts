import { App, defineComponent, h, CSSProperties, PropType } from 'vue'
import commonProps from '../../utils/commonProps'
import { withInstall } from '../../utils/install'

import { bind, clear } from 'size-sensor'
import { throttle } from '../../utils/utils'
import { defaultTheme } from '../../utils/themes'
import { ObjectKey } from '../../utils/type'
import { EChartsOption } from 'echarts/types/dist/shared'
import * as echarts from 'echarts/core'

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]
)


const defaultStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: '400px'
}

const CHART_INSTANCES = new WeakMap<Object, echarts.ECharts | null>()

const HChart = defineComponent({
  props: {
    ...commonProps,
    options: {
      type: Object as PropType<EChartsOption>,
      required: true
    }
  },
  methods: {
    initChart(el: HTMLDivElement): Promise<echarts.ECharts> {
      const renderer = this.renderer || 'canvas'
      return new Promise((resolve) => {
        this.$nextTick(() => {
          const currentTheme = this.theme || defaultTheme
          // 设置主题
          echarts.registerTheme(currentTheme.name, currentTheme.value)
          // 好坑啊 CHART_INSTANCE 不能做代理proxy 也就是不能用data 里面的参数 不然 resize 会报错。。。。。
          const chartInstance = echarts.init(el, currentTheme.name, {
            renderer,
            width: undefined,
            height: undefined
          })

          CHART_INSTANCES.set(this, chartInstance)
          resolve(CHART_INSTANCES.get(this)!)
        })
      })
    },
    setOption() {
      if (!CHART_INSTANCES.get(this)) {
        return
      }

      const notMerge = this.notMerge
      const lazyUpdate = this.lazyUpdate
      const silent = this.silent
      const options = this.options

      const chart = CHART_INSTANCES.get(this)

      chart?.setOption(options, {
        notMerge,
        lazyUpdate,
        silent
      })
    },
    resizeChart() {
      CHART_INSTANCES.get(this)?.resize()
    },
    getInstance() {
      return CHART_INSTANCES.get(this)!
    },
    dispose() {
      if (this.resizeAble) {
        clear(this.$el)
      }

      CHART_INSTANCES.get(this)?.dispose()
      CHART_INSTANCES.set(this, null)
      CHART_INSTANCES.delete(this)
    },
    bindEvents(instance: echarts.ECharts, events: ObjectKey<Function>) {
      const _bindEvent = (eventName: string, func: Function) => {
        if (typeof eventName === 'string' && typeof func === 'function') {
          instance.on(eventName, (param: any) => {
            func(param, instance)
          })
        }
      }
      for (const eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          _bindEvent(eventName, events[eventName])
        }
      }
    }
  },
  beforeUnmount() {
    this.dispose()
  },
  mounted() {
    this.initChart(this.$el as HTMLDivElement).then((instance) => {
      this.setOption()
      // 绑定事件
      this.bindEvents(instance, this.events)

      if (this.resizeAble) {
        bind(this.$el as HTMLDivElement, throttle(this.resizeChart, 200))
      }
    })

  },
  created() {
    CHART_INSTANCES.set(this, null)
  },
  watch: {
    options: {
      deep: true,
      handler(v) {
        if (v) {
          this.setOption()
        }
      }
    }
  },
  render() {
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

export default withInstall(HChart);