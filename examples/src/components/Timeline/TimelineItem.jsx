import { defineComponent } from 'vue'

const TimelineItem = defineComponent({
  name: 'TimelineItem',
  setup(context) {
  },
  render() {
    return (
      <li class="timeline__item">
        <div class="timeline__item-tail"></div>
        <div class="timeline__item-head"></div>
        <div class="timeline__item-content">
          {
            this.$slots.default()
          }
        </div>
      </li>
    )
  },
})

export default TimelineItem