import { defineComponent } from 'vue'

const Sider = defineComponent({
  name: 'Sider',
  render () {
    return (
      <div class="sider">
        <div class="sider-children"></div>
      </div>
    )
  }
})

export default Sider
