
import { defineComponent, h } from 'vue'
import Sider from './Sider'
import './layout.less'

const Layout = defineComponent({
  name: 'HLayout',
  props: {
    hasSider: {
      type: Boolean,
      default: () => false
    }
  },
  render () {
    return h('div', {
      class: this.hasSider ? 'layout layout-has-sider' : 'layout'
    }, this.$slots.default && this.$slots.default())
  }
})

const Header = defineComponent({
  name: 'HHeader',
  render () {
    return h('header', {
      class: 'header'
    }, this.$slots.default && this.$slots.default())
  }
})

const Footer = defineComponent({
  name: 'HFooter',
  render () {
    return h('footer', {
      class: 'footer'
    }, this.$slots.default && this.$slots.default())
  }
})

const MainContent = defineComponent({
  name: 'HMainContent',
  render () {
    return h('main', {
      class: 'main'
    }, this.$slots.default && this.$slots.default())
  }
})

Layout.Sider = Sider
Layout.Header = Header
Layout.Footer = Footer
Layout.MainContent = MainContent

export default Layout