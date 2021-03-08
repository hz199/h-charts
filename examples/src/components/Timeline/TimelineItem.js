import { defineComponent, h } from 'vue'

const TimelineItem = defineComponent({
  name: 'TimelineItem',
  render() {
    return h('li', {
      class: 'timeline__item'
    }, [
      h('div', {
        class: 'timeline__item-tail'
      }),
      h('div', {
        class: 'timeline__item-head'
      }),
      h('div', {
        class: 'timeline__item-content'
      }, this.$slots.default())
    ])
  },
})

export default TimelineItem