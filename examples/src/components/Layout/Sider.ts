import { defineComponent, h } from 'vue'

const Sider = defineComponent({
  name: 'HSider',
  render () {
    return h('aside', {
      class: 'aside'
    }, h('div', {
      class: 'sider-children'
    }, this.$slots.default && this.$slots.default()))
  }
})

export default Sider
