
import { defineComponent } from 'vue'
import Sider from './Sider'
import Header from './Header'
import './layout.less'

const Layout = defineComponent({
  name: 'Layout',
  render () {
    return (
      <div class="layout">
        {
          this.$slots
        }
      </div>
    )
  }
})

Layout.Sider = Sider
Layout.Header = Header

export default Layout