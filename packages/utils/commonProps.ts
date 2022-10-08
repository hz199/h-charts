import { CSSProperties, PropType } from 'vue'
import { ObjectKey } from './type'

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
  // 是否无障碍
  ariaShow: {
    type: Boolean,
    default: () => false
  },
  /**
   * 在设置完 option 是否不立即更新视图，默认 false 立即更新
   */
  lazyUpdate: {
    type: Boolean,
    default: () => false
  },
  /**
   * 是否阻止抛出事件 默认false 抛出
   */
  silent: {
    type: Boolean,
    default: () => false
  },
  /**
   * 是否需要监听页面resize
   */
  resizeAble: {
    type: Boolean,
    default: () => true
  },
  /**
   * event事件
   */
  events: {
    type: Object as PropType<ObjectKey<Function>>,
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