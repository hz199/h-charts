import { defineComponent, h } from 'vue'
import TimelineItem from './TimelineItem'
import './style.less'

const Timeline = defineComponent({
  name: 'Timeline',
  render() {
    return h('ul', {
      class: 'timeline'
    }, this.$slots.default())
  },
})

Timeline.TimelineItem = TimelineItem
export default Timeline
