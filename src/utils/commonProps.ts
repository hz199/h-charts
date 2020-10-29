import { EChartOption } from 'echarts/lib/echarts'
import { CSSProperties, PropType } from 'vue'

const props = {
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
  },
  theme: {
    type: Object as PropType<{
      name: string
      value: object
    }>,
    default: () => null
  }
}

export default props