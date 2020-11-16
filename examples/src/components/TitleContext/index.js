import { defineComponent } from 'vue'

const TitleContext = defineComponent({
  name: 'TitleContext',
  setup(context) {
  },
  render() {
    return this.$slots.default()
  },
})

export default TitleContext
