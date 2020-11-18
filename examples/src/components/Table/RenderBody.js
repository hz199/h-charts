import { h } from 'vue'

export default {
  name: 'RenderBody',
  functional: true,
  props: {
    render: Function,
    row: Object
  },
  render: () => {
    const params = {
      row: ctx.props.row
    }
    return this.$props.render(h, params)
  }
}
