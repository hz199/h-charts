import { defineComponent } from 'vue'

const Sider = defineComponent({
  name: 'HSider',
  render () {
    return (
      <aside class="sider">
        <div class="sider-children">
          {
            this.$slots
          }
        </div>
      </aside>
    )
  }
})

export default Sider
