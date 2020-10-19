import { defineComponent } from 'vue'

const Sider = defineComponent({
  name: 'HSider',
  render () {
    return (
      <div class="sider">
        <div class="sider-children">
          {
            this.$slots
          }
        </div>
      </div>
    )
  }
})

export default Sider
