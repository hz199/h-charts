import { defineComponent } from 'vue'
import TimelineItem from './TimelineItem'
import './style.less'

const Timeline = defineComponent({
  name: 'Timeline',
  setup(context) {
  },
  render() {
    return (
      <ul class="timeline">
        {
          this.$slots.default()
        }
      </ul>
    )
  },
})

Timeline.TimelineItem = TimelineItem
export default Timeline
