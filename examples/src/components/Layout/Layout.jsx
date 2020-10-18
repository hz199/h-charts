
import { defineComponent } from 'vue'
import Sider from './Sider'
import './layout.less'

const Layout = defineComponent({
  name: 'Layout',
  props: {
    hasSider: {
      type: Boolean,
      default: () => false
    }
  },
  render () {
    return (
      <div class={this.hasSider ? 'layout layout-has-sider' : 'layout'}>
        {
          this.$slots
        }
      </div>
    )
  }
})

const Header = defineComponent({
  name: 'Header',
  render () {
    return (
      <header class="header">
        {
          this.$slots
        }
      </header>
    )
  }
})

const Footer = defineComponent({
  name: 'Footer',
  render () {
    return (
      <footer class="footer">
        {
          this.$slots
        }
      </footer>
    )
  }
})

const MainContent = defineComponent({
  name: 'MainContent',
  render () {
    return (
      <main class="main">
        {
          this.$slots
        }
      </main>
    )
  }
})

Layout.Sider = Sider
Layout.Header = Header
Layout.Footer = Footer
Layout.MainContent = MainContent

export default Layout